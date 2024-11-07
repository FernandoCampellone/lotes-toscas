// LoginForm.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./components/ui/button";

export function LoginForm() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="space-y-4 w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      <Button onClick={() => loginWithRedirect()} className="w-full">
        Iniciar sesión con Auth0
      </Button>
    </div>
  );
}
