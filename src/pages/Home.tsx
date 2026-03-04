import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Mini Projects</h1>
        <p className="mt-2 text-slate-600">
          Bienvenido. Haz clic para abrir el cronometro.
        </p>
        <Link
          to="/stopwatch"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
        >
          Ir al cronometro
        </Link>
        <Link
          to="/todo-board"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
        >
          Ir al tablero de tareas
        </Link>

         <Link
          to="/periodic-table"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
        >
          Ir a la tabla periodica
        </Link>
      </div>
    </div>
  )
}

export default Home
