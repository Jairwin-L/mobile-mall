import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@components'
import Icon from "@components/icon";
import { NavBar } from 'antd-mobile';
import * as AddressAction from "../../../api/request/address";
import { AddressItem } from '../../../api/response/address';
import { resetDocumentTitle } from '@helper/biz';
import '@css/mine/address.less'

export default () => {
	const navigate = useNavigate();
	const [list, setList] = useState<any>([]);
	useEffect(() => {
		resetDocumentTitle('地址')
		fetchList();
	}, [])
	const fetchList = async () => {
		try {
			const { data, success }: {
				data: AddressItem[];
				success: boolean;
			} = await AddressAction.list();
			setList(data);
		} catch (e) {
			console.log(e);
		}
	}
	const onEditAddress = (item: any) => {
		navigate(`/address/edit?id=${item.id}`);
	}
	return (
		<>
			<PageLayout onRetry={() => fetchList()}>
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
