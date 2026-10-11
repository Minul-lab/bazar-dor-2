# 🛒 বাজার দর (BazarDor)

> প্রয়োজনীয় পণ্যের দাম এক নজরে।

**BazarDor** is a daily market price tracker for Bangladesh. It shows today's prices of everyday essentials such as rice, pulses, oil, vegetables, fish, meat, eggs and spices. Users can see which prices rose or fell, browse by category, sort by price, and open a product to compare prices across different bazaars and divisions.

🔗 **Live Site:** https://bazar-dor-2-avum.vercel.app/
📦 **GitHub Repository:** `https://github.com/Minul-lab/bazar-dor-2`

---

## ✨ Key Features

1. **Live price ticker** – an infinitely scrolling marquee under the navbar showing each product's emoji, name, price and ▲/▼ change percentage.
2. **Daily price movers** – dedicated sections for the top 6 products whose prices rose (▲) and the top 6 whose prices fell (▼) today.
3. **Browse and sort by category** – category pages with a sort control (Default, Price: Low to High, Price: High to Low), skeleton loading, and a friendly 404 for invalid categories.
4. **Market-wise price details** – each product page shows the minimum, maximum and average price, plus a table of prices in different bazaars and divisions. This page is protected and needs login.
5. **Authentication with BetterAuth** – email/password sign up and sign in, plus Google and GitHub social login, with toast notifications for success and errors.
6. **Profile management** – a profile page where logged-in users can view their info, update their name, and sign out.
7. **Fully responsive** – works on mobile, tablet and desktop, including the navbar, ticker, hero and product grids.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | UI and page routing |
| [React](https://react.dev/) | Component-based UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) | Styling and responsiveness |
| [BetterAuth](https://better-auth.com/) | Authentication (email/password, Google, GitHub) |
| [MongoDB](https://www.mongodb.com/) | Database for users and sessions |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [React Marquee Text](https://www.npmjs.com/package/react-marquee-text) | Price ticker |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🌐 API

Data comes from the BazarDor API:

```
Base URL: https://api.abcz.workers.dev/api/bazardor

/products            → all products
/products?category=  → filter by category
/products/:id        → single product
/categories          → all categories
/categories/:slug    → single category
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd bazar-dor-2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

For social login, add these callback URLs in the Google and GitHub developer consoles:

- `http://localhost:3000/api/auth/callback/google`
- `http://localhost:3000/api/auth/callback/github`
- the same two paths on your deployed domain

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/   # BetterAuth route handler
│   ├── category/[id]/       # Category page
│   ├── product/[id]/        # Product details (protected)
│   ├── profile/             # User profile (protected)
│   ├── sign-in/             # Sign in page
│   ├── sign-up/             # Sign up page
│   ├── components/          # Navbar, Hero, Footer, product cards, etc.
│   └── not-found.js         # Custom 404 page
├── lib/
│   ├── auth.ts              # BetterAuth server config
│   └── auth-client.ts       # BetterAuth client
└── proxy.ts                 # Route protection
```

---

## 👤 Author

**MohaiMinul** – Assignment 07, B14

