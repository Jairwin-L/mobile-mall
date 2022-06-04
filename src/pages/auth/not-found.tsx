import { Button, ErrorBlock } from 'antd-mobile';
import { useNavigate } from 'react-router-dom'

export default function NotFound () {
  const navigate = useNavigate();
	return (
		<ErrorBlock fullPage status='empty'>
			<Button color='primary' onClick={() => navigate('/')}>返回首页</Button>
		</ErrorBlock>
	)
}
