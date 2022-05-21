export interface TestResponse extends ResponseCommon {
	data: any;
}

// export interface SuccessResponse {
// 	success: boolean;
// }

// Response
export interface CommonPageResponse {
	totalCount: number // 总数
	pageSize: 10 // 每页条数
	totalPage: number
	curPage: number // 页码
}
// 列表
export interface CommonPageParam {
	curr: number | undefined,
	size: 10
}

// 查询/删除/下标
export interface IdParam {
	id?: string | undefined
	userId?: string | undefined
}

// 查询/删除/下标
export interface ResponseCommon {
	success: boolean;
}