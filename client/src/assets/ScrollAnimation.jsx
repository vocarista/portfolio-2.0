// This scroll animation is not my own and belongs to the author = `junjun`. I found it at: https://csshint.com/html-css-scroll-down-arrow-examples/

import React from 'react'
import { useStore } from '../store/store'

function ScrollAnimation() {
    const isDark = useStore(state => state.isDark)
    const strokeColor = isDark ? `white` : `black`;
    return (
        <svg className="arrows">
			<path className ="a1" d="M0 0 L30 32 L60 0" style = {{stroke: strokeColor}}></path>
			<path className ="a2" d="M0 20 L30 52 L60 20" style = {{stroke: strokeColor}}></path>
			<path className ="a3" d="M0 40 L30 72 L60 40" style = {{stroke: strokeColor}}></path>
		</svg>
    )
}

export default ScrollAnimation