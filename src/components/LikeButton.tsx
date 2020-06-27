import React , {useState,useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
//useeffecct在每次渲染之后都会执行 类似render
let LikeButton:React.FC = () => {
    //数据源拆分

    const [like,setLike] = useState(0)
    const [on,setOn] = useState(true)
    let position  = useMousePosition()
    //渲染后的不需要清除的副作用 没有监听器 类似除了effect都是村函数
    useEffect(()=>{
        document.title = `click ${like} 次`
    },[like]) // 只有like 改变时候这个effect才能执行
    
    return (
    <>
       <p>x:{position.x} Y : {position.y}</p>
    <button onClick = {() => {setLike(like+1)}}>{like}</button>
    <button onClick = {() => {setOn(!on)}}>{on?"No":"Yes"}</button>
    </> 
    )
}
export default LikeButton