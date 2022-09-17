import React from 'react'

const THead = (props) => {
  return (
    <thead className="dhjkdhweuaijhaklsas" style={{width: "100%"}}>
      <tr className="dfjkdjasdkljioewas">
        {
          props.array_thead.map((item, key)=> <TD className={`rauieuieujsieo${key} ${props.is_liquidation=== true && 'sjdskldjdkljsfsdads'+key}`} key={key} item={item} />)
        }
    </tr>
    </thead>
  )
}

export default THead

const TD= (props)=> {
  return (
    <td className={`eyuoiekoaslsaas cjdjaklsajssa roruwoieaklsaks ${props.className}`} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>{props.item}</td>
  )
}