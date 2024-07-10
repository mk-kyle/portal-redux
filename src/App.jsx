import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import ShowCard from "./utils/ShowCard";


function App() {
  
  const addCard = useSelector(state => state.addCard.newCard)

  console.log(addCard);


  return (
    <div className="bg-[url(./mac-Img.jpg)] w-screen h-screen bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-5/6 h-5/6 bg-white flex justify-center items-center">
        <Router>
          <Routes>
            <Route path="/" element={<AddCard />}/>
          </Routes>
        </Router>
        <div className="w-[25%]">
          <ShowCard />
        </div>
      </div>
    </div>
  );
}

export default App;
