## Getting Started

First, run the development server:
=======
Here’s the complete **English version** of the `README.md` for your **Hotel Booking App** using **Next.js**, **Prisma**, **TypeScript**, and **ShadCN**:

---

````markdown
# 🏨 Hotel Booking App

A modern hotel booking web application built with **Next.js**, **Prisma**, **TypeScript**, and **ShadCN UI**.

## 📄 Description

**Hotel Booking App** is a full-featured web platform that allows users to search, book, and manage hotel room reservations. It is built using a modern tech stack and provides a clean, responsive UI.

### 🎯 Key Features

- 🔐 User authentication (login & register)
- 🏨 Browse hotels with filters (location, price, rating)
- 🛏️ Hotel detail pages and real-time room availability
- 📅 Book rooms by selecting check-in and check-out dates
- 📊 Admin dashboard for managing hotels, rooms, and bookings
- 💅 Beautiful, responsive UI with ShadCN and Tailwind CSS

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for web apps
- [Prisma](https://www.prisma.io/) – Modern ORM for database management
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- [ShadCN UI](https://ui.shadcn.dev/) – Elegant UI components
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [PostgreSQL](https://www.postgresql.org/) – Default database (can be replaced with MySQL or SQLite)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/username/booking-hotel.git
cd booking-hotel
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/bookinghotel"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL=http://localhost:3000
```

### 4. Prisma Setup

Generate Prisma Client and apply the initial migration:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the Development Server
>>>>>>> 7cac5bad6015d111f022660996498d8d921d8f0f

```bash
npm run dev
# or
yarn dev
<<<<<<< HEAD
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
```

### 6. Open in Browser

Go to: [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
.
├── prisma/
│   └── schema.prisma          # Database schema
├── app/
│   ├── page.tsx               # Home page
│   ├── layout.tsx              # Hotel layout
│   ├── booking/               # Booking pages & API
├── components/
│   └── ui/                    # Custom ShadCN components
├── lib/                       # Utility and helper functions
├── types/                     # TypeScript types
├── public/                    # Public files (images, icons, etc.)
├── styles/                    # Additional styling
├── .env                       # Environment variables
└── README.md
```

## 💡 Future Enhancements

* Online payment integration (Midtrans, Stripe, Xendit)
* Email notifications for booking confirmation
* User reviews & rating system
* Wishlist/favorites for hotels

## 📦 Deployment

This app can be deployed to platforms like:

* [Vercel](https://vercel.com/)
* [Railway](https://railway.app/)
* [Render](https://render.com/)
* [Supabase + Vercel](https://supabase.com/)

## 🤝 Contribution

Contributions are welcome! Feel free to fork this repo and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

```

> ✅ Replace `https://github.com/username/booking-hotel.git` with your actual GitHub repository URL.  
> ✅ Let me know if you want help setting up the `schema.prisma`, auth, or page layout structure too!
```
>>>>>>> 7cac5bad6015d111f022660996498d8d921d8f0f
