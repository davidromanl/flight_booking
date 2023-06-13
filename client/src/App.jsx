import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import ReservationsPage from "./pages/ReservationsPage";
import Layout from "./pages/Layout";
import AdminPage from "./pages/AdminPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="flights" element={<FlightsPage />}></Route>
          <Route path="reservations" element={<ReservationsPage />}></Route>
          <Route path="admin" element={<AdminPage />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
