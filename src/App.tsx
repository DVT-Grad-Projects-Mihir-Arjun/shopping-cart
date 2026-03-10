import ProductCards from "./components/ProductCards.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

function App() {
  return (
    <>
      <Provider store={store}>
        <ProductProvider>
          <Navbar />
          <ProductCards />
        </ProductProvider>
      </Provider>
    </>
  );
}

export default App;
