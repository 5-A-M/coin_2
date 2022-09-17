import React from 'react'
import TBody from './TBody'
import THead from './THead'

const TableLiquidation = (props) => {
  const array_thead= ["Exchange", "Symbol", "Amount", "Position", "Time"]
  return (
    <table className="fhdjkehaukshajklwhasw" style={{width: "100%"}} cellSpacing={0}>
      <THead is_liquidation={props.is_liquidation} array_thead={array_thead} {...props} />
      <TBody classX={"djfkldjsklajsklasjasas"} {...props} al={props.aHightLight} />
    </table>
  )
}

export default TableLiquidation