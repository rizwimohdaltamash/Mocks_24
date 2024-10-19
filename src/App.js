import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import About from "./components/About";
import Reactjs from "./components/Reactjs";
import Javascript from "./components/Javascript";
import Nodejs from "./components/Nodejs";

//register
import Login from "./register/Login";
import Signup from "./register/Signup";

//admin
import DashboardAdmin from "./admin/DashboardAdmin";

//pages
import Jseasy from "./pages/Js/Jseasy";
import Jseasysols from "./pages/Js/Jseasysols";

import Jsmedium from "./pages/Js/Jsmedium";
import Jsmediumsols from "./pages/Js/Jsmediumsols";

import Jshard from "./pages/Js/Jshard";
import Jshardsols from "./pages/Js/Jshardsols";

import Reacteasy from "./pages/Reactjs/Reacteasy";
import Reacteasysols from "./pages/Reactjs/Reacteasysols";

import Reactmedium from "./pages/Reactjs/Reactmedium";
import Reactmediumsols from "./pages/Reactjs/Reactmediumsols";

import Reacthard from "./pages/Reactjs/Reacthard";
import Reacthardsols from "./pages/Reactjs/Reacthardsols";

//protected Route
// import { ProtectedRouteForUser } from "../src/protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "../src/protectedRoute/ProtectedRouteForAdmin";
import AdminDash from "./admin/AdminDash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/intro/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admindashboard"
          element={
            <ProtectedRouteForAdmin>
              <DashboardAdmin />
            </ProtectedRouteForAdmin>
          }
        />
         <Route
          path="/admindash"
          element={
            <ProtectedRouteForAdmin>
              <AdminDash />
            </ProtectedRouteForAdmin>
          }
        />

             {/* Javascript Routing */}

        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/nodejs" element={<Nodejs />} />

        <Route path="/javascript/easyjs" element={<Jseasy />} />
        <Route path="/javascript/easyjssols" element={<Jseasysols />} />

        <Route path="/javascript/mediumjs" element={<Jsmedium />} />
        <Route path="/javascript/mediumjssols" element={<Jsmediumsols />} />

        <Route path="/javascript/hardjs" element={<Jshard />} />
        <Route path="/javascript/hardjssols" element={<Jshardsols />} />

            {/* ReactJS Routing */}

        <Route path="/reactjs/easyreactjs" element={<Reacteasy />} />
        <Route path="/reactjs/easyreactjssols" element={<Reacteasysols />} />

        <Route path="/reactjs/mediumreactjs" element={<Reactmedium />} />
        <Route path="/reactjs/mediumreactjssols" element={<Reactmediumsols />} />

        <Route path="/reactjs/hardreactjs" element={<Reacthard />} />
        <Route path="/reactjs/hardreactjssols" element={<Reacthardsols />} />



      </Routes>
    </div>
  );
}

export default App;
