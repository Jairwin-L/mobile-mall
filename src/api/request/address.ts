import apiRequest from '../index';
import { ADDRESS } from '../const';

// 获取列表信息
export const list = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		apiRequest.get(ADDRESS.LIST).then((res: any) => {
			resolve(res);
		}).catch((e: any) => {
			reject(e);
		})
	})
}