import './styles/App.css'
import { Comparison } from './components/Comparison'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Searching } from './components/Searching'

function App() {
  

  return (
    <div className='app'>
      <Header/>
      <Searching/>
      <Comparison/>
      <Footer/>
    </div>
  )
}

export { App }
