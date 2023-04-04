import Home from "./components/home/Home";

function App() {
  return (
    <div className="font-jetbrains flex flex-col justify-center items-center h-screen px-5 md:px-10 bg-light-blue min-h-[400px]">
      <div className="h-full w-full md:w-[45rem] flex-grow-1">
        <Home />
      </div>
    </div>
  );
}

export default App;
