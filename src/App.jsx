import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './route/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Banner from './pages/contents/Banner';
import BannerDetail from './pages/contents/BannerDetail';
import Transactions from './pages/transaction/Transactions';
import TransactionsDetail from './pages/transaction/TransactionsDetail';
import MyPrivileges from './pages/accounts/MyPrivileges';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#0575E6' } }}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/content/banner" element={<Banner />} />
          <Route path="/content/banner/:id" element={<BannerDetail />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<TransactionsDetail />} />
          <Route path="/accounts/myprivileges" element={<MyPrivileges />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
