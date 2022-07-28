import { useEffect } from 'react'
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
    bill: 145.33,
    people: 5,
    tips: [5, 10, 15, 25, 50],
    selectedTip: { index: 2, value: 15 },
    amount: 0,
    total: 0
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-bill":
        draft.bill = action.value 
        break
      case "set-people":
        draft.people = action.value ? parseInt(action.value) : 0
        break
      case "select-tip":
        draft.selectedTip.index = draft.tips.indexOf(action.value)
        draft.selectedTip.value = action.value
        break
      case "calculate-tip":
        const total = draft.bill / draft.people
        draft.total = total
        draft.amount = total * (draft.selectedTip.value / 100)
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // first mount
  useEffect(() => {
    dispatch({ type: "calculate-tip" })
  },  [])

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
