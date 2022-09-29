import React, { useState } from 'react'

const Filter = (props) => {
  const list_exchange= ["Binance", "binance_futures", "huobi", "bittrex"]
  const list_coin= ["BTC", "ETH"]
  return (
    <div className={"filter-coin-4"} style={{width: "100%", height: 60, display: "flex", alignItems: "center", gap: 20}}>
        <Tem title={"Exchange"} initValue={props.exchange} a={list_exchange} setInitValue={props.setExchange} />
        <Tem title={"Coin"} initValue={props.coin} a={list_coin} setInitValue={props.setCoin} />
    </div>
  )
}

export default Filter

const Tem= (props)=> {
    const [open, setOpen]= useState(()=> false)
    return (
        <div className={"tem-f-coin-4"}>
            <div style={{marginBottom: 4}}>{props.title}</div>
            <div style={{height: 40, padding: "0 24px", borderRadius: 10, border: "1px solid #e7e7e7", cursor: "pointer", position: "relative"}}>
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}} onClick={()=> setOpen(prev=> !prev)}>{props.initValue}</div>
                {
                    open=== true &&
                    <AbTem a={props.a} setInitValue={props.setInitValue} setOpen={setOpen} />
                }
            </div>
        </div>
    )
}

const AbTem= (props)=> {
    return (
        <div className={"ab-tem-f-coin-4"} style={{position: "absolute", right: "100%", left: 0, width: "100%"}}>
            {
                props?.a?.map((item, key)=> <div style={{height: 40, background: "#242526"}} onClick={()=> {props.setInitValue(item);props.setOpen(()=> false)}} className={"item-ab-tem-f-coin-4"} key={key}>{item}</div>)
            }
        </div>
    )
}