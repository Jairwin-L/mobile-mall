import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

export default () => {
	const navigate = useNavigate();
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>帮助中心</NavBar>
		</>
	)
}
