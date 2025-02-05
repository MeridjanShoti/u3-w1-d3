import { Button, Card, Col } from "react-bootstrap";
import fantasy from "../assets/books/fantasy.json";
import { Component } from "react";
class AllTheBooks extends Component {
  render() {
    return (
      <>
        {fantasy.map((book) => (
          <Col key={`book-${book.asin}`} style={{ height: 450 }}>
            <Card style={{ height: "100%" }}>
              <Card.Img variant="top" src={book.img} style={{ height: "300px", objectFit: "contain" }} />
              <Card.Body>
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}
export default AllTheBooks;
