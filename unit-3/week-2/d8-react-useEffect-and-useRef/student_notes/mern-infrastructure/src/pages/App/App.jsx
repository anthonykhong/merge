import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route
            path="/orders/new"
            element={<NewOrderPage user={user} setUser={setUser} />}
          />
          <Route
            path="/orders"
            element={<OrderHistoryPage user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
