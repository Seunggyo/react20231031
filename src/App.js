function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "010999999";
  const age = 44;
  const randomNumber = Math.random();
  return (
    <>
      <h1>age는 {age}</h1>
      <h1>address 는 {address}</h1>
      <h1>country 는 {country}</h1>
      <h1>phone number 는 {phone}</h1>
      <h1>난수 : {randomNumber}</h1>
      <h1>1~ 10 : {Math.ceil(randomNumber * 10)}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
