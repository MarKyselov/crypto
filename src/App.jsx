import { useState, useEffect } from 'react';
// import CoinCard from './components/CoinCard';
// import LimitSelector from './components/LimitSelector';
// import FilterInput from './components/FilterInput';
// import SortSelector from './components/SortSelector';
import HomePage from './pages/home';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import Header from './components/Header';
import NotFound from './pages/notFound';
import CoinDetails from './pages/coinDetails';
// const API_URL =
// 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  // useEffect(async ()=>{
  //   const res = await fetch(API_URL)
  // },[])

  // useEffect(()=>{
  //   fetch(API_URL)
  //   .then((res)=>{
  //     if (!res.ok) {
  //       throw new Error("failed to retrieve data")
  //     }
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data);
  //     setCoins(data)
  //     setLoading(false)
  //   })
  //   .catch((err)=>{
  //     setError(err.message)
  //   })
  // },[])

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COINS_API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error('failed to retrieve data');

        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  // if (loading) return <p>loading...</p>

  // if(error) {
  //   return(
  //     <div className='error'>
  //       <p>❌{error}</p>
  //     </div>
  //   )
  // }

  return (

    <>
    <Header/>
      <Routes>
        <Route path="/" element={
          <HomePage 
          coins={coins}
          loading={loading}
          error={error}
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
          sortBy={sortBy}
          setSortBy={setSortBy}
          />
          } />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/coin/:id' element={<CoinDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

// https://api.coingecko.com/api/v3/coins/markets
// ?
// vs_currency=usd
// &order=market_cap_desc
// &per_page=10
// &page=1
// &sparkline=false

