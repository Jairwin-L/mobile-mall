import { useEffect } from 'react'
import '@css/mine/operation.less'
import { useHistory } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const history = useHistory();
	useEffect(() => {
		resetDocumentTitle('运营')
	}, [])
	return (
		<>
			<NavBar onBack={() => history.goBack()}>运营</NavBar>
		</>
	)
}
