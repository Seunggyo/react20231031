function MyElem({ name, age, team }) {
  return (
    <>
      <h1>
        {name}의 나이는 {age}이고 팀은 {team}이다
      </h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyElem name={"흥민"} age={44} team={"토트넘"} />
      <MyElem name={"강인"} age={33} team={"파리"} />
    </div>
  );
}

export default App;
