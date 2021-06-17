import React, { useEffect, useState, ReactElement } from 'react'
import { observer } from 'mobx-react'

let num = 0

export default observer(() => {
  num += 1

  console.log('rerender-->', num)

  return <>{num}</>
})
