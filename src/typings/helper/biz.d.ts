declare namespace IBiz {
	type IResetDocumentTitle = '标题' | '首页' | '修改密码' | '登录' | '页面找不到啦……' | '收藏' | '帮助中心' | '修改密码' | '我的' | '订单' | '地址' | '修改地址' | '添加地址' | '详情' | '购物车' | '运营';
	interface IPageStatus {
		loading: boolean;
		success: boolean;
	}
	// 获取列表信息
	interface CommonPageParam {
		curr: number;
		size: 10
	}

	interface IdParam {
		id: string
	}

	type PageStatus = 'normal' | 'loading' | 'error';

	interface IIf {
		when: boolean | string;
		children: React.ReactNode;
	}

	enum ErrorType {
		SYSTEM = '系统异常',
		SERVICE = '服务异常',
	}
	interface PageLayout {
		pageStatus?: PageStatus;
		footerFlag?: boolean;
		tabbarFlag?: boolean;
		children: React.ReactNode;
		onRetry?: () => void;
	}
}