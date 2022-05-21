import apiRequest from '../index'
import { SHOP } from '../const'

// 获取列表信息
export const list = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		apiRequest.get(SHOP.LIST).then((res: any) => {
			resolve(res)
		}).catch((e: any) => {
			reject(e)
		})
	})
}
