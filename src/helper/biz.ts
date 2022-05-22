export function resetDocumentTitle (title: IBiz.IResetDocumentTitle = '标题') {
	// document.title = `${title} · ${window.title}`
}
export function microMessengerEnv () {
	const ua: string = window.navigator.userAgent.toLocaleLowerCase();
	console.log(ua);
	
	// if (ua.match(/MicroMessenger/i) === 'micromessenger') {
	// 	return true;
	// } else {
	// 	return false;
	// }
	// return ua.match(/MicroMessenger/i) === 'micromessenger' ? true : false;
}

