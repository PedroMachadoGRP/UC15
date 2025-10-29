// =====================================
// ARQUIVO: src/App.tsx
// =====================================

import React from "react";
import { UserProvider } from "./context/UserContext";
import { TelaUsuario } from "./components/TelaUser";

export default function App() {
  return (
    <UserProvider>
      <TelaUsuario />
    </UserProvider>
  );
}