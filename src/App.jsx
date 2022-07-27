import { useState } from 'react'

// components
import SplitterBill from "./components/SplitterBill"
import SplitterTotal from "./components/SplitterTotal"

function App() {
  return (
    <main className="m-auto w-full max-w-4xl font-space-mono">
      <header className="flex">
        <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="p-6 mt-14 bg-white rounded-2xl shadow-6xl lg:flex">
        <SplitterBill />
        <SplitterTotal />
      </section>
    </main>
  )
}

export default App
