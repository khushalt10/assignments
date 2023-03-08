
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AssignmentDashboard from "./Component/AssignmentDashboard";
import { Assignmentform } from "./Component/Assignmentform";
import AdminDashboard from "./Component/AdminDashboard";
import Dashboard from "./Component/Dashboard";
import DashboardSetting from "./Component/DashboardSetting";
import Grades from "./Component/Grades";
import MyNavbar from "./Component/MyNavbar";
import Sidebar from "./Component/Sidebar";
import Cards from "./Component/Cards";
import ProfileS from "./Component/ProfileS";
import SelectAssignment from "./Component/SelectAssignment";
import ProfileF from "./Component/ProfileF";
import DoughnutChart1 from "./Component/DoughnutChart1";
import LineChart from "./Component/LineChart";
import CategoriesPage from "./Component/Categories";
import AddCategoryPage from "./Component/AdminAddCategoryPage";
import QuizzesPage from "./Component/AdminQuizzesPage";
import AddQuiz from "./Component/AdminAddQuiz";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/AssignmentDashboard" element={<Dashboard />}></Route>
          <Route path="/AssignmentDashboard/DashboardSetting" element={<DashboardSetting></DashboardSetting>}></Route>
          <Route path="/AssignmentDashboard/assignmnetform" element={<Assignmentform></Assignmentform>} />
          <Route path="/AssignmentDashboard/grades" element={<Grades></Grades>} />
          <Route path="/AssignmentDashboard/categories" element={<CategoriesPage></CategoriesPage>} />
          <Route path="/AssignmentDashboard/addCategory" element={<AddCategoryPage></AddCategoryPage>} />
          <Route path="/AssignmentDashboard/quizzesPage" element={<QuizzesPage></QuizzesPage>} />
          <Route path="/AssignmentDashboard/addQuiz" element={<AddQuiz></AddQuiz>} />

          <Route path="/AssignmentDashboard/cards" element={ <Cards></Cards>}></Route>
          <Route path="/AssignmentDashboard/profileS" element={ <ProfileS></ProfileS>}></Route>
          <Route path="/AssignmnetDashboard/SelectAssignment" element={<SelectAssignment></SelectAssignment>}></Route>
          <Route path="/AssignmentDashboard/AdminDashboard" element={ <AdminDashboard></AdminDashboard>} ></Route>
          <Route path="/AssignmentDashboard/profileF" element={ <ProfileF></ProfileF>}></Route>
          <Route path="/AssignmentDashboard/DoughnutChart1" element={ <DoughnutChart1></DoughnutChart1>}></Route>
          <Route path="/AssignmentDashboard/LineChart" element={ <LineChart></LineChart>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
