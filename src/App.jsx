import './App.css'
import Banner from './components/Banner'
import Products from './components/Products'

function App() {


  return (
    <div className="App">
      <header className='container'>
        <img src="src/img/burger.svg" alt="burger" />
        <img className='logo' src="src/img/logo.png" alt="logo" />
        <img src="src/img/search.svg" alt="search" />
      </header>
        <Banner/>
        <div className='title_best_sales container'>
          <h3>Лучшие предложения</h3><div>См. все</div>
        </div>
        <Products />
    </div>
  )
}

export default App