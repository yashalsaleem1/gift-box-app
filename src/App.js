import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./pages/buyer/context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import routeConfig from "./routes/routeConfig";

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Routes>
            {routeConfig.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Router>
        <ToastContainer position="top-right" />
      </CartProvider>
    </Provider>
  );
}

export default App;
