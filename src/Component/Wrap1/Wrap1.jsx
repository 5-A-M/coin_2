import React, { Suspense, useState } from "react";
import { lazy } from "react";
import LoadingWrap1 from "../Loading/LoadingWrap1";
// import ArticleComponent from "../ArticleComponent/ArticleComponent";
import Liquidation from "../Liquidation/Liquidation";
import ListCoin from "../ListCoin/ListCoin";
// import LongShortRatio from "../LongShortRatio/LongShortRatio";
// import MenuFirst from "../MenuFirst/MenuFirst";
import TradeLive from "../TradeLive/TradeLive";
// import TradeView2 from "../Tradeview2/TradeView2";
import "./style.sass"
// const Liquidation= lazy(()=> import("../Liquidation/Liquidation"))
// const ListCoin= lazy(()=> import("../ListCoin/ListCoin"))
// const TradeLive= lazy(()=> import("../TradeLive/TradeLive"))
const LongShortRatio= lazy(()=> import("../LongShortRatio/LongShortRatio"))
const MenuFirst= lazy(()=> import("../MenuFirst/MenuFirst"))
const ArticleComponent= lazy(()=> import("../ArticleComponent/ArticleComponent"))

const Wrap1 = (props) => {
  const [selectValue, setSelectValue] = useState(() => 1);
  return (
    <div className="fjskjlkasafdsdas" style={{ width: "35vw", height: "100%" }}>
      {parseInt(selectValue) === 1 && <Suspense fallback={<LoadingWrap1 />}><LongShortRatio /></Suspense>}
      {parseInt(selectValue) === 2 && <ListCoin />}
      {parseInt(selectValue) === 3 && <Liquidation is_liquidation={true} />}
      {parseInt(selectValue) === 4 && <Suspense fallback={<LoadingWrap1 />}><ArticleComponent /></Suspense>}
      {parseInt(selectValue) === 5 && <TradeLive />}
      {/* {
        parseInt(selectValue) !== 1 &&
        <div className="fkslsddadsasa" style={{width: "100%", height: "calc(100vh - 60px)"}}></div>
      } */}
      <MenuFirst
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      ></MenuFirst>
    </div>
  );
};

export default Wrap1;
