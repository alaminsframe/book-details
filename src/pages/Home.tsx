import React, { useEffect } from 'react'
import type { AppDispatch } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { fetchBookByCategory } from '../redux/booksSlice'
import BookList from '../components/BookList'

const Home: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const booksByCategory = useSelector((state: RootState) => state.books.booksByCategory)

    useEffect(()=>{
        const categories = ['Ficton', 'Mistrey', "Fantasy"]
        categories.forEach((category) => {
            if(!booksByCategory[category]) {
                dispatch(fetchBookByCategory(category))
            }
        })
    }, [dispatch, booksByCategory])

    return (
        <div className=''>
            <div className=''>
                {Object.keys(booksByCategory).map((category, categoryIndex) => {
                    const books = booksByCategory[category]
                    return (
                        <div key = {categoryIndex} className=''>
                            <div>
                                <h3>{category}</h3>
                            </div>
                            <BookList books={books.slice(0, 4)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home