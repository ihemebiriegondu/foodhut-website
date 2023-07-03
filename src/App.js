import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Foodspin from "./pages/Foodspin";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/foodspin" element={<Foodspin />} />
        <Route path="/sign in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
