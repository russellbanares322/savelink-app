import Home from "./components/home/Home";
function App() {
  return (
    <div className="bg-light-blue font-jetbrains flex flex-col justify-center items-center h-full w-full py-4 px-4 md:px-10">
      <div className="h-full w-full md:w-[45rem]">
        <Home />
      </div>
    </div>
  );
}

export default App;
