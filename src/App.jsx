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
    bill: 1500,
    people: 5,
    tips: [5, 10, 15, 25, 50],
    selectedTip: { index: 0, value: 5 },
    amount: 0,
    total: 0
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-bill":
        draft.bill = action.value ? parseFloat(action.value) : 0
        break
      case "set-people":
        draft.people = action.value ? parseInt(action.value) : 0
        break
      case "select-tip":
        draft.selectedTip.index = action.index
        draft.selectedTip.value = action.value
        break
      case "calculate-tip":
        const total = action.people ? (draft.bill / draft.people) : (0)
        draft.total = total
        draft.amount = total * (draft.selectedTip.value / 100)
        break
      case "reset":
        draft.bill = 0
        draft.people = 0
        draft.selectedTip.index = 0
        draft.selectedTip.value = 5
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // watching state changes
  useEffect(() => {
    dispatch({ type: "calculate-tip", people: state.people })
  },  [state.bill, state.people, state.selectedTip])

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <div className="m-auto w-full max-w-4xl font-space-mono">
          <header className="flex">
            <img className="m-auto" src="/logo.svg" alt="Splitter logo" />
          </header>
          <main className="p-6 mt-14 bg-white rounded-2xl shadow-xl lg:flex">
            <SplitterBill />
            <SplitterTotal />
          </main>
          <footer className="flex items-center mt-4 mb-2 text-center text-gr-cyan">
            <a href="https://hernandez-maikol.netlify.app" target="_blank" className="w-10 h-10 text-center leading-10 hover:text-dark-cyan">
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            <h1 className="flex-1 font-semibold text-base leading-none">
              hernandez maikol {new Date().getFullYear()}
            </h1>
            <a href="https://github.com/Maikolrm" target="_blank" className="w-10 h-10 text-center leading-10 hover:text-dark-cyan">
              <i className="fa-brands fa-github"></i>
            </a>
          </footer>
        </div>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
