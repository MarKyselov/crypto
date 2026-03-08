import CoinCard from "../components/CoinCard";
import FilterInput from "../components/FilterInput";
import LimitSelector from "../components/LimitSelector";
import SortSelector from "../components/SortSelector";

const HomePage = ({coins, loading, error, filter, setFilter, limit, setLimit, sortBy, setSortBy})=>{
     const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
          break;
        case 'price_desc':
          return b.current_price - a.current_price;
          break;
        case 'price_asc':
          return a.current_price - a.current_price;
          break;
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
          break;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
          break;

        default:
          return 0;
      }
    });
    return(
        <>
         <div>
      <h1>Crypto Dash🚀</h1>
      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>
      {loading && <p>loading...</p>}
      {error && (
        <div className="error">
          <p>❌{error}</p>
        </div>
      )}
      {!loading && !error && (
        <main className="grid">
          {/* {coins.map((coin) => (
         <CoinCard coin={coin} key={coin.id}/>
          ))} */}
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard coin={coin} key={coin.id} />)
          ) : (
            <p>no coins are suitable to your preference</p>
          )}
        </main>
      )}
    </div>
        </>
    )
}
export default HomePage 