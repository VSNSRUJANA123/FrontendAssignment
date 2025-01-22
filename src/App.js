import Label1 from "./components/Label1";
import Label2 from "./components/Label2";
import "./App.css";
import "./index.css";
const App = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex gap-5 p-3  max-md:flex-col">
      <Label1 />
      <Label2 />
    </div>
  );
};

export default App;
