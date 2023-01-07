import NavBar from './components/navBar/NavBar'
import Cards from './components/cards/Cards'
import Trending from './components/trending/Trending'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Trending />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
