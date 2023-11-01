function App() {
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} age={33} city={"서울"} />
      <MyComp address={"노포"} age={22} city={"부산"} />
      <MyComp address={"런던"} city={"영국"} />
      <MyComp name="희찬" age={66} address={"paris"} city={"french"} />
    </>
  );
}

// {value: "흥민", address: "신촌"
function MyComp({ name = "anonymous", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name}은(는) {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
