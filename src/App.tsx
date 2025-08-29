import { useMemo, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import SummaryCard from "./components/dashboard/SummaryCard";
import FundList from "./components/dashboard/FundList";
import HealthCard from "./components/dashboard/HealthCard";
import RightPane from "./components/layout/RightPane";
import fundsData from "./data/funds.json";
import perf from "./data/performance.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketsPage from "./pages/Markets";
import WatchlistPage from "./pages/Watchlist";
import TransactionsPage from "./pages/Transactions";
import AdminPage from "./pages/Admin";

import { useAuth } from "./store/auth";
import AllocationCard from "./components/dashboard/AllocationCard";
import PerformanceSection from "./components/dashboard/PerformanceSection";
import RecentTransactions from "./components/dashboard/RecentTransactions";
import OrdersPage from "./pages/Orders";
import NewsPage from "./pages/News";
import AlertsPage from "./pages/Alerts";
import ToolsPage from "./pages/Tools";

export type Fund = (typeof fundsData)[number];

export default function App() {
  const [selectedId, setSelectedId] = useState<string>(fundsData[0]?.id);
  const selectedFund = useMemo(
    () => fundsData.find((f) => f.id === selectedId) ?? fundsData[0],
    [selectedId]
  );
  const isAuthenticated = useAuth((s) => s.isAuthenticated);

  return (
    <BrowserRouter>
      <div className="min-h-screen grid grid-cols-12">
        <aside className="col-span-12 md:col-span-2 xl:col-span-2 border-r border-white/10">
          <Sidebar />
        </aside>

        <main className="col-span-12 md:col-span-10 xl:col-span-10 p-4 md:p-6 space-y-6">
          <Topbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-12 gap-6">
                  <section className="col-span-12 xl:col-span-8 space-y-6">
                    <SummaryCard data={perf} />
                    <PerformanceSection />
                    <AllocationCard />
                    <FundList
                      funds={fundsData}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />
                  </section>
                  <section className="col-span-12 xl:col-span-4 space-y-6">
                    <HealthCard />
                    <RecentTransactions />
                    <RightPane fund={selectedFund} />
                  </section>
                </div>
              }
            />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
