import NavBar from './components/navBar/NavBar'
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'
import Coin from './routes/Coin'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>

        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
