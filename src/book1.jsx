import { Link } from "react-router-dom";
import gambar from "./assets/Product photo.png";
import image from "./assets/Product photo1.png";
import figure from "./assets/Product photo2.png";
import { useState, useEffect } from "react";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
export default function Book1() {
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
    <div>
      <div
        id="ab-full-width-with-dismiss-button"
        className="ab-full-width-with-dismiss-button hs-removing:-translate-y-full bg-[#F1F0FE] rounded-lg"
      >
        {/* about book */}
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div className="md:col-span-2">
                  <p className="mt-3 block text-lg font-bold text-[#8170F2]">
                    MUST READ
                  </p>
                  <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-black">
                    I Want A Better Catastrophe
                  </h1>

                  <div className="flex items-center gap-1">
                    <p className="block text-lg font-bold text-black">
                      ANDREW BOYD
                    </p>
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
                  </div>
                  <p className="mt-3 text-lg text-gray-800">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequuntur accusamus eos cupiditate pariatur corporis ad
                    alias. Sequi quibusdam perferendis neque aspernatur odio,
                    harum reiciendis ullam quis consequatur at fugiat vero?
                  </p>
                  {/* Tombol read book dan rekomendasi*/}
                  <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#8170F2] text-white hover:bg-[#7060d8]"
                      href="#"
                    >
                      Read Book
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#8170F2] bg-white text-[#8170F2] shadow-sm hover:bg-gray-50 dark:text-[#8170F2]"
                      href="#"
                    >
                      See All Recommendations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              {/* book produk */}
              <div
                style={{
                  display: "flex",
                  width: "408.45px",
                  height: "390px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    display: "flex flex-col",
                    width: "196.06px",
                    height: "272.30px",
                    left: "212.39px",
                    top: "58.59px",
                    position: "absolute",
                    borderRadius: "10px",
                  }}
                  src={figure}
                  alt="Placeholder 1"
                />
                <img
                  style={{
                    width: "236.20px",
                    height: "327.75px",
                    left: "124.51px",
                    top: "31.13px",
                    position: "absolute",
                    borderRadius: "10px",
                  }}
                  src={image}
                  alt="Placeholder 2"
                />
                <img
                  style={{
                    width: "280.14px",
                    height: "390px",
                    left: "0px",
                    top: "0px",
                    position: "absolute",
                    borderRadius: "10px",
                  }}
                  src={gambar}
                  alt="Placeholder 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Data booke 1 */}
      <div>
        <div className="grid grid-cols-6 mt-10 gap-10">
          {books.map((book) => (
            <div className="flex flex-row gap-6 col-span-3">
              <img
                className="rounded-xl h-[346px] w-[277px]"
                src={book.image_url}
                alt="Book Cover"
              />
              <div className="flex flex-col justify-between">
                <h2 className="font-bold text-3xl lg:text-2xl text-black truncate w-60 mb-1">
                  {book.title}
                </h2>

                {/* author and keterangan buku */}
                <p className="text-black mb-10 font-bold">By Kevin Anderson</p>
                {/* rating */}
                <div className="flex items-center mb-5">
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
                <p className="text-black mb-4">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common
                  pain points that we have encountered in various products and
                  projects.
                </p>
                <Link
                  to={`/books/${book.id}`}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#8170F2] bg-white text-[#8170F2] shadow-sm hover:bg-gray-50 dark:text-[#8170F2]"
                >
                  Read Book
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* // data booke 2*/}
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-8">
            {books.map((book) => (
              <div className="flex flex-col gap-4 col-span-3">
                <img
                  className="rounded-xl h-[340px] w-[260px]"
                  src={book.image_url}
                  alt=""
                />
                <h2 className="font-bold text-3xl lg:text-2xl text-black truncate w-60">
                  {book.title}
                </h2>
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

                {/* read book */}
                <div>
                  <div className="mt-2">
                    <Link
                      to={`/books/${book.id}`}
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#8170F2] bg-white text-[#8170F2] shadow-sm hover:bg-gray-50 dark:text-[#8170F2]"
                    >
                      Read Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
