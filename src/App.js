import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import BookDetails from './pages/book/BookDetails';
import Home from './pages/Home';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookdetails" element={<BookDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
