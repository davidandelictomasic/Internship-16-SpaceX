import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaunchesPage from "./pages/LaunchesPage";
import LaunchDetailPage from "./pages/LaunchDetailPage";
import ShipsPage from "./pages/ShipsPage";
import ShipDetailPage from "./pages/ShipDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/launches" element={<LaunchesPage />} />
      <Route path="/launches/:id" element={<LaunchDetailPage />} />
      <Route path="/ships" element={<ShipsPage />} />
      <Route path="/ships/:id" element={<ShipDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
