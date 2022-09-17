import moment from "moment";
import React from "react";
import NumberFormat from "react-number-format";
import count_decimals from "../f/count_decimals";
// import { usePrevious3 } from "../CustomHook/usePrevious";
// import { usePrevious2 } from "../CustomHook/usePrevious";
import redefine_coin from "../f/redefine_coin";
import { HightLightComponent, TD } from "../Liquidation/TBody";

const TR = (props) => {
  const list_image_coin= [{exchange: "binance", logo: "https://cdn.coinglasscdn.com/static/exchanges/270.png"}, {exchange: "ftx", logo: "https://cdn.coinglasscdn.com/static/exchanges/524.png"}, {exchange: "okx", logo: "https://cdn.coinglasscdn.com/static/exchanges/OKX.png"}, {exchange: "coinbasepro", logo: "https://cdn.coinglasscdn.com/static/exchanges/CoinbasePro.png"}, {exchange: "digifinex", logo: "https://pbs.twimg.com/media/FJS7yTDXIAI2wJT.png"}, {exchange: "bitmex", logo: "https://cdn.coinglasscdn.com/static/exchanges/157.png"}, {exchange: "bitfinex", logo: "https://cdn.coinglasscdn.com/static/exchanges/bitfinex.jpg"}, {exchange: "kraken", logo: "https://cdn.coinglasscdn.com/static/exchanges/k.jpg"}, {exchange: "bybit", logo: "https://cdn.coinglasscdn.com/static/exchanges/521.png"}, {exchange: "bitstamp", logo: "https://w7.pngwing.com/pngs/283/335/png-transparent-bitstamp-hd-logo-thumbnail.png"}, {exchange: "dydx", logo: "https://cdn.coinglasscdn.com/static/coins/DYDX.png"}, {exchange: "bitflyer", logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/coegmjwkf9novd7b0ueh"}]
  // const previousValue= usePrevious3(props)
  return (
    <tr
      className="djhkfdhilsfadsa"
      style={{ position: "relative" }}
    >
      <TD
        className="rhaejkrhjkdhajksas dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew  dfsdgsrtdddsdasasgfd"
        content={<><img alt={"open"} src={`${list_image_coin.filter(item=> item.exchange === redefine_coin(props.boardName?.split("_")?.[0]?.toLowerCase())?.toLowerCase())?.[0]?.logo}` } style={{width: 24, height: 24, objectFit: "contain"}} />&nbsp;&nbsp;{redefine_coin(props.boardName?.split("_")?.[0])} </>}
        {...props}
      />
      <TD
        className="rhaejkrhjkdhajksas dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew dfsdgsrtdddsdasasgfd"
        content={redefine_coin(props.boardName?.split("_")?.filter((item, key)=> parseInt(key) !== 0)?.join(""))}
        {...props}
      />
      <TD
        className={`dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd dhwusdhuiodhajsas`}
        contentx={props.takerSide}
        classNameX={`${props.takerSide=== "sell" ? "jkfklskdlsjdklsdassasas klddkladjsklasasasa sjdksdjklasmkassasas" : "dkjskdjskdsjaksjaksasas dfhfjksdjklsdkjlssdklsd sjdksdjklasmkassasas"}`}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd"
        content={count_decimals(props.volume) >= 2 ? parseFloat(props.volume)?.toFixed(2) : parseFloat(props.volume)}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss fehuidshdasasrsdas hduisehuaksjaskl fjhrueiisjidsjiods fhukdhkjasorwueioaes fgnhjkfshiuohjdiassafssd"
        content={<NumberFormat prefix="$ " value={props.lastPrice} displayType={"text"} thousandSeparator={true} renderText={(value, props)=> <>{value}</>} />}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd"
        content={moment.utc((props.time_created)).zone("+07:00").format("HH:mm:ss")}
        {...props}
      />
      {
        props?.point >= props?.indexT && <HightLightComponent />
      }
    </tr>
  );
};

export default TR;
