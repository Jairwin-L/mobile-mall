import { useState, useEffect } from 'react';
import * as TestAction from "../api/request/shop";
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@components';
import '@css/main.less'

interface GoodsItem {
	id: string;
	title: string;
	price: number;
	buyCount: number;
	url: string;
}

export default function Main () {
	const navigate = useNavigate();
	const [list, setList] = useState<GoodsItem[]>([]);
	const [pageStatus, setPageStatus] = useState<IBiz.IPageStatus>({
		loading: true,
		success: true,
	});
	useEffect(() => {
		fetchList();
	}, []);
	const fetchList = async () => {
		try {
			const { data, success } = await TestAction.list();
			if (!success) {
				return setPageStatus({
					loading: false,
					success: false,
				});
			}
			setList(data.list);
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
	const onGoDetail = (item: GoodsItem) => {
		navigate(`/detail/${item.id}`);
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
	return (
		<PageLayout {...{ ...pageLayout, footerFlag: true, tabbarFlag: true }}>
			<div className="list_container">
				<ul>
					{
						list?.map((item: GoodsItem) => {
							return (
								<li key={item.id} onClick={() => onGoDetail(item)}>
									<img src={item.url} alt={item.title} />
									<div className="goods_desc">
										<p className="title">{item.title}</p>
										<div className="info">
											<span>¥{item.price ?? '--'}</span>
											<span>{item.buyCount ?? '--'}人已购买</span>
										</div>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		</PageLayout>
	)
}
