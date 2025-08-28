
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeLayout from './pages/HomeLayout';
import CreditsPage from './pages/CreditsPage';
import GuidePage from './pages/GuidePage';
import GuideLayout from './pages/GuideLayout';
import GuideWelcomePage from './pages/GuideWelcomePage'
import NotFoundPage from './pages/NotFoundPage'
import { StrictMode } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<HomePage />}/>
          <Route path='guide' element={<GuideLayout />}>
            <Route index={true} element={<GuideWelcomePage />} />
            <Route path=':id' element={<GuidePage />}/>
          </Route>
          <Route path='credits' element={<CreditsPage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />
</StrictMode>
);
