import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom'

//import sortBy from 'sort-by'



class BookSearch extends Component {

  state={
    booksList: []
  }

  searchBooks = function(query, existingBooks)
  {
    //console.log(query)
    //console.log(existingBooks)
    if (query.length > 1) {
      let booksList = [];

      //Query API
      BooksAPI.search(query, 20).then((books) => {
        if(books.error)
        {
          console.log('Error');
        }
        else
        {
          // Check if books exist on user page
          booksList = books

          booksList.forEach(
            (booksearched) => (
                existingBooks.forEach(
                  (existsB) =>
                  {
                    if(existsB.id == booksearched.id)
                    {
                      booksearched.shelf = existsB.shelf
                    }
                  }
                )
            )
          )
          //console.log('In API')
          booksList = books;
          this.setState({booksList});
        }
      })
    }
    else {
      this.setState({booksList: []});
    }
  }

  render(){

    const {changeStateBook, books } = this.props

        return(
          <div className="search-books">

            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value, books)}/>
                </div>
              </div>

            <div className="bookshelf">
              <div className="panel-heading">
                  <h1> Search Results </h1>
              </div>
            </div>


            <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksList.map((book) => (
                        <li key={book.id}>
                        <Book
                          book={book}
                          key={book.id}
                          changeStateBook={changeStateBook}
                        />
                        </li>
                        ))}
                    </ol>
            </div>


          </div>
    )

  }
}

export default BookSearch