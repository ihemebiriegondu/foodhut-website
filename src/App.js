import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/sign in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
