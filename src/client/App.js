import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/orderPage';
import { OrderData } from '../model/data';
import { Nav } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Order() {
  return (
    <div>
      <h4>List created from external data:</h4>
      <OrderPage data={OrderData} />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Nav variant="pills" activeKey="home" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="home" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/order">
            Order
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/nothing-here">Nothing Here</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />

      <Outlet />
    </div>
  );
}
export default function App() {
  return (
    <div>
      Routes nest inside one another. Nested route paths build upon parent route
      paths, and nested route elements render inside parent route elements. See
      the note about below.
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="order" element={<Order />} />
            <Route path="dashboard" element={<h2>Dashboard</h2>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
