import { useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  Switch,
	NavBar,
} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { resetDocumentTitle } from '@helper/biz'
// import Form from '@components/form';

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
	useEffect(() => {
		resetDocumentTitle('登录');
	}, [])
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
