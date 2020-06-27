//自定义hook 抽离共有的函数逻辑 自定义hooks就是一个函数 不需要继承与react.fc 只有函数组件菜肴继承
//hook和组件不同的是hook返回的式state需要的变量这个变量可以用到任何组件 但是组件只能返回jsx只能渲染
import {useState,useEffect } from 'react'


let useMousePosition = () => {
    let [position,setPosition] = useState({x:0,y:0})
    useEffect( ()=> {
        //console.log('1')
        let update = (e:MouseEvent) =>{
           
            setPosition({x:e.clientX,y:e.clientY})
        }

        document.addEventListener('click',update)

        return () =>{ document.removeEventListener('click',update)}
    },[])//空数组表示不依赖props和state的值则只有开始执行一次

    return position 
}

export default useMousePosition