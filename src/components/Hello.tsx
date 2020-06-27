import React from 'react'
//一个obj是什么样子 想到Interface来约束
//hook就是函数式编程 用函数式组件hook拥抱函数 避免使用继承组件
interface HelloProp {
    mes?:string
}
//tsx表示ts支持jsx语法  函数组件无data constroter 声明周期 只有props 返回一个jsx
let Hello:React.FC<HelloProp> = (props:HelloProp) => {
    
    return <h2>{props.mes}</h2>
}
Hello.defaultProps = {
    mes : "Hello"
}
export default Hello
//重要
//react只有两种组件 一个是函数式组件 一个是继承式组件 