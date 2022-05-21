declare namespace IPageCategory {
	interface Data {
		list: List[];
	}
	
	interface List {
		id: string;
		superCategoryId: number;
		showIndex: number;
		name: string;
		frontName: string;
		frontNameIcon: string;
		frontDesc: string;
		bannerUrl: string;
		bannerList: string;
		iconUrl: string;
		imgUrl: string;
		level: string;
		subCateList: SubCateList[];
		wapBannerUrl: string;
		type: number;
		wapExpandPicTargetUrl: string;
		categoryType: number;
		extra: string;
	}
	
	interface RootInterface {
		success: boolean;
		data: Data;
	}
	
	interface SubCateList {
		id: string;
		name: string;
		categoryList: List[];
	}	
}