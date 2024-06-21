import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchList from "./components/SearchList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: [<Header/> ,<Body />],
    children: [
      {
        path: "watch",
        element : <WatchPage/>
      },
      {
        path: "/",
        element : <MainContainer/>
      },
      {
        path: "results",
        element : <SearchList/>
      },

    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
