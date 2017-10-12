import React, { Component } from 'react'

// &#10004;

class Book extends Component {

   render(){
      const { book, changeStateBook  } = this.props


      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">

              <select defaultValue={book.shelf} onChange={(event) => changeStateBook(book, event)} >


                <option value="none" disabled>Move to...</option>

                { //Check bookshelf value
                  (book.shelf === "currentlyReading")
                    ?<option value="currentlyReading"> &#10004; Currently Reading </option>
                    :<option value="currentlyReading"> Currently Reading </option>
                }
                {
                    (book.shelf === "wantToRead")
                      ?<option value="wantToRead"> &#10004; Want to Read</option>
                      :<option value="wantToRead"> Want to Read</option>

                }
                {
                  (book.shelf === "read")
                    ?<option value="read">&#10004; Read</option>
                    :<option value="read">Read</option>
                }
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title"> {book.title}  </div>
          <div className="book-authors"> {book.authors}  </div>
        </div>

        )

    }
}

export default Book