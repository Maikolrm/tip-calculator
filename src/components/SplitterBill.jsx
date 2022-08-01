import { useState, useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

// components
function TipButton(props) {
  return  (
    <button
      onClick={() => props.dispatch({ type: "select-tip", value: props.tip })}
      className={"inline-block outline-none py-3 rounded-md font-bold text-xl hover:bg-primary hover:text-dark-cyan focus:text-dark-cyan focus:bg-primary " + (props.active ? "bg-primary text-dark-cyan" : "bg-dark-cyan text-light-gr-cyan")}>
      {props.tip}%
    </button>
  )
}

// tip controller
function TipController(props) {
  // local state
  const [focused, setFocused] = useState(true)

  return (
    <>
      <div className="flex items-center font-semibold">
        <h2 className="flex-1 font-semibold text-gr-cyan leading-none">{props.label}</h2>
        <p className={"text-red-300 leading-none " + (!props.value ? "" : "hidden")}>Can't be zero</p>
      </div>
      <div className={`flex mt-2 bg-light-gr-cyan border-2 rounded-md ${!props.value ? "border-red-400" : focused ? "border-gr-cyan" : "border-transparent"}`}>
        <span className="inline-block w-10 h-10 text-center text-gr-cyan leading-10">
          <i className={"fa-solid fa-" + (props.icon)}></i>
        </span> 
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => props.dispatch({ type: props.action, value: e.target.value })}
          value={props.value} type="text"
          className="flex-1 w-full pr-4 bg-transparent outline-none text-2xl text-right text-gr-cyan leading-10"/>
      </div>
    </>
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
        <TipController label="bill" value={appState.bill} icon="dollar" action="set-bill" dispatch={appDispatch} />
      </div>
      {/* tips */}
      <div className="mt-8 lg:mt-0">
        <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
        <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-3 font-bold text-2xl">
          {appState.tips.map((tip, index) => <TipButton key={tip} tip={tip} dispatch={appDispatch} active={index == appState.selectedTip.index} />)}
          <input type="text" className="inline-block bg-light-gr-cyan rounded-md border-2 border-transparent text-center text-dark-cyan outline-none focus:border-gr-cyan" placeholder="Custom" />
        </div>
      </div>
      {/* tips */}
      <div className="mt-8">
        <TipController label="number of people" value={appState.people} icon="user" action="set-people" dispatch={appDispatch} />
      </div>
    </div>
  )
}
