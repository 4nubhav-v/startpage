function Form() {
  return (
    <>
      <form
        id="search-form"
        className="w-full flex flex-col items-center gap-4 justify-around p-4 m-4 mt-8"
        action="https://www.google.com/search"
        method="get"
      >
        <div className="relative md:w-full w-[300px]">
          <span
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gb-gray text-sm select-none"
          >
            $
          </span>
          <input
            id="search-input"
            className="w-full pl-8 pr-4 py-3 bg-gb-bg-soft border-2 border-gb-bg2 rounded-lg text-gb-fg placeholder-gb-gray text-sm focus:border-gb-green focus:outline-none transition-colors duration-200 "
            type="text"
            name="q"
            placeholder="search the web…"
            autoFocus
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-gb-green text-gb-bg font-bold rounded-md text-sm hover:bg-gb-bright-green transition-colors duration-200"
          >
            Search
          </button>
          <button
            type="reset"
            className="px-6 py-2 border border-gb-bg2 text-gb-gray rounded-md text-sm hover:text-gb-red hover:border-gb-red transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
