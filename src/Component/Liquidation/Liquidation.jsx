import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { memo } from "react";
import { SERVER_URL } from "../config/config";
import ScrollToBottom from "react-scroll-to-bottom";
// import "./Liquidation.sass";
import TableLiquidation from "./TableLiquidation";
import FilterPrice from "./FilterPrice";
import Loading from "../Loading/Loading";
import _ from "lodash"
import { SocketContext } from "../WrapSocket/WrapSocket";

const Liquidation = (props) => {
  const [data, setData] = useState(() => []);
  const [filterPrice, setFilterPrice] = useState(() => 0);
  const { socketState }= useContext(SocketContext)
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/get/liquidation`,
        method: "GET",
        responseType: "json",
      });
      const result = await res.data;
      return setData(()=> _.uniqWith(result, _.isEqual))
    })();
  }, []);
  useEffect(()=> {
    if(socketState) {
      socketState?.emit("get_liquidation", {get: true})
    }
  }, [socketState])
  useEffect(()=> {
    if(socketState) {
      socketState?.on("get_liquidation_from_server", dataS=> {
        setData((prev)=> ([...prev, dataS]))
      })
    }
  }, [])
  if (data.length > 0) {
    return (
      <ScrollToBottom mode="top" checkInterval={0}>
        <div
          className="dsjaklakjslassasa"
          style={{
            width: "100%",
            height: "calc(100vh - 60px)",
            padding: 16,
          }}
        >
          <FilterPrice setFilterPrice={setFilterPrice} />
          <TableLiquidation
            is_liquidation={props.is_liquidation}
            filterPrice={filterPrice}
            data={data}
            aHightLight={data.length}
          />
        </div>
      </ScrollToBottom>
    );
  } else {
    return <div style={{height: "calc(100vh - 60px)"}}><Loading /></div>
  }
};

export default memo(Liquidation);
