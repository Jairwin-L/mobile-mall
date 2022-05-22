import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@components'
import { Button, Form, Input, NavBar } from 'antd-mobile';
import { resetDocumentTitle } from '@helper/biz';

export default () => {
	const navigate = useNavigate();
	const onFinish = async (values: any) => {
		console.log('values----->：', values);
  }
	useEffect(() => {
		resetDocumentTitle('添加地址');
	}, []);
	return (
		<PageLayout>
			<NavBar onBack={() => navigate(-1)}>添加地址</NavBar>
			<Form
        layout='horizontal'
				onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item
          name='name'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder='请输入姓名' />
        </Form.Item>
      </Form>
		</PageLayout>
	);
}
