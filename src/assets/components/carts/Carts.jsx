import { useEffect } from "react";
import { useState } from "react";
import Book from "../Books/Book";
const Carts = () => {
    const [carts, setCart] = useState([]);
    const [Books, setBook] = useState([])
    useEffect(() => {
        fetch('Books.JSON')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    // console.log(carts);

    const handlePurchase = (bookTitle) => {
        // console.log(bookTitle);
        if (bookTitle) {
            const books = carts.find(book => bookTitle == book.bookTitle)
            const newBooks = [...Books, books]
            setBook(newBooks)
        }
        console.log(Books);

    }
    return (
        <>
            <h3 className="text-2xl mx-5  p-2 ">Books : {carts.length}</h3>
            <div className=" flex xl:flex-row flex-col m-5 justify-between  ">

                <div className="m-5 flex-1">
                    <div className="bg-[#574848b6]  rounded-xl p-10  ">
                        <h3 className=" py-2 px-3 rounded-xl ">Mark : <span className="text-red-500 font-bold"> {Books.length}</span></h3><hr />
                 
                 {Books.map(book=><div key={book.bookTitle} className="my-5 border px-5 py-3 rounded-xl  flex   items-center justify-between">
                            <div>
                            <h3 className="sm:text-xl text-base font-semibold ">{book.bookTitle}</h3>
                            <h4 className="text-sm mt-2">{book.author}</h4>
                            </div>
                            <h3 className="sm:text-xl text-base  font-semibold text-[#ff4747]">Price : {book.MPrice}</h3>
                        </div>)}
                    </div>
                </div>

                <div className="flex-2">

                    <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3">
                        {carts.map(book => <Book key={book.bookTitle} book={book} handlePurchase={handlePurchase}></Book>)}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Carts;