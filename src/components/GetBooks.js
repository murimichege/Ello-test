import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_BOOK } from "../Graphql/Queries";

function GetBooks() {
  const { error, loading, data } = useQuery(GET_BOOK);
  const {books, setBooks} = useState([])

  useEffect(() => {
    setBooks(data.book.author)
    console.log(books)
  },[data])
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div>
      {
          books.map((item) => {
              return(
                  <h1>{item.book.author}</h1>
              )
          })
      }
  </div>;
}

export default GetBooks;
