import { useEffect } from 'react'
import { Button } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const history = useHistory();
	useEffect(() => {
		resetDocumentTitle('页面找不到啦……')
	}, [])
	return (
		<>页面找不到啦……
			{/* <Button onClick={() => { history.goBack() }}>返回</Button> */}
		</>
	)
}
