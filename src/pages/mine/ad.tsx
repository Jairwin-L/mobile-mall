import '@css/mine/operation.less'
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';

export default function Ad () {
	const navigate = useNavigate();
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>运营</NavBar>
		</>
	)
}
