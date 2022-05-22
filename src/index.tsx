import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './index.less';

if (window.console) console.log('%c移动端商城', 'text-shadow: 1px 2px 3px rgba(67,8,7,0.8);color:#F686BD;font-size:50px;', '欢迎访问：https://mobile-mall.vercel.app')
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
});

const container: any = document.getElementById('mall');
const root = createRoot(container);

root.render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>);
