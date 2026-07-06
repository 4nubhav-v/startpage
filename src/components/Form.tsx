function Form() {
  return (
    <>
      <form
        id="search-form"
        className="m-4 mt-8 flex w-full flex-col items-center justify-around gap-4 p-4"
        action="https://www.google.com/search"
        method="get"
      >
        <div className="md:1/2 relative w-full sm:w-3/4 lg:w-1/2">
          <span
            aria-hidden="true"
            className="text-gb-gray absolute top-1/2 left-4 -translate-y-1/2 text-sm select-none"
          >
            $
          </span>
          <input
            id="search-input"
            className="bg-gb-bg-soft border-gb-bg2 text-gb-fg placeholder-gb-gray focus:border-gb-green w-full rounded-lg border-2 py-3 pr-4 pl-8 text-sm transition-colors duration-200 focus:outline-none"
            type="text"
            name="q"
            placeholder="search the web…"
            autoFocus
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-gb-green text-gb-bg hover:bg-gb-bright-green rounded-md px-6 py-2 text-sm font-bold transition-colors duration-200"
          >
            Search
          </button>
          <button
            type="reset"
            className="border-gb-bg2 text-gb-gray hover:text-gb-red hover:border-gb-red rounded-md border px-6 py-2 text-sm transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
