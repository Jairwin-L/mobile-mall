import { useEffect } from 'react'
import '@css/mine/operation.less'
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const navigate = useNavigate();
	useEffect(() => {
		resetDocumentTitle('运营')
	}, [])
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>运营</NavBar>
		</>
	)
}
