import {
  Form,
  Input,
  Button,
	NavBar,
} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const list = [
	{
		label: '用户名',
		value: '',
		placeholder: 'username',
		required: true,
	}
]

export default () => {
	const navigate = useNavigate();
	const onFormBlur = (item: any) => {
		console.log('item----->：', item);
	}
	return (
		<>
			{/* <Form list={list} onFormBlur={onFormBlur} /> */}
			<NavBar onBack={() => navigate(-1)}>登录</NavBar>
			<Form
        name='form'
        // onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
      </Form>
		</>
	)
}
