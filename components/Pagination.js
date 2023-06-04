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
          className="text-xl font-bold text-gray-700 mx-2"
        >
            Previous
        </button>
        
          {[...Array(totalPages)].map((_, i) => (
            <button
              onClick={() => selectPageHandler(i + 1)}
              className={
                i === page - 1
                  ? "font-bold inline-block px-2.5 py-1 rounded mx-1 bg-gray-300 text-blue-700"
                  : "text-gray inline-block px-2.5 py-1 rounded mx-1"
              }
              key={i}
            >
              {i + 1}
            </button>
          ))}
        
        <button
          onClick={() => getNextPage()}
          className="mx-2 text-xl font-bold text-gray-700"
        >
          Next
        </button>
      </div>
    </>
  );
}