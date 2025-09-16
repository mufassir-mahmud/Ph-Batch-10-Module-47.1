import React from 'react';
import {useLoaderData,  useParams } from 'react-router-dom';
import { addToStoredList } from '../../utility/addToReadLs';
import { addToWishlist } from '../../utility/addToWishlistLs';

const BookDetails = () => {
  
  const {bookId} = useParams();
    const data = useLoaderData();
    console.log(data)
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    console.log(book)
    const {bookName, image,author,review,} = book;
    const handleAddToReadList = (id) =>{
        addToStoredList(id);
       
    }

    const handleAddToWishlist = (id) =>{
        addToWishlist(id)
        
    }
    return (
        <div className='my-10'>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h3 className="text-2xl font-bold">{author}</h3>
      <p className="py-6">
      {review}
      </p>
      <div className='flex gap-5'>
        <button onClick={() => handleAddToReadList(bookId)}  className="btn btn-outline btn-accent">Read</button>
      <button onClick={() => handleAddToWishlist(bookId)}  className="btn btn-outline btn-info">Wishtlist</button>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;