import { useState, useEffect, useContext } from "react"

// context
import AppState from "../AppState"
import AppDispatch from "../AppDispatch"

// components
function TipButton(props) {
  // handle click
  function handleClick() {
    props.dispatch({ type: "select-tip", index: props.index, value: props.tip })
    props.setValue("") // this prop points towards custom value field
  }

  return  (
    <button
      onClick={handleClick}
      className={"inline-block outline-none py-3 rounded-md font-bold text-xl hover:bg-primary hover:text-dark-cyan focus:text-dark-cyan focus:bg-primary " + (props.active ? "bg-primary text-dark-cyan" : "bg-dark-cyan text-light-gr-cyan")}>
      {props.tip}%
    </button>
  )
}

// tip controller
function TipController(props) {
  // local state
  const [focused, setFocused] = useState(false)

  return (
    <>
      <div className="flex items-center font-semibold">
        <label htmlFor={props.name} className="flex-1 font-semibold text-gr-cyan leading-none">{props.label.slice(0, 1).toUpperCase() + props.label.slice(1)}</label>
        <p className={"text-red-300 leading-none " + (!props.value ? "" : "hidden")}>Can't be zero</p>
      </div>
      <div className={`flex mt-2 bg-light-gr-cyan border-2 rounded-md ${!props.value ? "border-red-400" : focused ? "border-gr-cyan" : "border-transparent"}`}>
        <span className="inline-block w-10 h-10 text-center text-gr-cyan leading-10">
          <i className={"fa-solid fa-" + (props.icon)}></i>
        </span> 
        <input
          id={props.name}
          name={props.name}
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
  // local state
  const [value, setValue] = useState("")

  // app state
  const appState = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  // value changes
  useEffect(() => {
    appDispatch({ type: "select-tip", index: value ? "custom" : 0, value: value ? parseInt(value) : 5 })
  }, [value])

  return (
    <div className="flex flex-col justify-between lg:px-6 lg:flex-1">
      <div>
        <TipController label="bill" name="bill" value={appState.bill} icon="dollar" action="set-bill" dispatch={appDispatch} />
      </div>
      {/* tips */}
      <div className="mt-8 lg:mt-0">
        <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
        <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-3 font-bold text-2xl">
          {appState.tips.map((tip, index) => <TipButton key={tip} index={index} tip={tip} dispatch={appDispatch} active={index == appState.selectedTip.index} setValue={setValue} />)}
          <input value={value} onChange={e => setValue(e.target.value.replace(/([^0-9])/g, ""))} type="text" className={"inline-block bg-light-gr-cyan rounded-md border-2 border-transparent text-dark-cyan outline-none focus:border-gr-cyan " + (value ? "pr-2 text-right" : "text-center")} placeholder="Custom" />
        </div>
      </div>
      {/* tips */}
      <div className="mt-8">
        <TipController label="number of people" name="people" value={appState.people} icon="user" action="set-people" dispatch={appDispatch} />
      </div>
    </div>
  )
}
