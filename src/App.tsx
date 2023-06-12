import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="mx-10 tablet:mx-20 laptop:mx-auto max-w-5xl">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
