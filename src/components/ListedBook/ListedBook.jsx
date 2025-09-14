import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToReadLs';
import { getStoredWishlist } from '../../utility/addToWishlistLs';
import Book from '../Book/Book';
const ListedBook = () => {
    const allBooks = useLoaderData();
    const [readList,setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
    setReadList(readBookList);
    const storedWishlist = getStoredWishlist();
    const storedWishlistInt = storedWishlist.map(id => parseInt(id));
    const wishListBook = allBooks.filter(book => storedWishlistInt.includes(book.bookId));
    setWishlist(wishListBook);
    },[]);
    
    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl font-bold'>Book I read {readList.length}</h2>
      <div className='grid grid-cols-3 gap-10'>
        {
            readList.map(book => <Book book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl font-bold'>My Wish List {wishlist.length}</h2>
      <div className='grid grid-cols-3 gap-10'>
        {
            wishlist.map(book => <Book book={book}></Book>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;