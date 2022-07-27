import { useState } from 'react'

function App() {
  return (
    <main className="m-auto w-full max-w-4xl font-space-mono">
      <header className="flex">
        <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="p-6 mt-14 bg-white rounded-2xl shadow-6xl lg:flex">
        <div className="lg:px-6 lg:flex-1">
          <div>
            <h2 className="font-semibold text-gr-cyan leading-none">Bill</h2>
            <div className="pt-2">
              <input type="text" className="block w-full rounded bg-light-gr-cyan outline-none leading-10"/>
            </div>
          </div>
          {/* tips */}
          <div className="mt-8">
            <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
            <div className="grid grid-cols-2 gap-2 pt-3 sm:grid-cols-3">
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
        <div className="flex flex-col mt-6 p-9 rounded-xl bg-dark-cyan lg:flex-1 lg:mt-0">
          <div className="pb-36">
            <div className="flex items-center">
              <div className="flex-1">
                <h2 className="opacity-90 font-semibold text-light-gr-cyan leading-none">Tip amount</h2>
                <p className="mt-2 text-sm text-gr-cyan leading-none">/ person</p>
              </div>
              <h2 className="font-bold text-5xl text-primary">$4.27</h2>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex-1">
                <h2 className="opacity-90 font-semibold text-light-gr-cyan leading-none">Total</h2>
                <p className="mt-2 text-sm text-gr-cyan leading-none">/ person</p>
              </div>
              <h2 className="font-bold text-5xl text-primary">$32.79</h2>
            </div>
          </div>
          <button className="block w-full bg-primary rounded-md font-bold leading-10 uppercase tracking-widest">reset</button>
        </div>
      </section>
    </main>
  )
}

export default App
