import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import AddCard from "./pages/AddCard";
import ShowCard from "./utils/ShowCard";
import PayMony from "./pages/PayMony";
import History from "./pages/History";


function App() {

  return (
    <div className="bg-[url(./mac-Img.jpg)] w-screen h-screen bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-5/6 h-5/6 bg-white flex justify-center items-center">
        <Router>
          <Routes>
            <Route path="/pay" element={<PayMony />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<AddCard />} />
          </Routes>
          <div className="w-[25%] h-4/5 p-10 pl-0 flex flex-col-reverse">
            <div className="bg-blue-700 rounded-lg flex justify-around items-center p-2">
              <NavLink to='/' className="text-2xl">&#128179;</NavLink>
              <NavLink to='/pay' className="text-2xl">&#128176;</NavLink>
              <NavLink to='/history' className="text-2xl">&#128260;</NavLink>
            </div>
            <div className="overflow-x-auto"><ShowCard /></div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
