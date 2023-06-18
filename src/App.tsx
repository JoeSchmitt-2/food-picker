import { Header } from './components/Header'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

function Movie() {
  return (
    <div className="Movie">
      <Header />
      <Pricing />
      <Features />
      <Footer />
    </div>
  )
}

export default Movie
