// =====================================
// ARQUIVO: src/App.tsx
// =====================================

import React from "react";
import { TemaProvider } from "./context/TemaContext";
import { Tela } from "./components/Tela";

// =====================================
// O TemaProvider envolve a tela inteira
// =====================================
export default function App() {
  return (
    <TemaProvider>
      <Tela />
    </TemaProvider>
  );
}