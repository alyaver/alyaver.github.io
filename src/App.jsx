import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import PlaneFinder from './pages/PlaneFinder.jsx';
import DockVision from './pages/DockVision.jsx';
import ProcessScheduler from './pages/ProcessScheduler.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/planefinder" element={<PlaneFinder />} />
          <Route path="/projects/dockvision" element={<DockVision />} />
          <Route path="/projects/process-scheduler" element={<ProcessScheduler />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
