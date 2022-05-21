import { useEffect } from 'react'
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const navigate = useNavigate();
	useEffect(() => {
		resetDocumentTitle('修改密码');
	}, [])
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>修改密码</NavBar>
		</>
	)
}
