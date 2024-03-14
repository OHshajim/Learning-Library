import PropTypes from 'prop-types'; // ES6


const Book = ({book,handlePurchase}) => {
    const {author,bookTitle,img,MPrice,rating} = book
   
    return (
        <div className='border-2 border-[#ff4747] p-5 m-6 w-80 rounded-xl'>
            <img src={img} alt="" className='w-full h-64 rounded-xl' />
            <h3 className='text-lg font-semibold mt-2'> {bookTitle}</h3>
            <h3 className='text-lg mt-5'> {author}</h3>

            <p className='mt-1 text-base '>Review : {rating?rating:"(00)"}</p>
            <div className='flex  justify-between items-center mt-2 font-bold'>
            <h4 className='text-lg'>Price : {MPrice}</h4>
            <button className='px-5 text-lg  py-2 bg-[#ff4747] text-white' onClick={()=>handlePurchase(bookTitle)}>Purchase</button>
            </div>
        </div>
    );
};
Book.propTypes={
    book : PropTypes.object.isRequired ,
    handlePurchase : PropTypes.func.isRequired
}
export default Book;