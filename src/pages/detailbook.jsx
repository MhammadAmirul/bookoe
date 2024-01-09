import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
export default function DetailBook() {
  const [book, setBooks] = useState([]);
  const { bookId } = useParams();
  const getDataBooks = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/${bookId}`);
      const responseData = await response.json();
      // Display only the first four books
      setBooks(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDataBooks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <div className="flex flex-col lg:flex-row">
        {/* Gambar buku */}
        <img
          className="w-full lg:w-1/3 h-auto rounded-md mb-8 lg:mb-0"
          src={book.image_url}
          alt={book.title}
        />

        {/* Informasi buku */}
        <div className="flex flex-col lg:ml-8">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>

          <p className="text-gray-700 mb-4">{book.synopsis}</p>

          <div className="flex items-center mb-4">
            <p className="text-gray-600 font-bold mr-2">Author:</p>
            <p className="text-black">{book.author?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
