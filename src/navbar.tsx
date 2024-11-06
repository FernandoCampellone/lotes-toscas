import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

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
              <Button variant="secondary">Login</Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gray-800 text-gray-100"
                >
                  <nav className="flex flex-col space-y-4 mt-4">
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
                      Servicios
                    </a>
                    <a
                      href="#"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contacto
                    </a>
                    <Button variant="secondary">Iniciar sesión</Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16">{/* Contenido de la página */}</div>
    </>
  );
}
