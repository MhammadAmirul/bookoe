import Book1 from "./book1";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Latest from "./pages/latest";
import TopPicks from "./pages/top-picks";
import NotFound from "./components/not-found";
import DetailBook from "./pages/detailbook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Book1 />} />
        <Route path="latest" element={<Latest />} />
        <Route path="top-picks" element={<TopPicks />} />
        <Route path="books/:bookId" element={<DetailBook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
