import React from 'react'

export default ({ height }: any) => {
	const cssStyle = {
		height: `${height}px`
	}
	return (
		<div style={cssStyle}></div>
	)
}
