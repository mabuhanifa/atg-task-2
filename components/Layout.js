import Names from "./Names";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-around">
        <div>
            <Names/>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
