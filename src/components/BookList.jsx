import fantasy from "../assets/books/fantasy.json";
import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";

function handleSubmit(e) {
  e.preventDefault();
  let search = document.getElementById("search");
  this.setState({
    searchedWords: search.value,
  });
}
class BookList extends Component {
  state = { searchedWords: "" };
  render() {
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="search">Cerca tra i libri</label>
          <input type="text" id="search" className="mx-2" />
          <button type="submit">Search</button>
        </Form>

        <Row id="bookRow" className="row-cols-2 row-cols-md-3 row-cols-lg-5 gy-5 mt-1">
          {fantasy
            .filter((search) => search.title.toLowerCase().includes(this.state.searchedWords))
            .map((book) => (
              <SingleBook
                key={`book-${book.asin}`}
                imgUrl={book.img}
                bookTitle={book.title}
                price={book.price}
                buttonTxt="Buy"
              />
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
