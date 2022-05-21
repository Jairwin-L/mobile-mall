import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useForm, SubmitHandler } from "react-hook-form";
import { useForm, Resolver } from 'react-hook-form';
import { PageLayout } from '@components'
import Button from '@components/button'
import { NavBar } from 'antd-mobile';
import { resetDocumentTitle } from '@helper/biz';
import { PageStatusEnum } from '@constants';
type FormValues = {
	firstName: string;
	lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
				firstName: {
					type: 'required',
					message: 'This is required.',
				},
			}
			: {},
	};
};
export default () => {
	const navigate = useNavigate();
	const [pageStatus, setPageStatus] = useState<IBiz.PageStatus>(PageStatusEnum.NORMAL);
	// const { register, handleSubmit } = useForm<FormValues>();
	// const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
	const onSubmit = handleSubmit((data) => console.log(data));
	useEffect(() => {
		resetDocumentTitle('添加地址');
		fetchList();
	}, [])
	const fetchList = async () => {
		try {
			setPageStatus(PageStatusEnum.LOADING);
			const data = await 'fetchList';
			console.log(data);
			setPageStatus(PageStatusEnum.NORMAL);
		} catch (e) {
			// e == null && Toast.fail({ title: ErrorType.SERVICE });
			// e.status === 1 && Toast.fail({ title: ErrorType.SYSTEM });
			setPageStatus(PageStatusEnum.ERROR);
		}
	}
	const onAddAddress = async () => {
		const data = await '1234';
		console.log('data----->：', data);
	}
	return (
		<PageLayout {...{ pageStatus }}>
			<NavBar onBack={() => navigate(-1)}>添加地址</NavBar>
			{/* <form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("firstName")} />
				<input {...register("lastName")} />
				<input type="email" {...register("email")} />

				<input type="submit" />
			</form> */}
			<form onSubmit={onSubmit}>
				<input {...register("firstName")} placeholder="Bill" />
				{errors?.firstName && <p>{errors.firstName.message}</p>}

				<input {...register("lastName")} placeholder="Luo" />

				<input type="submit" />
			</form>
			<div className="form_container">
				<ul>
					<li>
						<span>姓名：</span>
						<input type="text" placeholder="请输入姓名" />
					</li>
					<li>
						<span>地址：</span>
						<input type="email" placeholder="请输入地址" />
					</li>
					<li>
						<Button type="primary" style={{ width: '100%' }} onClick={onAddAddress}></Button>
					</li>
				</ul>
			</div>
		</PageLayout>
	);
}
