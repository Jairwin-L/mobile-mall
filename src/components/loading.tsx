import '@css/components/loading.less';

export default ({ text = '加载中...' }): JSX.Element => {
	return (
		<div className="loading_container">
			<div className="loading">
				<div className="loader">
					<div />
					<div />
					<div />
				</div>
				{
					text ? <span className="text">{text}</span> : null
				}
			</div>
		</div>
	);
};