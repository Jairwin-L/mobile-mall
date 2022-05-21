import Loading from './loading';
import { If } from './if';
import { Exception, Footer, MobileTabBar } from '.';
import { PageStatusEnum } from '@constants';

export default ({ pageStatus = PageStatusEnum.NORMAL, footerFlag = false, tabbarFlag = false, children, onRetry }: IBiz.PageLayout): JSX.Element => {
	return (
		<>
			<If when={PageStatusEnum.LOADING === pageStatus}>
				<Loading />
			</If>
			<If when={PageStatusEnum.NORMAL === pageStatus}>
				{children}
			</If>
			<If when={PageStatusEnum.ERROR === pageStatus}>
				<Exception onClick={onRetry} />
			</If>
			{footerFlag && <Footer />}
			{tabbarFlag && <MobileTabBar />}
		</>
	)
}
