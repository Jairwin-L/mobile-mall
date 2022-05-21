import { useEffect, useState } from 'react';
import PageLayout from '@components/page-layout1'
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';
import { PageStatusEnum } from '@constants';

export default () => {
	const navigate = useNavigate();
	const [pageStatus, setPageStatus] = useState<IBiz.PageStatus>(PageStatusEnum.NORMAL);
	useEffect(() => {
		resetDocumentTitle('修改地址');
		fetchList();
	}, [])
	const fetchList = async () => {
		try {
			setPageStatus(PageStatusEnum.LOADING);
			const data = await 'fetchList';
			console.log(data);
			setPageStatus(PageStatusEnum.NORMAL);
		} catch (e) {
			// e == null && Toast.fail({ title: ErrorType.SERVICE });
			// e.status === 1 && Toast.fail({ title: ErrorType.SYSTEM });
			setPageStatus(PageStatusEnum.ERROR);
		}
	}
	return (
		<PageLayout {...{ pageStatus }}>
			<NavBar onBack={() => navigate(-1)}>修改地址</NavBar>
		</PageLayout>
	);
}
