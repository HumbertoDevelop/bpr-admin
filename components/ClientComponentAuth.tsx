"use client";
import { AuthProvider } from "Providers/AuthProvider";
import React from "react";
// import node module libraries
import { Container } from "react-bootstrap";
export function ClientComponentAuth({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Container className="d-flex flex-column">{children}</Container>
    </AuthProvider>
  );
}
