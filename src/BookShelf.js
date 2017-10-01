import React, { Component } from 'react';
import Book from './Book'



class BookShelf extends Component {

    render(){
      const { books, changeStateBook, title  } = this.props

        return(
            <div className="bookshelf">
                  <div className="panel-heading">
                  <b>{title}</b>
                  </div>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) => (
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

export default BookShelf

