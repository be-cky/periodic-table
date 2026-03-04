import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      return
    }

    const interval = window.setInterval(() => {
      setTime((prevTime) => prevTime + 10)
    }, 10)

    return () => window.clearInterval(interval)
  }, [running])

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">01-Contador</h1>
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-800">
            Volver
          </Link>
        </div>
        <div className="text-3xl font-mono my-6 text-center">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="flex gap-4 justify-center">
          {running ? (
            <button
              className="border rounded-lg py-1 px-3 hover:bg-slate-100"
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className="border rounded-lg py-1 px-3 hover:bg-slate-100"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )}
          <button
            className="border rounded-lg py-1 px-3 hover:bg-slate-100"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
