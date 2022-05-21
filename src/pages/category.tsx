import React, { Fragment, useEffect, useRef, useState } from 'react'
import { SideBar } from 'antd-mobile';
import { PageLayout } from '../components'
import '@css/category.less'
import { useThrottleFn } from 'ahooks'
import category from '../api/mock/data.json';
// import { list } from "../api/request/category";
// @ts-ignore
const categoryData: IPageCategory.List[] = category.data.list;
export default () => {
  const mainElementRef = useRef<HTMLDivElement>(null);
	const [list, setList] = useState<any[]>([]);
	const [activeKey, setActiveKey] = useState<string>('');
	const [pageStatus, setPageStatus] = useState<IBiz.IPageStatus>({
		loading: false,
		success: true,
	});
	const { run: handleScroll } = useThrottleFn(
    () => {
      let currentKey = list[0].id;
      for (const item of list) {
        const element = document.getElementById(`anchor-${item.id}`);
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 0) {
          currentKey = item.id
        } else {
          break
        }
      }
      setActiveKey(currentKey)
    },
    {
      leading: true,
      trailing: true,
      wait: 100,
    }
  )
	function onChangeSideBar (key: string) {
		if (key === activeKey) return;
		document.getElementById(`anchor-${key}`)?.scrollIntoView();
	}
	async function fetchList () {
		// setTimeout(() => {
		// 	setPageStatus({
		// 		loading: false,
		// 		success: true,
		// 	});
		// }, 300);
		setActiveKey(categoryData[0].id);
		// const data = await list;
		setList(categoryData);
	}
  useEffect(() => {
    const mainElement = mainElementRef.current;
    if (!mainElement) return;
    mainElement.addEventListener('scroll', handleScroll);
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);
	useEffect(() => {
    fetchList();
  }, []);
	return (
		<PageLayout {...{ ...pageStatus, tabbarFlag: true }}>
			<div className="container">
				<div className="side">
					<SideBar
						activeKey={activeKey}
						onChange={key => onChangeSideBar(key)}
					>
						{list.map(item => (
							<SideBar.Item key={item.id} title={item.name} />
						))}
					</SideBar>
				</div>
				<div className="main_content" ref={mainElementRef}>
					{list.map((item) => (
						<Fragment key={item.id}>
							<h2 id={`anchor-${item.id}`}>{item.name}</h2>
							{
								item?.subCateList.map((subItem: any) => {
									return (
										<Fragment key={subItem.id}>
											{
												subItem?.categoryList.map((subCateItem: any) => {
													return (
														<ul className="sub_cate_item" key={subCateItem.id}>
															<li>
																<img className="cate_img" src={subCateItem.wapBannerUrl} alt="" />
																{subCateItem.name}
															</li>
														</ul>
													)
												})
											}
										</Fragment>
									)
								})
							}
						</Fragment>
					))}
				</div>
			</div>
		</PageLayout>
	)
}
