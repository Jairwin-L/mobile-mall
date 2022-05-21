import apiRequest from '../index';
import "../../mock/category";

// 获取列表信息
export function list(): Promise<any> {
	return new Promise((resolve, reject) => {
		apiRequest.getMock('/category').then((res: any) => {
			console.log("res,,,", res);
			resolve(res)
		}).catch((e: any) => {
			reject(e)
		})
	})
}