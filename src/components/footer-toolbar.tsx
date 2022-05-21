import { useHistory } from "react-router-dom";
import "@css/components/footer-toolbar.less";

export default ({ submitLoading = false, children }: any) => {
  const history = useHistory();
  return (
		<>
			<div className="footer_toolbar_container">
				{/* <Button disabled={submitLoading} onClick={() => history.goBack()}>
					返回
				</Button> */}
				{children}
			</div>
		</>
  );
};
