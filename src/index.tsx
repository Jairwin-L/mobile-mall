import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const container: any = document.getElementById('mall');
const root = createRoot(container);
import './index.less';
import Router from './router';

if (window.console) console.log('%c移动端商城', 'text-shadow: 1px 2px 3px rgba(67,8,7,0.8);color:#F686BD;font-size:50px;', '欢迎访问：http://mall.jairwin.cn')
// 解决safari自带放大功能：阻止双击放大
let lastTime = 0
document.addEventListener('touchstart', event => {
	if (event.touches.length > 1) event.preventDefault()
})
document.addEventListener('touchend', event => {
	const nowTime = (new Date()).getTime()
	if (nowTime - lastTime <= 300) event.preventDefault()
	lastTime = nowTime
}, false)

// 解决safari自带放大功能：阻止双指放大
document.addEventListener('gesturestart', event => {
	event.preventDefault()
})

root.render(<StrictMode><Router /></StrictMode>);
