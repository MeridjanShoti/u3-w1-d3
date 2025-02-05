import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <Col style={{ height: 450 }}>
        <Card style={{ height: "100%" }} className={this.state.selected === true ? "bg-success" : ""}>
          <Card.Img
            variant="top"
            src={this.props.imgUrl}
            style={{ height: "300px", objectFit: "contain" }}
            onClick={() => {
              if (this.state.selected === false) {
                this.setState({
                  selected: true,
                });
              } else {
                this.setState({
                  selected: false,
                });
              }
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.bookTitle}</Card.Title>
            <Card.Text>{this.props.price}</Card.Text>
            <Button variant="primary">{this.props.buttonTxt}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
