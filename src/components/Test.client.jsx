function Test({ children }) {
  console.log("inside TEST 2");

  return (
    <div className="dom-test">
      TEST!!!
      {children}
    </div>
  );
}
export default Test;
