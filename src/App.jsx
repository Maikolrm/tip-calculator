import { useState } from 'react'

function App() {
  return (
    <main className="m-auto w-full max-w-2xl font-space-mono">
      <header className="flex">
        <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="p-4 mt-14 bg-white rounded-xl shadow-6xl lg:flex">
        <div className="h-64 p-4 lg:flex-1">Left container</div>
        <div className="h-64 rounded-xl bg-primary p-4 lg:flex-1">Right container</div>
      </section>
    </main>
  )
}

export default App
