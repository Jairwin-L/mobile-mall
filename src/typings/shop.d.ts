declare namespace IPageShop {
	interface Data {
		list: List[];
	}
	interface List {
		id: string;
		title: string;
		price: number;
		count: number;
		url: string;
	}
}