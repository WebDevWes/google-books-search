import React from "react";
import API from "../../utils/API";

export function TableHead() {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Description</th>
        <th scope="col">Save to My List</th>
      </tr>
    </thead>
  );
}

export function TableData(props) {
  function saveThis(event) {
    //event.preventDefault();
    // console.log("title", event.title);
    // console.log("author", event.author[0]);
    // console.log("synopsis", event.description);
    // console.log("thumbnail", event.thumbnail);
    // console.log("href", event.href);

    API.saveBook({
      title: event.title,
      author: event.author.toString(),
      synopsis: event.description,
      image: event.thumbnail,
      link: event.href,
    })
      .then((res) => (window.location = "/"))
      .catch((err) => console.log(err));
  }

  return (
    <tr>
      <td>
        <a href={props.href}>
          <img src={props.thumbnail} alt={props.title} />
        </a>
      </td>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.description}</td>
      <td>
        <button onClick={() => saveThis(props)}>Save</button>
      </td>
    </tr>
  );
}
