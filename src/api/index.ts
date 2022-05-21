import fly, { FlyResponse, FlyRequestConfig } from 'flyio'
import config from './config'
interface CommonResponse {
	success: boolean;
	msg: string;
	data: any;
}

type RequestConfig = FlyRequestConfig & { data: any }

function commonResponse(res: RequestConfig) {
	const { success, data, msg }: CommonResponse = res?.data;
	const resData = {
		success,
		data,
		msg,
	}
	return resData || {};
}

fly.config.timeout = 3500;
fly.interceptors.request.use((request: FlyRequestConfig) => {
	if (sessionStorage.getItem('token')) {
		request.headers['token'] = sessionStorage.getItem('token')
		request.headers['Content-Type'] = 'application/json'
		request.headers['Accept'] = 'application/json'
	}
	return request
})

fly.interceptors.response.use(
	(response: FlyResponse) => { return response },
	(err: any) => {
		// const data: any = err.response?.data
		// const statusCode = Number(data?.code)
		// if (statusCode === 401) {
		// 	return Promise.reject(
		// 		Modal.error({
		// 			title: `提示`,
		// 			content: `登录超时，请重新登录！`,
		// 			centered: true,
		// 			okText: '退出',
		// 			onOk: () => {
		// 				sessionStorage.clear()
		// 				window.location.replace(`${ORIGIN}`)
		// 			}
		// 		})
		// 	)
		// }
		// if (statusCode === 404) return Promise.reject(err)
		// //发生网络错误后会走到这里
		// return Promise.resolve(err.status)
	}
)

// const responseResolve = (res: any, data: any, success: any, msg: any) => {
// 	return new Promise((resolve, reject) => {
// 		// 跨域、域名有误
// 		if (Number(res) === 0) {
// 			Toast.fail('无法正常连接服务，请联系服务端技术同学进行处理');
// 			reject({ success })
// 			return
// 		}
// 		// 接口不存在
// 		if (Number(res) === 404) {
// 			Toast.fail('接口不存在，请联系相关技术同学进行处理');
// 			reject({ success })
// 			return
// 		}
// 		if (success) {
// 			console.log(`111=====----->：`, 111);
// 			msg && msg && Toast.success(msg)
// 			resolve({ success, data });
// 		} else {
// 			Toast.fail(msg || ErrorType.SERVICE);
// 			reject({ success })
// 		}
// 	})
// }

class ApiRequest {
	private static instance: ApiRequest
	private BASE_URL: string = ''
	private constructor(BASE_URL: string) {
		this.BASE_URL = BASE_URL
	}
	public static getInstance(BASE_URL: string) {
		if (!this.instance) this.instance = new ApiRequest(BASE_URL)
		return this.instance
	}
	public async getMock(url: string): Promise<any> {
		const res: any = await fly.get(`${this.BASE_URL}${url}`)
		// const res: any = params.id || params.userId ? await fly.get(`${this.BASE_URL}${url}/${params.id || params.userId}`) : await fly.get(`${this.BASE_URL}${url}`, params)
		const { data, success, msg } = commonResponse(res);
		// responseResolve(res, data, success, msg);
		return new Promise((resolve, reject) => {
			// 跨域、域名有误
			if (Number(res) === 0) {
				// Toast.fail({ title: '无法正常连接服务，请联系服务端技术同学进行处理' });
				reject({ success: false })
				return
			}
			// 接口不存在
			if (Number(res) === 404) {
				// Toast.fail({ title: '接口不存在，请联系相关技术同学进行处理' });
				reject({ success: false })
				return
			}
			if (success) {
				// msg && Toast.success(msg)
				resolve({ data, success });
			} else {
				// Toast.fail(msg || ErrorType.SERVICE);
				reject({ success: false });
			}
		})
	}
	public async get(url: string): Promise<any> {
		const res: any = await fly.get(`${this.BASE_URL}${url}`)
		// const res: any = params.id || params.userId ? await fly.get(`${this.BASE_URL}${url}/${params.id || params.userId}`) : await fly.get(`${this.BASE_URL}${url}`, params)
		const { data, success, msg } = commonResponse(res);
		// responseResolve(res, data, success, msg);
		return new Promise((resolve, reject) => {
			// 跨域、域名有误
			if (Number(res) === 0) {
				// Toast.fail({ title: '无法正常连接服务，请联系服务端技术同学进行处理' });
				reject({ success: false })
				return
			}
			// 接口不存在
			if (Number(res) === 404) {
				// Toast.fail({ title: '接口不存在，请联系相关技术同学进行处理' });
				reject({ success: false })
				return
			}
			if (success) {
				// msg && Toast.success(msg)
				resolve({ data, success });
			} else {
				// Toast.fail(msg || ErrorType.SERVICE);
				reject({ success: false });
			}
		})
	}
	public async post(url: string, obj: any = {}): Promise<any> {
		const res: any = await fly.post(`${this.BASE_URL}${url}`, obj)
		const { data, success, msg } = commonResponse(res);
		return new Promise((resolve, reject) => {
			// 跨域、域名有误
			if (Number(res) === 0) {
				// Toast.fail('无法正常连接服务，请联系服务端技术同学进行处理');
				reject({ success: false })
				return
			}
			// 接口不存在
			if (Number(res) === 404) {
				// Toast.fail('接口不存在，请联系相关技术同学进行处理');
				reject({ success: false })
				return
			}
			if (success) {
				// msg && Toast.success(msg)
				resolve({ success, data });
			} else {
				// Toast.fail(msg || ErrorType.SERVICE);
				reject({ success: false })
			}
		})
	}
	public async delete(url: string, params: any = {}): Promise<any> {
		const res: any = await fly.delete(`${this.BASE_URL}${url}/${params}`)
		const { data, success, msg } = commonResponse(res);
		return new Promise((resolve, reject) => {
			// 跨域、域名有误
			if (Number(res) === 0) {
				// Toast.fail('无法正常连接服务，请联系服务端技术同学进行处理');
				reject({ success: false })
				return
			}
			// 接口不存在
			if (Number(res) === 404) {
				// Toast.fail('接口不存在，请联系相关技术同学进行处理');
				reject({ success: false })
				return
			}
			if (success) {
				// msg && Toast.success(msg)
				resolve({ success, data });
			} else {
				// Toast.fail(msg || ErrorType.SERVICE);
				reject({ success: false })
			}
		})
	}
	public async put(url: string, obj: any = {}): Promise<any> {
		const res: any = await fly.put(`${this.BASE_URL}${url}`, obj)
		const { data, success, msg } = commonResponse(res);
		return new Promise((resolve, reject) => {
			// 跨域、域名有误
			if (Number(res) === 0) {
				// Toast.fail('无法正常连接服务，请联系服务端技术同学进行处理');
				reject({ success: false })
				return
			}
			// 接口不存在
			if (Number(res) === 404) {
				// Toast.fail('接口不存在，请联系相关技术同学进行处理');
				reject({ success: false })
				return
			}
			if (success) {
				// msg && Toast.success(msg)
				resolve({ success, data });
			} else {
				// Toast.fail(msg || ErrorType.SERVICE);
				reject({ success: false })
			}
		})
	}
}

export default ApiRequest.getInstance(config.BASE_URL)
