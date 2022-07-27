export default function SplitterTotal(props) {
  return (
    <div className="mt-6 p-9 rounded-xl bg-dark-cyan lg:flex-1 lg:mt-0">
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
      <button className="block w-full bg-primary rounded-md font-bold text-dark-cyan leading-10 uppercase tracking-widest">reset</button>
    </div>
  )
}
