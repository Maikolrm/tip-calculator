import { useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

// components
function TipButton(props) {
  return  (
    <button onClick={() => appDispatch({ type: "set-tip", value: props.tip })} className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan hover:bg-primary hover:text-dark-cyan">
      {props.tip}%
    </button>
  )
}

export default function SplitterBill(props) {
  // app state
  const appState = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return (
    <div className="flex flex-col justify-between lg:px-6 lg:flex-1">
      <div>
        <h2 className="font-semibold text-gr-cyan leading-none">Bill</h2>
        <div className="flex mt-2 bg-light-gr-cyan rounded-md">
          <span className="inline-block w-10 h-10 text-center text-gr-cyan leading-10"><i className="fa-solid fa-dollar"></i></span> 
          <input
            onChange={e => appDispatch({ type: "set-bill", value: e.target.value })}
            value={appState.bill} type="text"
            className="flex-1 w-full pr-4 bg-transparent outline-none text-2xl text-right text-gr-cyan leading-10"/>
        </div>
      </div>
      {/* tips */}
      <div className="mt-8 lg:mt-0">
        <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
        <div className="grid grid-cols-2 gap-2 pt-3 sm:grid-cols-3">
          {appState.tips.map(tip => <TipButton key={tip} tip={tip} dispatch={appDispatch} />)}
          <button>Custom</button>
        </div>
      </div>
      {/* tips */}
      <div className="mt-8">
        <div className="flex items-center font-semibold">
          <h2 className="flex-1 font-semibold text-gr-cyan leading-none">Number of people</h2>
          <p className="text-red-300 leading-none">Can't be zero</p>
        </div>
        <div className="flex mt-2 bg-light-gr-cyan border-2 border-red-400 rounded-md">
          <span className="inline-block w-10 h-10 text-center text-gr-cyan leading-10"><i className="fa-solid fa-user"></i></span> 
          <input
            onChange={e => appDispatch({ type: "set-people", value: e.target.value })}
            value={appState.people} type="text"
            className="flex-1 w-full pr-4 bg-transparent outline-none text-2xl text-right text-gr-cyan leading-10"/>
        </div>
      </div>
    </div>
  )
}
