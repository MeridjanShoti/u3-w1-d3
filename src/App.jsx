import { Row } from "react-bootstrap";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyBookshop from "./components/MyBookshop";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import fantasy from "../src/assets/books/fantasy.json";
import history from "../src/assets/books/history.json";
import horror from "../src/assets/books/horror.json";
import romance from "../src/assets/books/romance.json";
import scifi from "../src/assets/books/scifi.json";
let genres = ["Fantasy", "History", "Horror", "Romance", "SciFi"];
let allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

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
        <Row className="row-cols-5 gy-5 mt-1">
          <AllTheBooks />
        </Row>
      </div>
      <MyFooter />
    </>
  );
}

function genreChange(e) {
  e.target.value;
}
export default App;
