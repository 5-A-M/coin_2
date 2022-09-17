const redefine_coin= (coin)=> {
    if(coin=== "BTCUSDTPerp") return "BTCUSDT-PERP"
    if(coin=== "BTCPerp") return "BTC-PERP"
    if(coin=== "BTCPERP") return "BTC-PERP"
    if(coin=== "Coinbase_pro") return "Coinbase"
    if(coin === "CoinbasePro") {
        return "Coinbase"
    }
    if(coin === "BTCUS") {
        return "BTCUSD"
    }
    if(coin === "HuobiPro") {
        return "Huobi"
    }
    if(coin=== "HuobiDM") {
        return "Huobi"
    }
    if(coin=== "BTCUSDWKLY") {
        return "BTCUSD"
    }
    if(coin=== "BTCUSDBIWKLY") {
        return "BTCUSD"
    }
    if(coin=== "BTCUSDQTLY") {
        return "BTCUSD"
    }
    if(coin=== "BTCUSDPerp") {
        return "BTCUSD-Perp"
    }
    if(coin=== "BTCUSDTPerp") {
        return "BTCUSDT-Perp"
    }
    if(coin === "BTCJPY") {
        return "BTC"
    }
    if(coin ==="FXBTCJPY") {
        return "FXBTC"
    }
    if(coin=== "BTC0624") return "BTC"
    if(coin=== "BTC0930") return "BTC"
    if(coin=== "BTCJPY") return "BTC"
    if(coin=== "FXBTCJPY") return "FXBTC"
    if(coin=== "BTCKRW") return "BTC"
    if(coin=== "ETHUSDPerp") return "ETHUSD-PERP"
    if(coin=== "ETHUSDTPerp") return "ETHUSD-PERP"
    if(coin=== "ETHUSDTF") return "ETHUSDT-PERP"
    if(coin=== "BTCUSDTPerp") return "BTCUSDT-PERP"
    if(coin=== "BTCUSDT_Perp") return "BTCUSDT-PERP"
    if(coin=== "BTCUSDTPerp") return "BTCUSDT-PERP"
    else return coin
}

export default redefine_coin