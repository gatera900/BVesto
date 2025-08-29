import { useState } from "react";
import { useAuth } from "../store/auth";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function AuthPage() {
  const login = useAuth((s) => s.login);
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  const verify2FA = useAuth((s) => s.verify2FA);
  const user = useAuth((s) => s.user);
  const [email, setEmail] = useState("alex@example.com");
  const [password, setPassword] = useState("password");
  const [code, setCode] = useState("");

  const onSubmit = async () => {
    await login(email, password);
  };

  const onVerify = async () => {
    await verify2FA(code);
  };

  if (isAuthenticated) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur">
      <div className="w-full max-w-md card-surface p-6">
        {!user || !user.twoFactorEnabled ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <div className="space-y-3">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Button onClick={onSubmit} className="w-full">
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3">
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
              />
              <Button onClick={onVerify} className="w-full">
                Verify
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
