import React , {useState,useEffect } from 'react'

let MouseTraker:React.FC = () => {
    let [position,setPosition] = useState({x:0,y:0})
    useEffect( ()=> {
        //console.log('1')
        let update = (e:MouseEvent) =>{
           
            setPosition({x:e.clientX,y:e.clientY})
        }

        document.addEventListener('click',update)

        return () =>{ document.removeEventListener('click',update)}
    },[])//空数组表示不依赖props和state的值则只有开始执行一次
    return <p>x:{position.x} Y : {position.y}</p>
} 

export default MouseTraker