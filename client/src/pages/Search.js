import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { TableHead, TableData } from "../components/table/Table";

function Search() {
  // Setting our component's initial state
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchBooks(book)
      .then((res) => {
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>What Book do you want to look up?</h1>
          </Jumbotron>
          <div className="container">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="form-control col-md-6"
                  placeholder="Search Google Books"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-danger">
                Search
              </button>
            </form>
            <table className="table">
              <TableHead />
              <tbody>
                {result.map((book) => (
                  <TableData
                    key={book.etag}
                    href={book.volumeInfo.previewLink}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail !== null ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
