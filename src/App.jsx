import { useState } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./AppState"
import AppDispatch from "./AppDispatch"

// components
import SplitterBill from "./components/SplitterBill"
import SplitterTotal from "./components/SplitterTotal"

function App() {
  // initialState
  const initialState =  {
    bill: 0,
    people: 0,
    tips: [5, 10, 15, 25, 50],
    amount: 0,
    total: 0
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "":
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <main className="m-auto w-full max-w-4xl font-space-mono">
          <header className="flex">
            <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
          </header>
          <section className="p-6 mt-14 bg-white rounded-2xl shadow-6xl lg:flex">
            <SplitterBill />
            <SplitterTotal />
          </section>
        </main>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
