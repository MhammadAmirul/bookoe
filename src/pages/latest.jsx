import { useState, useEffect } from "react";
const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
export default function Latest() {
  const [books, setBooks] = useState([]);

  const getDataBooks = async () => {
    try {
      const response = await fetch(`${ENDPOINT}?page=1`);
      const responseData = await response.json();
      // Display only the first four books
      setBooks(responseData.data.slice(10, 14));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDataBooks();
  }, []);
  return (
    <div className="">
      <div className="p-20 bg-[#F1F0FE] rounded-lg">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-black">
          Our <strong className="text-[#8170F2]">Latest</strong> Collection
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        {books.map((book) => (
          <div className="flex flex-col gap-4 col-span-3">
            <img
              className="rounded-xl h-[370px] w-[290px]"
              src={book.image_url}
              alt=""
            />
            <p className="font-bold text-3xl lg:text-2xl text-black truncate w-60">
              {book.title}
            </p>
            <p className="text-black mb-2">By Kevin Anderson</p>

            {/* rating */}

            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                className="flex-shrink-0 w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                className="flex-shrink-0 w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                className="flex-shrink-0 w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>

            <div className="mt-2">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#8170F2] bg-white text-[#8170F2] shadow-sm hover:bg-gray-50 dark:text-[#8170F2]"
                href="#"
              >
                Read Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
