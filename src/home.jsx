//header
export default function Home() {
  return (
    <div className="container mx-auto py-4 font-poppins">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2 items-center">
          <img src="Group 3.svg" />
          <div className="flex flex-col ">
            <h1 className="text-lg">Bookoe</h1>
            <h3 className="text-sm text-gray-800">Rekomendasi Bukumu</h3>
          </div>
        </div>

        <div className="">
          <nav className="flex flex-row space-x-4">
            <a href="/">All</a>
            <a href="/latest">Latest</a>
            <a href="/top-picks">Top Picks</a>
          </nav>
        </div>

        <div className="flex flex-row space-x-2">
          <input
            className="px-4 py-1 rounded-md border-2 border-gray-200 placeholder:text-sm"
            type="search"
            placeholder="Search by title or authors..."
          />
          <button
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#8170F2] bg-white text-[#8170F2] shadow-sm hover:bg-gray-50 dark:text-[#8170F2]"
            href="#"
          >
            Edit List
          </button>
        </div>
      </div>
    </div>
  );
}
