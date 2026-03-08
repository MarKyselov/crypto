
const SortSelector = ({sortBy,onSortChange}) => {
  return (
    <div className='controls'>
        <label htmlFor="sort"></label>
        <select name="" id="sort" value={sortBy} onChange={(e)=>onSortChange(e.target.value)}>
          <option value="market_cap_desc">market cap⬇️</option>
          <option value="price_desc">price⬇️</option>
          <option value="price_asc">price⬆️</option>
          <option value="change_desc">change24h⬇️</option>
          <option value="change_asc">change24h⬇⬆️</option>
        </select>
      </div>
  )
}

export default SortSelector