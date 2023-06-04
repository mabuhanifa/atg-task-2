export default function Pagination({
  page,
  totalPages,
  getPrevPage,
  getNextPage,
  selectPageHandler,
}) {
  return (
    <>
      <div className="my-10">
        <button
          onClick={() => getPrevPage()}
          className="font-bold text-gray-700 md:mx-2"
        >
            	&#8592; <span className="text-xs">Prev</span>
        </button>
        
          {[...Array(totalPages)].map((_, i) => (
            <button
              onClick={() => selectPageHandler(i + 1)}
              className={
                i === page - 1
                  ? "font-bold inline-block px-1.5 md:px-2.5 py-1 rounded mx-1 bg-blue-500 text-white"
                  : "text-gray inline-block px-1.5 md:px-2.5 py-1 rounded mx-1"
              }
              key={i}
            >
              {i + 1}
            </button>
          ))}
        
        <button
          onClick={() => getNextPage()}
          className="font-bold text-gray-700 md:mx-2"
        >
        <span className="text-xs">Next</span>  &#8594;
        </button>
      </div>
    </>
  );
}