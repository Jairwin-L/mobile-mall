import { ResponseCommon } from "./common";

export interface AddressItem {
	id: string;
	username: string;
	address: string;
	email_code: string;
	phone: string;
}

export interface AddressResponse extends ResponseCommon {
	data: AddressItem[];
}