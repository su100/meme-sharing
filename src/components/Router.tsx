import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, SearchPage, UploadPage, ViewPage, PolicyPage, MyPage } from 'pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
