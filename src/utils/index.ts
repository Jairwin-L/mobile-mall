// const dateformat = require('dateformat-util')

export const UTIL = {
	/**
 *
 * date对象格式化方法
 * @param {*} now 当前时间或 new Date(时间戳)
 * @param {*} mask 格式化类型
 * @returns 格式化后的日期str
 */
	// formatDate(now: Date, mask = 'yyyy-MM-dd') {
	// 	return dateformat.format(now, mask)
	// },
	arrayRandomColor() {
		return "#" + ((color: string) => {
			return new Array(7 - color.length).join("0") + color
		})((Math.random() * 0x1000000 << 0).toString(16))
	},
	transTitle(URL: string) {
		const map: { [key: string]: string } = {
			'localhost': `Local | `,
			'test.admin.jairwin.cn': `Test | `,
			'admin.jairwin.cn': ``
		}
		return map[URL]
	},
	getDateDiffCountdown(time: string) {
		let result = time
		const dateTimeStamp = new Date(time.replace(/-/g, '/')).getTime()
		const minute = 1000 * 60
		const hour = minute * 60
		const day = hour * 24
		const month = day * 30
		const now = new Date().getTime()
		const diffValue = now - dateTimeStamp
		if (diffValue < 0) return
		const monthC: any = diffValue / month
		const weekC: any = diffValue / (7 * day)
		const dayC: any = diffValue / day
		const hourC: any = diffValue / hour
		const minC: any = diffValue / minute
		if (monthC >= 1) {
			result = `${parseInt(monthC)}个月前`
			return result
		}
		if (weekC >= 1) {
			result = `${parseInt(weekC)}周前`
			return result;
		}
		if (dayC >= 1) {
			result = `${parseInt(dayC)}天前`
			return result;
		}
		if (hourC >= 1) {
			result = `${parseInt(hourC)}小时前`
			return result;
		}
		if (minC >= 1) {
			result = `${parseInt(minC)}分钟前`
			return result
		}
		return `刚刚`
	},
	_download(dUrl: string) {
		let sUrl: any = formatImgSrc(dUrl)
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
			const link: any = document.createElement('a');
			link.href = sUrl;
			link.target = '_self';
			if (link.download !== undefined) {
				const fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.lastIndexOf('?'));
				link.download = fileName;
			}
			if (document.createEvent) {
				const e = document.createEvent('MouseEvents');
				e.initEvent('click', true, true);
				link.dispatchEvent(e);
				return true;
			}
		}
		if (sUrl.indexOf('?') === -1) sUrl += '?download';
		window.open(sUrl, '_self');
		return true;
	},
	copyText(value: any) {
		const forExecElement = createElementForExecCommand(value)
		selectContent(forExecElement)
		document.execCommand('copy', false)
		document.body.removeChild(forExecElement)
		return true
	},
	// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
	urlToList(url: any) {
		const urllist = url.split('/').filter((i: any) => i);
		return urllist.map((urlItem: any, index: number) => `/${urllist.slice(0, index + 1).join('/')}`);
	}
}
const createElementForExecCommand = (textToClipboard: string) => {
	const forExecElement = document.createElement('div')
	forExecElement.style.position = 'absolute'
	forExecElement.style.left = '-10000px'
	forExecElement.style.top = '-10000px'
	forExecElement.textContent = textToClipboard
	document.body.appendChild(forExecElement)
	return forExecElement
}
const selectContent = (element: Node) => {
	const rangeToSelect = document.createRange()
	rangeToSelect.selectNodeContents(element)
	const selection = window.getSelection()
	selection!.removeAllRanges()
	selection!.addRange(rangeToSelect)
}

export const canUseDOM = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)

export const IS_IOS =
	canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent)

// const isNotNull = (val any) => {
//   if (val === null || val === undefined) {
//     return false;
//   }
//   if (typeof val === 'string' && (val === '' || val.trim() === '')) {
//     return false;
//   }
//   if (typeof val === 'object' && val.length <= 0) {
//     return false;
//   }
//   if (typeof val === 'object') {
//     return Object.keys(val).length !== 0;
//   }
//   return true;
// }

export const notNullArray = (array: any) => Array.isArray(array) && array.length >= 1 ? true : false;

const _isNotNull = (val: any) => {
	if (val === null || val === undefined) {
		return false;
	}
	if (typeof val === 'string' && (val === '' || val.trim() === '')) {
		return false;
	}
	if (typeof val === 'object' && val.length <= 0) {
		return false;
	}
	if (typeof val === 'object') {
		return Object.keys(val).length !== 0;
	}
	return true;
}

/**
 * 格式化图片url
 * @param {string} src 图片url
 */
const formatImgSrc = (src = '') => {
	if (_isNotNull(src)) {
		src = `${src}`;
		if (src.indexOf('//') === 0 || src.indexOf('http:') === 0 || src.indexOf('https:') === 0) {
			return src;
		} else {
			return `//${src}`;
		}
	}
}

/* eslint-disable */
/**
 * 三个参数
 * file：一个是文件(类型是图片格式)，
 * w：一个是文件压缩的后宽度，宽度越小，字节越小
 * objDiv：一个是容器或者回调函数
 */
export function imgCompress(file: any, w: any, objDiv: any) {
	const ready = new FileReader()
	/* 开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,
	如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容. */
	ready.readAsDataURL(file)
	ready.onload = function () {
		const re = this.result
		canvasDataURL(re, w, objDiv)
	}
}

/**
 * 按比例压缩图片
 */
