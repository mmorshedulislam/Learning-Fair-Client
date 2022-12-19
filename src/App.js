// import logo from "./logo.svg";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";

function App() {
  return (
    <div className="App w-full max-w-7xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
