import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookState extends Component {

  render(){
    const { books, changeStateBook } = this.props

    let currentlyReading
    let wantToRead
    let read

    if(this.props.books != null) {
      currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      wantToRead = books.filter(book => book.shelf === 'wantToRead')
      read = books.filter(book => book.shelf === 'read')
    }

    return(
      <div>
        <BookShelf books={currentlyReading} title='Currently Reading' changeStateBook={changeStateBook} />
        <BookShelf books={wantToRead} title='Want to Read' changeStateBook={changeStateBook} />
        <BookShelf books={read} title='Read' changeStateBook={changeStateBook} />
      </div>

      )
  }
}

export default BookState