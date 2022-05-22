import { useEffect } from 'react';
import { PageLayout } from '@components'
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const navigate = useNavigate();
	useEffect(() => {
		resetDocumentTitle('修改地址');
		fetchList();
	}, [])
	const fetchList = async () => {
		try {
			const data = await 'fetchList';
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<PageLayout>
			<NavBar onBack={() => navigate(-1)}>修改地址</NavBar>
		</PageLayout>
	);
}
