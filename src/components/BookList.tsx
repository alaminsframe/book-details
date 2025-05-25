

interface Book{
    title: string;
    auton_name?: string[];
    authors?: {name: string} [];
    key: string;
    cover_id?: number;
    cover_i?: number;
}

interface BookistProps{
    books: Book[]
}

const BookList:React.FC<BookistProps> = ({books}) => {
  return (
    <div className="">
      {
        books.length > 0 ? (
            books.map((book, bookIndex)=>(
                <div key={bookIndex} className="">
                    <div className="">
                        {book.cover_id ? (
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} />
                        ) : book.cover_i ? (
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
                        ) : (
                            <div className="">No Cover Availabe</div>
                        )}
                    </div>
                    <div className="">
                        <div>
                            <h3 title={book.title}>{book.title}</h3>
                        </div>
                        <div className="">
                            <span>
                                {book.authors ? book.authors[0]?.name : book.auton_name?.[0] || "Unknown Author"}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>View Details</span>
                    </div>
                </div>
            ))
        ) : (
            <div>
                No Books Found
            </div>
        )
      }
    </div>
  )
}

export default BookList
