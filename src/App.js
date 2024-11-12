import "./App.css";

import { Provider } from "react-redux";
import Store from "./redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CartItem />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
