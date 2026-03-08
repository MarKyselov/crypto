import { Link } from "react-router-dom"

const CoinCard = ({coin}) => {
  return (
     <Link to={`/coin/${coin.id}`}>
         <div className="coin-card">
                <div className="coin-header">
                  <img className="coin-image" src={coin.image} alt={coin.name} />
                  <div>
                    <h2>{coin.name}</h2>
                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                  </div>
                </div>
                <p>
                  Price ${Number(coin.current_price.toFixed(2)).toLocaleString()}
                </p>
                <p >
                  Change in 24h <span className={coin.price_change_percentage_24h >= 0?"positive":"negative" }>{coin.price_change_percentage_24h}%</span>
                </p>
                <p>Market Cap 💸${coin.market_cap.toLocaleString()}</p>
              </div>
     </Link>
  )
}

export default CoinCard