import { useState, useEffect, useRef } from 'react'
import { PageLayout } from '@components'
import * as TestAction from "@api/request/shop";
import Icon from '@components/icon';
import { FooterToolbar } from '@components';
import { Dialog, Toast, SwipeAction, Stepper } from 'antd-mobile';
import { SwipeActionRef } from 'antd-mobile/es/components/swipe-action'
import { NUMBER_PLACEHOLDER } from '@constants/number';
import '@css/shop/index.less'

export default function Shop () {
	const swipeActionRef = useRef<SwipeActionRef>(null);
  const [allSelected, setAllSelected] = useState<any>(false);
  const [list, setList] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<any>([]);
	const [pageStatus, setPageStatus] = useState<IBiz.IPageStatus>({
		loading: true,
		success: true,
	});
	const fetchList = async () => {
		try {
			const { data, success } = await TestAction.list();
			if (!success) {
				return setPageStatus({
					loading: false,
					success: false,
				});
			}
			const tempList: any = [];
			data.list.forEach((item: any) => {
				tempList.push({
					...item,
					isSelected: false,
				})
			});
			setList(tempList);
			setPageStatus({
				loading: false,
				success: true,
			});
		} catch (e) {
			setPageStatus({
				loading: false,
				success: false,
			});
		}
	}
	// 下单支付
	const onPayOrder = () => {
		if (selectedList.length <= 0) {
			Toast.show({
				content: '您还没有选择宝贝哦',
			});
			return;
		}
  }
	// 商品删除
  const onDel = () => {
		if (selectedList.length <= 0) {
			Toast.show({
				content: '您还没有选择宝贝哦',
			});
			return;
		}
  }
	// 单个购物车删除
	const onDelSingleItem = (item: any) => {
		Dialog.confirm({
			content: `确定要删除“${item.title || NUMBER_PLACEHOLDER}”嘛？`,
			onConfirm: () => {
				setList(list.filter((delItem: any) => delItem.id !== item.id))
				Toast.show({ content: '删除成功' });
			}
		})
		swipeActionRef.current?.close();
	}
	// 单个商品选择和不选择
  const onToggleSelected = (index: number) => {
		list[index].isSelected = !list[index].isSelected;
		getSelectedShop(list, list);
  }
	// 单个商品价格计算
	const onCalculatePrice = (index: number, value: number) => {
		list[index].count = value;
		const priceList = list.filter((item: any) => item.isSelected);
		const total = priceList.reduce((acc: any, cur: any) => acc + cur.price * cur.count, 0);
		setTotalPrice(total);
		setList([...list]);
  }
	// 全选和非全选
	const onSelectedAll = () => {
		const dataList = list?.map((item: any) => {
			return {
				...item,
				isSelected: selectedList.length === list.length ? !item.isSelected : true,
			}
		});
		getSelectedShop(dataList, dataList);
	}
	// 计算已选商品价格
	const getSelectedShop = (selectedShopList: any, originList: any) => {
		const priceList = selectedShopList.filter((item: any) => item.isSelected);
		const total = priceList.reduce((acc: any, cur: any) => acc + cur.price * cur.count, 0);
		setTotalPrice(total);
		setSelectedList(priceList);
		setList(originList);
		setAllSelected(priceList.length === originList.length);
	}
	const pageLayout = {
    ...pageStatus,
    onRefresh: () => {
			setPageStatus({
				loading: true,
				success: true,
			});
			fetchList();
		},
  };
	useEffect(() => {
		fetchList();
	}, []);
	return (
		<PageLayout {...{ ...pageLayout, tabbarFlag: true }}>
			<div className="base_container">
				<div className="header_title">
					<div className="title">
						<span>购物车共计<span className="number">{list?.length ?? '--'}</span>件商品</span>
					</div>
					<div className="delete_btn" onClick={onDel}>删除</div>
				</div>
				<div className="shop_list_container">
					<ul>
						{
							list.map((item: any, index: number) => {
								return (
									<SwipeAction
										key={item.id}
										ref={swipeActionRef}
										rightActions={[
											{
												key: 'delete',
												text: '删除',
												color: 'danger',
												onClick: () => onDelSingleItem(item),
											},
										]}
									>
										<li>
											<Icon className="checkbox_icon" type={item?.isSelected ? 'checkbox-selected' : 'checkbox-unselected'} onClick={() => onToggleSelected(index)} />
											<div className="shop_img_container">
												<img className="shop_img" src={item.url} alt={item.title} />
											</div>
											<div className="shop_desc">
												<p className="shop_title">{item.title}</p>
												<div className="shop_money">
													<span>¥{item.price ?? '0'}</span>
													<Stepper
														value={item.count}
														min={1}
														max={100000}
														onChange={(value: number) => onCalculatePrice(index, value)}
													/>
												</div>
											</div>
										</li>
									</SwipeAction>
								)
							})
						}
					</ul>
				</div>
			</div>
			<FooterToolbar>
				<div className="shop_footer">
					<div className="shop_selected" onClick={onSelectedAll}>
						<Icon className="checkbox_icon" type={allSelected ? 'checkbox-selected' : 'checkbox-unselected'} />
						<span>全选</span>
					</div>
					<div className="footer_price">
						<div className="total_price">
							合计：¥{totalPrice}
						</div>
						<div className="calculate_btn" onClick={onPayOrder}>结算</div>
					</div>
				</div>
			</FooterToolbar>
		</PageLayout>
	)
}
