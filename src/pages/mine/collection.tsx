import { useEffect } from 'react'
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { resetDocumentTitle } from '@helper/biz';
export default () => {
	const navigate = useNavigate();
	useEffect(() => {
		resetDocumentTitle('收藏');
	}, [])
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>收藏</NavBar>
		</>
	)
}
