import React from 'react'
import "@css/components/form.less";

export default ({ list, onFormBlur }: any) => {
	console.log('list=====>：', list);
	return (
		<>
			{
				list.map((item: any, index: number) => {
					return (
						<>
							<div className="form_item">
								<span className="form_required">*</span>
								<span className="form_label">{item.label}</span>
								<input type="text" placeholder={item.placeholder} defaultValue={item.value} onBlur={() => onFormBlur(item.value)} />
							</div>
							{item.value && <p className="form_error">请输入</p>}
						</>
					)
				})
			}
		</>
	)
}
