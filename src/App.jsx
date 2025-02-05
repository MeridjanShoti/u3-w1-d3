import "./App.css";

import MyBookshop from "./components/MyBookshop";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
let genres = ["Fantasy", "History", "Horror", "Romance", "SciFi"];

function App() {
  return (
    <>
      <MyNav />
      <div className="container">
        <MyBookshop />
        <label htmlFor="genre">Select Genre</label>
        <select name="genre" id="genre" className="mx-2" onChange={genreChange}>
          {genres.map((genre, index) => (
            <option value={genre.toLowerCase()} key={`genre-${genre.toLowerCase + index}`}>
              {genre}
            </option>
          ))}
        </select>
        <BookList />
      </div>
      <MyFooter />
    </>
  );
}

function genreChange(e) {
  e.target.value;
}
export default App;