function canvasDataURL(path: any, obj: any, callback: any) {
	var img = new Image()
	img.src = path
	img.onload = function () {
		var that: any = this
		// 默认按比例压缩
		var w = that.width
		var h = that.height
		var max_width = 1920
		var max_height = 1080
		var scale = w / h
		w = obj.width || w
		h = obj.height || w / scale
		if (w > h) {
			if (w > max_width) {
				h = Math.round((h *= max_width / w))
				w = max_width
			}
		} else {
			if (h > max_height) {
				w = Math.round((w *= max_height / h))
				h = max_height
			}
		}
		var quality = 0.8 // 默认图片质量为1
		// 生成canvas
		var canvas = document.createElement('canvas')
		var ctx: any = canvas.getContext('2d')
		// 创建属性节点
		var anw = document.createAttribute('width')
		anw.nodeValue = w
		var anh = document.createAttribute('height')
		anh.nodeValue = h
		canvas.setAttributeNode(anw)
		canvas.setAttributeNode(anh)
		ctx.drawImage(that, 0, 0, w, h)
		// 图像质量
		if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
			quality = obj.quality
		}
		// quality值越小，所绘制出的图像越模糊
		var base64 = canvas.toDataURL('image/jpeg', quality)
		// 回调函数返回base64的值
		callback(convertBase64UrlToBlob(base64))
	}
}

/**
 * 将以base64的图片url数据转换为Blob 用url方式表示的base64图片数据
 */
function convertBase64UrlToBlob(urlData: any) {
	var arr = urlData.split(',')
	var mime = arr[0].match(/:(.*?);/)[1]
	var bstr = atob(arr[1])
	var n = bstr.length
	var u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new Blob([u8arr], { type: mime })
}

// import { imgCompress } from './compression'
/**
 *
 * 判断是否为手机
 * @returns boolean
 */
export const isPhone = () => {
	return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

/**
 *
 *  根据 host 替换 oss 的 host
 * @param {*} src oss路径
 * @returns 替换后的路径
 */
const changeOSSByHost = (src: any) => {
	if (!src) return ''
	if (src.includes('https://') && window.location.protocol.includes('https')) {
		return src
	}
	return src.replace('http://', `${window.location.protocol}//`)
}

/**
 *
 * 获取cookie
 * @param {*} key 键
 * @returns
 */
const getCookie = (key: any) => {
	var arr
	var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
	if ((arr = document.cookie.match(reg))) return arr[2]
	else return null
}

/**
 *
 * 设置cookie
 * @param {*} key 键
 * @param {*} value 值
 * @param {*} expireDays 过期时间（以天计算）
 */
const setCookie = (key: any, value: any, expireDays: any) => {
	const expireDate: any = new Date()
	expireDate.setDate(expireDate.getDate() + expireDays)
	document.cookie =
		key +
		'=' +
		escape(value) +
		(expireDays == null ? '' : ';expires=' + expireDate.toGMTString())
}

/**
 *
 * 删除cookie
 * @param {*} key 键
 */
const delCookie = (key: any) => {
	const expireDate: any = new Date()
	expireDate.setTime(expireDate.getTime() - 1)
	const cookieValue = getCookie(key)
	if (cookieValue != null) {
		document.cookie =
			key + '=' + cookieValue + ';expires=' + expireDate.toGMTString()
	}
}
/**
 *
 *  获取路径中的参数值
 * @param {*} url 路径
 * @param {*} name 需要获取的参数名
 * @returns
 */
export const getQueryString = (url: any, name: any) => {
	return (
		decodeURIComponent(
			(new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [
				'',
				''
			])[1].replace(/\+/g, '%20')
		) || null
	)
}

export const getQueryParams = (params: any) => {
	let search: any = {};
	let searchArray: any = [];
	console.log('status----->：', status);
	for (const [key, value] of new URLSearchParams(params)) {
		searchArray.push({
			label: key,
			value,
		})
		for (var item in searchArray) {
			search[searchArray[item].label] = searchArray[item].value;
		};
	}
	return search;
}

/**
 *
 * 防抖函数
 * @param {*} method 需要执行的方法
 * @param {*} delay 延迟事件
 * @returns
 */
const debounce = (method: any, delay: any, ...restParam: any) => {
	let timer: any = null
	return function () {
		clearTimeout(timer)
		timer = setTimeout(() => {
			method(...restParam)
		}, delay)
	}
}

// class PreventScroll {
// 	public constructor(isForbid: any) {
// 		this._topPx = 0;
// 		this._isForbid = isForbid;
// 		this.preventEventHandler = this.preventEventHandler.bind(this);
// 	}

// 	public get isForbid() {
// 		return this._isForbid;
// 	}

// 	public set isForbid(value) {
// 		this._isForbid = value;
// 	}

// 	public preventEventHandler(e) {
// 		if (this._isForbid) {
// 			e.preventDefault();
// 		}
// 	}

// 	public addPreventEvent() {
// 		this._topPx = window.scrollY;
// 		document.body.style.position = 'fixed';
// 		document.body.style.top = `${-this._topPx}px`;
// 	}

// 	public removePreventEvent() {
// 		document.body.style.position = 'relative';
// 		document.body.style.top = 0;
// 		window.scrollTo(0, this._topPx);
// 	}
// }

// export default new PreventScroll(true);

export default {
	// formatDate,
	isPhone,
	changeOSSByHost,
	getCookie,
	setCookie,
	delCookie,
	getQueryString,
	imgCompress,
	debounce
}
