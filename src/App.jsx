import { useState } from 'react'

function App() {
  return (
    <main className="m-auto w-full max-w-4xl font-space-mono">
      <header className="flex">
        <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="p-6 mt-14 bg-white rounded-xl shadow-6xl lg:flex">
        <div className="p-6 lg:flex-1">
          <div>
            <h2 className="font-semibold text-gr-cyan leading-none">Bill</h2>
            <div className="pt-2">
              <input type="text" className="block w-full rounded bg-light-gr-cyan outline-none leading-10"/>
            </div>
          </div>
          {/* tips */}
          <div className="mt-8">
            <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
            <div className="grid grid-cols-3 gap-2 pt-3">
              <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan">5%</button>
              <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan">10%</button>
              <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan">15%</button>
              <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan">25%</button>
              <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan">50%</button>
              <button>Custom</button>
            </div>
          </div>
          {/* tips */}
          <div className="mt-8">
            <h2 className="font-semibold text-gr-cyan leading-none">Number of people</h2>
            <div className="pt-2">
              <input type="text" className="block w-full rounded bg-light-gr-cyan outline-none leading-10"/>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-primary lg:flex-1">Right container</div>
      </section>
    </main>
  )
}

export default App
