import { ApiUrl } from "../typings/const";

export let BASE_URL = '';
export const HostName = window.location.hostname;
export const protocol = window.location.protocol;
export const ORIGIN = window.location.origin;

const API_ENV_URL = {
	LOCAL: 'dev.jairwin.cn',
	PREVIEW: 'dev.jairwin.cn:8061',
	PROD: 'mall.jairwin.cn',
	VERCEL: 'mobile-mall.vercel.app',
}

export const API_URL_MAP = {
	[API_ENV_URL.LOCAL]: ApiUrl.MOCK,
	[API_ENV_URL.PREVIEW]: ApiUrl.PROD,
	[API_ENV_URL.PROD]: ApiUrl.PROD,
	[API_ENV_URL.VERCEL]: ApiUrl.PROD,
}

for (let [key, value] of Object.entries(API_URL_MAP)) {
	if (HostName.includes(key)) {
		BASE_URL = `${value}`;
		break
	}
}

export default {
	BASE_URL,
	API_URL_MAP,
	HostName,
	protocol,
	ORIGIN
}
