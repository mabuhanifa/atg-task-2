
export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-around">
        <div>
            hello 
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
