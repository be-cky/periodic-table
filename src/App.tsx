import { Route, Routes } from 'react-router-dom'
import Stopwatch from './pages/Stopwatch'
import PeriodicTable from './pages/PeriodicTable'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PeriodicTable/>} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/periodic-table" element={<PeriodicTable />} />
      </Routes>

      <a
        href="http://www.freepik.com"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-2 right-2 z-50 rounded bg-white/80 px-2 py-1 text-xs text-slate-700"
      >
        Designed by starline / Freepik
      </a>
    </>
  )
}

export default App
