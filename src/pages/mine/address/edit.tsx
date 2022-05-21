import { useEffect, useState } from 'react';
import PageLayout from '@components/page-layout1'
import { NavBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';
import { PageStatusEnum } from '@constants';

export default () => {
	const history = useHistory();
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
			<NavBar onBack={() => history.goBack()}>修改地址</NavBar>
		</PageLayout>
	);
}
