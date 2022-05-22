import { HostName } from "@constants";
import { ApiUrl, API_ENV_URL } from "@constants/api";

export const API_URL_MAP: { [key: string]: string } = {
	[API_ENV_URL.LOCAL]: ApiUrl.MOCK,
	[API_ENV_URL.PREVIEW]: ApiUrl.PROD,
	[API_ENV_URL.PROD]: ApiUrl.PROD,
	[API_ENV_URL.VERCEL]: ApiUrl.PROD,
}

export const BASE_URL = API_URL_MAP[HostName];
