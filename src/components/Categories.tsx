

const Categories: React.FC = () => {
     const categories = [
        "Science Fiction",
        "Fantasy",
        "Romance",
        "Mystery",
        "Biography",
        "History",
        "Technology",
        "Arts",
        "Literature",
        "Philosophy",
        "Health",
        "Religion",
        "Law",
        "Cooking",
    ];
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 ">
            {
                categories.map((category,index)=>(
                    <span key={index} className="bg-btn text-secondary px-4 py-2 rounded cursor-pointer" >{category}</span>
                ))
            }
        </div>
    )
}

export default Categories
