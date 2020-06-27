import {useState,useEffect} from 'react'
import axios from 'axios'

let useUrlLoader = (url:string,deps:any[] = []) => {
    let [data,setData] = useState<any>({})
    let [loading,setLoading] = useState(false)

    useEffect( ()=>{
        setLoading(true)
        axios.get(url).then(res=>{
            //console.log(res)
            setData(res.data)
            setLoading(false)
         
        })
         // eslint-disable-next-line 
    },deps )
    //console.log(data,loading)
    return [data,loading]
} 

export default useUrlLoader