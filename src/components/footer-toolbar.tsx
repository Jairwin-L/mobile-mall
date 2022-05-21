import { useNavigate } from "react-router-dom";
import "@css/components/footer-toolbar.less";

export default ({ submitLoading = false, children }: any) => {
  const navigate = useNavigate();
  return (
		<>
			<div className="footer_toolbar_container">
				{/* <Button disabled={submitLoading} onClick={() => navigate(-1)}>
					返回
				</Button> */}
				{children}
			</div>
		</>
  );
};
