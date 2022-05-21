import { useEffect } from 'react'
import { NavBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const history = useHistory();
	useEffect(() => {
		resetDocumentTitle('帮助中心');
	}, [])
	return (
		<>
			<NavBar onBack={() => history.goBack()}>帮助中心</NavBar>
		</>
	)
}
