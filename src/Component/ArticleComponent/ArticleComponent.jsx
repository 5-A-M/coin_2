// import axios from 'axios'
// import _ from 'lodash'
// import moment from 'moment'
import React, { useState } from 'react'
import { memo } from 'react'
import { useEffect } from 'react'
// import { SERVER_URL } from '../config/config'
// import Spinner from '../Entities/Spinner'
// import Loading from '../Loading/Loading'
// import { SocketContext } from '../WrapSocket/WrapSocket'
// import Filter from './Filter'
import MainTableCoin from './MainTableCoin'
// import SearchCoin from './SearchCoin'
import axios from "axios"
import { SERVER_URL } from '../config/config'

const ArticleComponent = (props) => { 
    const [data, setData]= useState(()=> [])
    // const { socketState }= useContext(SocketContext)
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: `${SERVER_URL}/api/f/btn4`,
                method: "get",
                responseType: "json",
            })
            const result= await res.data
            return setData(()=> result.data.slice(1, result.data.length))
        })()
      }, [])
      useEffect(()=> {
        const intervalId= setInterval(async()=> {
            const res= await axios({
                url: `${SERVER_URL}/api/f/btn4`,
                method: "get",
                responseType: "json",
            })
            const result= await res.data
            if(result.data.length > 0) {
                setData(()=> result.data.slice(1, result.data.length))
            }
        }, 5000)
        return ()=> clearInterval(intervalId)
      }, [])
    //   useEffect(()=> {
    //     socketState?.on("bring_volume_from_server", data=> {
    //         if(data.data.length > 0 ) {
    //             setData(()=> data.data)
    //         }
    //     })
    // }, [])
  return (
    <div className="dajkwsjaiojwqaaasa" style={{width: "100%", height: "calc(100vh - 60px)", overflow: "auto"}}>
        {
            // data?.length <=0 && <div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
            //     <Loading />
            // </div>
        }
          <Button4 data={data} />
    </div>
  )
}

export default memo(ArticleComponent)
const Button4= (props)=> {
    // const [exchange, setExchange]= useState(()=> "Binance")
    // const [pair, setPair]= useState(()=> "USDT")
    // const [coin, setCoin]= useState(()=> "BTC")
    // const [page, setPage]= useState(()=> 1)
    
    
    return (
        <div className="dsjiajisjqoiwiosfjoiksda" style={{width: "100%",}}>
            {/* <SearchCoin /> */}
            {/* <br /> */}
            {/* <Filter exchange={exchange} setExchange={setExchange} 
               pair={pair} setPair={setPair}
               coin={coin} setCoin={setCoin}
               page={page} setPage={setPage}
            /> */}
            {/* <br /> */}
            <MainTableCoin data={props.data} />
        </div>
    )
}
