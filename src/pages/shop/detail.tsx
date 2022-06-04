import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { NavBar } from 'antd-mobile';
import * as TestAction from "../../api/request/shop";
import { PageLayout } from '@components';
import '@css/shop/detail.less';

interface GoodsItem {
	id: string;
	title: string;
	price: number;
	buyCount: number;
	url: any;
}
export default function GoodsDetail () {
	const navigate = useNavigate();
	const id = useParams<any>().id
	const [pageStatus, setPageStatus] = useState<IBiz.IPageStatus>({
		loading: true,
		success: true,
	});
	const [model, setModel] = useState<GoodsItem>()
	useEffect(() => {
		fetchModel()
	}, [id])
	const fetchModel = async () => {
		try {
			const { data, success }: any = await TestAction.list();
			// const { data, success }: any = await queryDetailGoods
			if (!success) {
				return setPageStatus({
					loading: false,
					success: false,
				});
			}
			setModel(data);
			setPageStatus({
				loading: false,
				success: true,
			});
		} catch (e) {
			console.log('e----->：', e);
		}
	}

	return (
		<PageLayout {...{ ...pageStatus }}>
			<NavBar onBack={() => navigate(-1)}>详情</NavBar>
		</PageLayout>
	);
};
