import GamePage from './pages/GamePage'
import HomePage from './pages/HomePage'
import RewardsPage from './pages/RewardsPage'

import Layout from './components/Layout'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {
    state: { step }
  } = useAppContext()

  return (
    <Layout>
      {step === 1 && <HomePage />}
      {step === 2 && <GamePage />}
      {step === 3 && <RewardsPage />}
    </Layout>
  )
}

export default App
