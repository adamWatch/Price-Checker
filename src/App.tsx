import './styles/App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SearchingAndComparison } from './components/SearchingAndComparison'

function App() {
  

  return (
    <div className='app'>
      <Header/>
      <SearchingAndComparison/>
      <Footer/>
    </div>
  )
}

export { App }
