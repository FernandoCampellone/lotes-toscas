import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { LoginForm } from "./login";
import { RegisterForm } from "./register";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const { isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-gray-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold">Logo</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Acerca
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Lotes
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contactos
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span>Bienvenido, {user?.name}</span>
                  <Button
                    variant="secondary"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Cerrar sesión
                  </Button>
                </div>
              ) : (
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="secondary">Login / Registro</Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-gray-800 text-gray-100"
                  >
                    <nav className="flex flex-col space-y-4 mt-4">
                      <div className="flex justify-between mb-4">
                        <Button
                          variant={showLogin ? "secondary" : "ghost"}
                          onClick={() => setShowLogin(true)}
                        >
                          Login
                        </Button>
                        <Button
                          variant={!showLogin ? "secondary" : "ghost"}
                          onClick={() => setShowLogin(false)}
                        >
                          Registro
                        </Button>
                      </div>
                      {showLogin ? <LoginForm /> : <RegisterForm />}
                    </nav>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16">{/* Contenido de la página */}</div>
    </>
  );
}
