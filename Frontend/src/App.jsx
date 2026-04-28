import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Navbar, Footer } from './components/Components_Import'
import Home from './pages/Home'
import Interactive_Background from './utils/Interactive_Background'
import BootScreen from './utils/BootScreen'

function App() {
    const [booting, setBooting] = useState(true);

    return (
        <BrowserRouter>
            {booting && <BootScreen onComplete={() => setBooting(false)} />}
            <div style={{ visibility: booting ? 'hidden' : 'visible' }}>
                <Navbar />
                <Interactive_Background>
                    <main className='container'>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                        </Routes>
                    </main>
                </Interactive_Background>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
