import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword () {
	const navigate = useNavigate();
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>修改密码</NavBar>
		</>
	)
}
