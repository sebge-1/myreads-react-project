import React, {Component} from 'react'
import Book from './Book'

class CurrentlyReading extends Component {

render() {
  const bookList = this.props.books.map(book => <li><Book book={book} /></li>)

  return (

    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList}
        </ol>
      </div>
    </div>
    )
  }
}

export default CurrentlyReading;