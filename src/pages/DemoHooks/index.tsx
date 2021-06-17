import React, { useEffect, useState, useCallback } from 'react'
import { observer } from 'mobx-react'
import ChildrenComponent from './components/ChildrenComponent'

export default observer(() => {
  const [count, setCount] = useState(0)
  useEffect(() => {}, [])

  const HanldeCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <>
      <p>{count}</p>
      <button onClick={HanldeCount}>Count Update</button>
      <div>
        children: <ChildrenComponent />
      </div>
    </>
  )
})
