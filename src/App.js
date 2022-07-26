// import "./App.css";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello PWC Trainees</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StudentsData from "./pages/StudentsData";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
// import AboutUs from "./pages/Aboutus";
// import Applicationform from "./pages/Applicationform";
// import Contactus from "./pages/Contactus";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path={"/Home"} element={<Home />} />
//           <Route path={"/Aboutus"} element={<AboutUs />} />
//           <Route path={"/Gallery"} element={<Gallery />} />
//           <Route path={"/studentsData"} element={<StudentsData />} />
//           <Route path={"/Contactus"} element={<Contactus />} />
//           <Route path={"/Applicationform"} element={<Applicationform />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import Recruitmentform from "./pages/Recruitmentform";

function App() {
  return (
    <div className="App">
      <h1>Hello PWC Trainees</h1>
      <Recruitmentform />
    </div>
  );
}

export default App;