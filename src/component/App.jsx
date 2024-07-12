import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../component/styles/App.css";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoue from "./PrivateRoue";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/quiz"
              element={
                <PrivateRoue>
                  <Quiz />
                </PrivateRoue>
              }
            />
            <Route
              path="/result"
              element={
                <PrivateRoue>
                  <Result />
                </PrivateRoue>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
