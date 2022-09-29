import React from 'react'
import TR from './TR'
import moment from 'moment'
import { usePrevious2 } from '../CustomHook/usePrevious'
import { HightLightComponent } from '../Liquidation/TBody'

const TBody = (props) => {
  const previousAl= usePrevious2(props?.data?.length)
  
  return (
    <tbody className={`fjskdhasjhasasa ${props.className}`} style={{transform: "rotate(0deg)"}}>
      {
        props?.data?.map((item, key)=> <TR
        componentHightLight={parseInt(key) +1 >= parseInt(previousAl) ? <HightLightComponent /> : <div></div>}
        index={props?.data?.length - parseInt(key)}
        point={parseInt(moment(item?.time_created).valueOf())}
        className1="q34o9i3u9owiowwweq"
        key={key}
        {...item}
      />)
      }
    </tbody>
  )
}

export default TBody