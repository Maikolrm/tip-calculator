import { useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

export default function SplitterTotal(props) {
  // app state
  const appState = useContext(AppState)

  // app state
  const appDispatch = useContext(AppDispatch)

  return (
    <div className="mt-6 p-9 rounded-xl bg-dark-cyan lg:flex-1 lg:mt-0">
      <div className="pb-36">
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="opacity-90 font-semibold text-light-gr-cyan leading-none">Tip amount</h2>
            <p className="mt-2 text-sm text-gr-cyan leading-none">/ person</p>
          </div>
          <h2 className="font-bold text-5xl text-primary">${appState.amount.toFixed(2)}</h2>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1">
            <h2 className="opacity-90 font-semibold text-light-gr-cyan leading-none">Total</h2>
            <p className="mt-2 text-sm text-gr-cyan leading-none">/ person</p>
          </div>
          <h2 className="font-bold text-5xl text-primary">${appState.total.toFixed(2)}</h2>
        </div>
      </div>
      <button onClick={() => appDispatch({ type: "reset" })} disabled={appState.people ? "" : "disabled"} className={"block w-full bg-primary rounded-md font-bold text-xl text-dark-cyan leading-[3.2rem] uppercase tracking-widest " + (appState.people ? "" : "opacity-20")}>reset</button>
    </div>
  )
}
