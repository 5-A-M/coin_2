// import _, { round } from 'lodash'
import _ from 'lodash'
import React from 'react'
import CountUp from 'react-countup'
import usePrevious, { usePrevious4 } from '../CustomHook/usePrevious'
// import NumberFormat from "react-number-format"
// import thousand_separator from '../f/thousand_separator'

const MainTableCoin = (props) => {
  return (
    <div className={"main-table-coin-4"} style={{width: "100%", overflow: "auto"}}>
        <table className={"main-table-table-coin-4"} style={{width: "100%"}}>
            <Thead />
            <Tbody data={props.data} />
        </table>
    </div>
  )
}

export default MainTableCoin

const Thead= (props)=> {
    return (
        <thead className={"main-table-thead-coin-4"}>
            <tr>
                <th>Exchange</th>
                <th>Symbol</th>
                {/* <th>Quote</th> */}
                {/* <th>Base</th> */}
                <th>Buy</th>
                <th>Sell</th>
                <th>Total</th>
                {/* <th>Diff</th> */}
                {/* <th>Total % 24H V</th> */}
                {/* <th>Vol</th> */}
            </tr>
        </thead>
    )
}

const Tbody= (props)=> {
    return (
        <tbody className={"main-table-tbody-coin-4"}>
            {
                 props?.data && _.orderBy(props?.data, o=> parseInt(o.total_trade), "desc")?.map((item, key)=> <tr className="jlkdjskdjkjre" key={key}>
                    <td className={"td-tr-thead-btn-4"}>{item.exchange}</td>
                    <td className={"td-tr-thead-btn-4"}>{item.symbol}</td>
                    <DetailComponentTd value={item.bought} classNameSpan={"span-total-trade"} />
                    <DetailComponentTd value={item.sold} classNameSpan={"span-total-trade"} />
                    <DetailComponentTd value={item.total_trade} classNameSpan={parseInt(item.total_trade) ? "span-total-trade span-total-trade-ascending" : "span-total-trade span-total-trade-descending"} className={parseInt(item.total_trade) < 0 ? "total_trade_descending" : "total_trade_ascending"}  />
                </tr>)
            }
        </tbody>
    )
}

const DetailComponentTd= (props)=> {
    const previous= usePrevious4(props.value, 1000)
    return (
        <td className={`td-tr-thead-btn-4 detail-component-td-xyz ${props?.className}`}>
            <CountUp start={previous} end={props.value} className={props.classNameSpan} duration={1} delay={0} />
        </td>
    )
}