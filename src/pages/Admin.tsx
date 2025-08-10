import { useAuth } from '../store/auth'

export default function AdminPage() {
  const user = useAuth(s => s.user)
  const isAuthed = useAuth(s => s.isAuthenticated)
  const logout = useAuth(s => s.logout)

  if (!isAuthed || user?.role !== 'admin') {
    return <div className="card-surface p-4">Access denied. Admins only.</div>
  }

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">System monitoring (mock)</div>
      <div className="card-surface p-4">User management (mock)</div>
      <div className="card-surface p-4">Content management (mock)</div>
      <button className="rounded-lg bg-white/10 px-3 py-2" onClick={logout}>Logout</button>
    </div>
  )
}


