import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import DragAndDrop from './function/drag-and-drop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="drag-and-drop" element={<DragAndDrop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
