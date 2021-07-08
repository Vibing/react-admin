import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { ICON_FONT_URL } from '@/config'
console.log(ICON_FONT_URL)

const IconFont = createFromIconfontCN({
  scriptUrl: ICON_FONT_URL
})

export default props => <IconFont className="app-iconfont" {...props} />
