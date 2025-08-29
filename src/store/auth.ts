import { create } from "zustand";

type Role = "user" | "admin";

type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
  twoFactorEnabled: boolean;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  enable2FA: () => void;
  verify2FA: (code: string) => Promise<boolean>;
};

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  async login(email: string, _password: string) {
    // Mock login
    const fakeToken = "demo-token";
    const user: User = {
      id: "1",
      email,
      name: "Alex Carter",
      role: "user",
      twoFactorEnabled: true,
    };
    set({ user, token: fakeToken, isAuthenticated: !user.twoFactorEnabled });
  },
  logout() {
    set({ user: null, token: null, isAuthenticated: false });
  },
  enable2FA() {
    const u = get().user;
    if (u) set({ user: { ...u, twoFactorEnabled: true } });
  },
  async verify2FA(code: string) {
    // Accept any 6-digit code in mock
    const ok = /^\d{6}$/.test(code);
    if (ok) set({ isAuthenticated: true });
    return ok;
  },
}));
