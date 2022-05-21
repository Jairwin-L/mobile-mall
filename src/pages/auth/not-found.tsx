import { useEffect } from 'react'
import { Button, ErrorBlock } from 'antd-mobile';
import { useNavigate } from 'react-router-dom'
import { resetDocumentTitle } from '@helper/biz';

export default () => {
  const navigate = useNavigate();
	useEffect(() => {
		resetDocumentTitle('页面找不到啦……')
	}, [])
	return (
		<ErrorBlock fullPage status='empty'>
			<Button color='primary' onClick={() => navigate('/')}>返回首页</Button>
		</ErrorBlock>
	)
}
