// REDUX
// import { Provider } from "react-redux";
// import store from "./redux/store";

// STYLES
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

// ROUTES
import AppRoutes from "./Routes";

function App() {
  return <AppRoutes />;
  // return (
  //   <Provider store={store}>
  //     <AppRoutes />
  //   </Provider>
  // );
}

export default App;
