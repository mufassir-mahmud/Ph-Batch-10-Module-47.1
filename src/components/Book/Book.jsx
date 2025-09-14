import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,author,image,tags} = book;
    return (
       <Link to={`/books/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-[166px] p-4'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="card-actions">
      <div className="badge badge-outline">{tags[0]}</div>
      <div className="badge badge-outline">{tags[1]}</div>
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    
  </div>
</div>
        </div>
       </Link>
    );
};

export default Book;