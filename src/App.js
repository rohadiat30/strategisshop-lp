import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
import Layout from './Layout'
import styles from './Styles'

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden bg-primary w-full">
        <div className={`${styles.flexCenter}`}>
          <div className="w-full">
            <Header />
          </div>
        </div>
        <Layout />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
