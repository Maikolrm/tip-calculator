// components
function TipButton(props) {
  return (
    <button className="inline-block p-2 bg-dark-cyan rounded-md font-bold text-xl text-light-gr-cyan hover:bg-primary hover:text-dark-cyan">
      {props.percent}%
    </button>
  )
}

export default function SplitterBill(props) {
  return (
    <div className="flex flex-col justify-between lg:px-6 lg:flex-1">
      <div>
        <h2 className="font-semibold text-gr-cyan leading-none">Bill</h2>
        <div className="pt-2">
          <input type="text" className="block w-full rounded bg-light-gr-cyan outline-none leading-10"/>
        </div>
      </div>
      {/* tips */}
      <div className="mt-8 lg:mt-0">
        <h2 className="font-semibold text-gr-cyan leading-none">Select tip %</h2>
        <div className="grid grid-cols-2 gap-2 pt-3 sm:grid-cols-3">
          <TipButton percent="5" />
          <TipButton percent="10" />
          <TipButton percent="15" />
          <TipButton percent="25" />
          <TipButton percent="50" />
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
  )
}