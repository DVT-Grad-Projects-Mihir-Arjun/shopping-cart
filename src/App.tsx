import ProductCards from "./features/product/ProductCards.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <ProductCards />
      </Provider>
    </>
  );
}

export default App;
