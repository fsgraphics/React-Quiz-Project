import "../component/styles/App.css";
import Layout from "./Layout";
import Login from "./Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Layout>
      <Home />
      <Signup />
      <Login />
    </Layout>
  );
};

export default App;
