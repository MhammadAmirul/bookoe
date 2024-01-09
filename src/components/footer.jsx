export default function Footer() {
  return (
    <div className="bg-[#8170F2] w-full rounded-lg my-12">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="">
          <div className="col-span-full lg:col-span-1 ">
            <form className="flex flex-col justify-center">
              <h1 className="block text-24px font-bold sm:text-2xl lg:text-6xl lg:leading-tight dark:text-[#FFFFFF] text-center">
                Join our news letter to get our latest recommendation!
              </h1>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 rounded-lg p-2 justify-center">
                <div className="w-1/3">
                  <label for="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#FFFFFF] dark:text-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#F1F0FE] text-[#8170F2] hover:bg-[#e5e4fb] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1"
                  href="#"
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
