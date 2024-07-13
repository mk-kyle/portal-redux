import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <div className="w-[25%] h-[90%] pt-10 mr-10 flex items-end mb-32 overflow-x-auto overflow-y-hidden">
            <ShowCard />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
