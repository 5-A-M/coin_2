import React from 'react'
import { memo } from 'react'

const SearchCoin = (props) => {
  return (
    <div className="search-coin-4" style={{width: "100%", }}>
        <input type="text" style={{width: "100%", maxWidth: 360, height: 50, background: "inherit", fontSize: 18, color: "#fff", outline: 0, borderWidth: "0 0 2px", borderColor: "#2e89ff"}} className={"input-search-coin-4"} placeholder={"Search..."} />
    </div>
  )
}

export default memo(SearchCoin)