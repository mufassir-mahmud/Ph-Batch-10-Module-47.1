import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToReadLs";
import { getStoredWishlist } from "../../utility/addToWishlistLs";
import Book from "../Book/Book";
const ListedBook = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState('')
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);

    const storedWishlist = getStoredWishlist();
    const storedWishlistInt = storedWishlist.map((id) => parseInt(id));
    const wishListBook = allBooks.filter((book) =>
      storedWishlistInt.includes(book.bookId)
    );
    setWishlist(wishListBook);
  }, [allBooks]);
  const handleSort = sortType =>{
    setSort(sortType);

    if(sortType === 'Ratings'){
      const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortedReadList)
      setWishlist(sortedReadList)
    }
    if(sortType === "Publised Year"){
      const storedReadList = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing);
      setReadList(storedReadList)
      setWishlist(storedReadList)
    }
  }
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div >
            <h2 className="text-2xl font-bold">
              Book I read {readList.length}
            </h2>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              Short By
            </button>
            {
              sort ?`Sort By ${sort}`  : 'Sort By'
            }
            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li onClick={() => handleSort('Ratings') }>
                <a>Ratings</a>
              </li>
              <li  onClick={() => handleSort('Publised Year') }>
                <a>Publised Year</a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {readList.map((book) => (
              <Book book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">My Wish List {wishlist.length}</h2>
          <div >
            
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              Short By
            </button>
            {
              sort ?`Sort By ${sort}`  : 'Sort By'
            }
            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li onClick={() => handleSort('Ratings') }>
                <a>Ratings</a>
              </li>
              <li  onClick={() => handleSort('Publised Year') }>
                <a>Publised Year</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {wishlist.map((book) => (
              <Book book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
