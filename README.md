
# BVesto

BVesto is a next-generation investment dashboard built with **React** and **TypeScript**. It provides a modern, responsive interface for tracking market news, portfolio performance, and investment analytics.

<<<<<<< HEAD



=======
## Demo

![BVesto Dashboard Screenshot](./screenshots/dashboard.png)

> _Live market data and news feed in action:_

![BVesto Demo GIF](./screenshots/demo.gif)
>>>>>>> 8b0491b (Add vite as a dev dependency)

## Features

- 📈 **Dashboard:** Visualize your portfolio allocation and performance with interactive charts.
- 📰 **News Feed:** Stay updated with the latest market headlines (mock data included).
- 💼 **Watchlist & Orders:** Track your favorite assets and manage transactions.
- ⚡ **Modern Stack:** Built with React, TypeScript, Tailwind CSS, and Vite for fast development and performance.

<<<<<<< HEAD

=======
## Example: Markets Page

```tsx
// src/pages/Markets.tsx
import { useEffect, useState } from "react";

type Ticker = { symbol: string; price: number; change: number };

export default function MarketsPage() {
  const [tickers, setTickers] = useState<Ticker[]>([
    { symbol: "AAPL", price: 220.12, change: 0.54 },
    { symbol: "MSFT", price: 421.44, change: -0.21 },
    { symbol: "NVDA", price: 124.33, change: 1.42 },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => ({
          ...t,
          price: +(t.price * (1 + (Math.random() - 0.5) / 500)).toFixed(2),
          change: +((Math.random() - 0.5) * 2).toFixed(2),
        }))
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card-surface p-4">
      <div className="text-lg font-semibold mb-3">Live Market Data (Mock)</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tickers.map((t) => (
          <div key={t.symbol} className="rounded-xl bg-white/5 p-3">
            <div className="text-white/70 text-sm">{t.symbol}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-semibold">${t.price}</div>
              <div
                className={t.change >= 0 ? "text-[#22ff8b]" : "text-red-400"}
              >
                {t.change >= 0 ? "+" : ""}
                {t.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```
>>>>>>> 8b0491b (Add vite as a dev dependency)

## Getting Started

1. **Clone the repository:**

   ```
   git clone https://github.com/gatera900/BVesto.git
   cd BVesto
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

<<<<<<< HEAD
<<<<<<< HEAD
=======
## Deployment (Vercel)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Vercel will auto-detect the React/Vite setup.
4. Set the build command to `vite build` and output directory to `dist` if prompted.
5. Click **Deploy** and get your live URL!

>>>>>>> 8b0491b (Add vite as a dev dependency)
=======
>>>>>>> d97dd08 (Remove initial login and code complete screen)
## License

MIT

---

<<<<<<< HEAD
<<<<<<< HEAD
_Built with using React, TypeScript, and Vite._

An investment system built with react typescript
<img width="1884" height="799" alt="Screenshot 2025-08-10 231310" src="https://github.com/user-attachments/assets/b1b7e80b-6798-4b33-ac21-758a93fee00f" />
<img width="1853" height="584" alt="Screenshot 2025-08-10 231324" src="https://github.com/user-attachments/assets/85df2e19-d40b-4ab2-9750-96a7c7cc2787" />
=======
_Built with ❤️ using React, TypeScript, and Vite._
>>>>>>> 8b0491b (Add vite as a dev dependency)
=======
_Built with using React, TypeScript, and Vite._
>>>>>>> d97dd08 (Remove initial login and code complete screen)
