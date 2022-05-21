import "@css/components/footer-toolbar.less";

export default ({ submitLoading = false, children }: any) => {
  return (
		<>
			<div className="footer_toolbar_container">
				{children}
			</div>
		</>
  );
};
