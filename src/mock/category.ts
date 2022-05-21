import { mock } from 'mockjs';

export const data = mock("/category", {
	"success": true,
	"data": {
		"list|3": [{
			"id": /\d{5,10}/,
			"title|1": [
				"透明衣物收纳箱 衣柜装衣服被子整理箱子布艺",
				"透明衣物收纳箱",
				"透明衣物收纳箱 衣柜装衣服被子整理箱子布艺衣柜装衣服被子整理箱子布艺衣柜装衣服被子整理箱子布艺衣柜装衣服被子整理箱子布艺衣柜装衣服被子整理箱子布艺 折叠家用换季收纳盒",
			],
			"price|+10": 10,
			"count|+5": 5,
			"url": "https://gw.alicdn.com/bao/uploaded/i1/1993812065/O1CN01jEcF4X1R7oOZIoqdx_!!0-item_pic.jpg",
		}]
	}
});