import "./App.css";
import Card from "./components/Card";

function App() {
  let myObje = {
    name: "Delba",
    age: 25,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="shreyas" btnText="click Me" />
      <Card username="bole" btnText="visit Me" />
    </>
  );
}

export default App;
