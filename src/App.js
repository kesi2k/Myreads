import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookState from './BookState'
import BookSearch from './BookSearch'
import { Link } from 'react-router-dom'



class BooksApp extends React.Component {
  state = {

     Books: [],

    showSearchPage: false


  }

  //Get the books and add them to the books array
  componentDidMount(){
    BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
    })
  }

  hideSearch = () => {
    this.setState({showSearchPage: false})
  }

  changeState = (book, event) => {
    /*
    console.log(event.target.value)
  */
    let newState = event.target.value

   BooksAPI.update(book, newState).then(() => BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
    }))

  }

  render() {
    return (
      <div className="app">
    <Route exact path="/" render={() => (
                <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <BookState
                changeStateBook={this.changeState}
                books={this.state.Books}
              />

              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
      )}/>
        <Route path="/search" render={() => (
          <div className="search-books-results">
            <ol className="books-grid"></ol>

              <BookSearch
              changeStateBook={this.changeState}
              books={this.state.Books}
              hideSearchPage={this.hideSearch}
              />
          </div>
          )}/>

      </div>
    )
  }
}

export default BooksApp
