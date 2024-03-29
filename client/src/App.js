import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import {
  HashRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import "tw-elements";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages to import
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import Friends from "./Pages/Friends";
import Tips from "./Pages/Tips";
import Blender from "./Pages/Blender";
import Unity from "./Pages/Unity";
import Trouble from "./Pages/Trouble";

//Graphql api endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    <BrowserRouter basename="">
      <Header />
      <Routes>
        <Route exact path="/" element={<Start />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/collections" element={<Collections />}></Route>
        <Route exact path="/friends" element={<Friends />}></Route>
        <Route exact path="/tips" element={<Tips />}></Route>
        <Route exact path="/tips/blender" element={<Blender />}></Route>
        <Route exact path="/tips/unity" element={<Unity />}></Route>
        <Route exact path="/tips/trouble" element={<Trouble />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
