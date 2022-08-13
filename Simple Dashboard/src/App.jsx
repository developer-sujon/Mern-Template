//external lib imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";
import CreatePasswordPage from "./pages/CreatePasswordPage/CreatePasswordPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SendOptPage from "./pages/SendOptPage/SendOptPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import VerifyOptPage from "./pages/VerifyOptPage/VerifyOptPage";

//internal lib imports

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/send-otp" element={<SendOptPage />} />
          <Route path="/verify-otp" element={<VerifyOptPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-password" element={<CreatePasswordPage />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;
