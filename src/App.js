import NavBar from './components/navBar/NavBar'
import Cards from './components/cards/Cards'
import Trending from './components/trending/Trending'
import Footer from './components/footer/Footer'
import Coin from './routes/Coin'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>

        {/* <Trending /> */}
        <Routes>
          {/* <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route> */}

          <Route path='/' element={[<Trending/>, <Cards />]} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
