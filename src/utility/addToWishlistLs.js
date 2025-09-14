const getStoredWishlist = () =>{
    const storedWishlistStr = localStorage.getItem("wish-list");
    if(storedWishlistStr){
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else{
        return [];
    }
}

const addToWishlist = (id) =>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        console.log(id)
    }
    else{
        storedWishlist.push(id);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list', storedWishlistStr);
    }
}

export {addToWishlist,getStoredWishlist}