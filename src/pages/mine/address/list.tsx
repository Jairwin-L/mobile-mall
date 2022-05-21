import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@components/page-layout1'
import Icon from "@components/icon";
import { NavBar } from 'antd-mobile';
import '@css/mine/address.less'
import * as AddressAction from "../../../api/request/address";
import { AddressItem } from '../../../api/response/address';
import { resetDocumentTitle } from '@helper/biz';
import { PageStatusEnum } from '@constants';

export default () => {
	const navigate = useNavigate();
	const [pageStatus, setPageStatus] = useState<IBiz.PageStatus>(PageStatusEnum.NORMAL);
	const [list, setList] = useState<any>([]);
	useEffect(() => {
		resetDocumentTitle('地址管理')
		fetchList();
	}, [])
	const fetchList = async () => {
		try {
			setPageStatus(PageStatusEnum.LOADING);
			const { data, success }: {
				data: AddressItem[];
				success: boolean;
			} = await AddressAction.list();
			if (!success) return setPageStatus(PageStatusEnum.ERROR);
			setList(data);
			setPageStatus(PageStatusEnum.NORMAL);
		} catch (e) {
			// e == null && Toast.fail({ title: ErrorType.SERVICE });
			// e.status === 1 && Toast.fail({ title: ErrorType.SYSTEM });
			setPageStatus(PageStatusEnum.ERROR);
		}
	}
	const onEditAddress = (item: any) => {
		navigate(`/address/edit?id=${item.id}`);
	}
	return (
		<>
			<PageLayout {...{ pageStatus }} onRetry={() => fetchList()}>
				<NavBar onBack={() => navigate(-1)}>地址管理</NavBar>
				<div className="address_container">
					<ul>
						{
							list.map((item: AddressItem) => {
								return (
									<li key={item.id}>
										<div className="address_user">{item.username}<span>{item.phone}</span><span className="address_mark">默认</span></div>
										<div className="address_info">{item.address}<Icon type="iconbianji" className="address_edit" onClick={() => onEditAddress(item)} /></div>
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className="add_container" onClick={() => navigate('/address/add')}>
					<Icon type="iconicon-test" className="icon_add" />
 				添加收货地址
 			</div>
			</PageLayout>
		</>
	);
}
