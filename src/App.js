function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  let message;

  if (num1 === num2) {
    message = <h1>당첨</h1>;
  } else {
    message = <h1>다시 던저 보세요</h1>;
  }
  return (
    <>
      <h1>{num1}</h1>
      <h1>{num2}</h1>
      <h1>{num1 === num2 ? "당첨" : "다시 던져 보세요"}</h1>
      
      <hr />

      {message}
    </>
  );
}

export default App;
