import { Button, ErrorBlock } from "antd-mobile";
import { Footer, MobileTabBar } from "@components";
import Loading from "./loading";

export default ({ success, loading, footerFlag = false, tabbarFlag = false, children, onRefresh }: any) => {
  return (
    <>
      {!loading && success && <>{children}</>}
      {!success && (
				<ErrorBlock fullPage>
					<Button size='small' color='primary' onClick={() => onRefresh && onRefresh()}>刷新</Button>
				</ErrorBlock>
			)}
      {loading && success && <Loading />}
			{footerFlag && <Footer />}
			{tabbarFlag && <MobileTabBar />}
    </>
  );
};
