function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);

  let messageClassName = "lose";

  let message = "다시 던져 보세요";

  if (num1 === num2) {
    messageClassName = "win";
    message = "당첨";
  }

  return (
    <>
      <h1>first : {num1}</h1>
      <h1>second : {num2}</h1>
      
      <h1 className={messageClassName}>{message}</h1>
    </>
  );
}

export default App;
