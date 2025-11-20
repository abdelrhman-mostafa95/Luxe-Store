# LuxeStore - Premium E-commerce Experience

A modern, full-featured e-commerce application built with Next.js, featuring a premium dark UI, comprehensive product management, and a seamless shopping experience.

![LuxeStore Hero](public/readme-assets/landing-hero.png)

## 🚀 Features

### Public Storefront
*   **Modern Landing Page**: Captivating hero section, features highlight, and newsletter signup.
*   **Product Collection**: Grid view of premium products with hover effects.
*   **Shopping Cart**: Persistent guest cart with slide-out sidebar, managed via Context API and LocalStorage.
*   **Checkout Flow**: Complete checkout process with order summary and shipping form.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

### Admin Dashboard
*   **Secure Authentication**: Cookie-based admin protection.
*   **Product Management**: Full CRUD (Create, Read, Update, Delete) capabilities.
*   **Modern UI**: Sleek, dark-themed dashboard with analytics-style layout.
*   **Real-time Updates**: Instant feedback on product changes.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: CSS Modules with CSS Variables (Premium Dark Theme)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Data**: Local JSON-based persistence (Mock Database)
*   **State Management**: React Context API

## 📸 Screenshots

### Shopping Experience
| Product Grid | Cart Sidebar |
|:---:|:---:|
| ![Product Grid](public/readme-assets/product-grid.png) | ![Cart Sidebar](public/readme-assets/cart-sidebar.png) |

### Checkout Process
![Checkout Page](public/readme-assets/checkout-page.png)

### Admin Management
![Admin Panel](public/readme-assets/admin-panel.png)

## 🏁 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/abdelrhman-mostafa95/Luxe-Store.git
    cd Luxe-Store
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the application**
    *   Storefront: [http://localhost:3000](http://localhost:3000)
    *   Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)
        *   *Note: Admin access is currently open for demonstration or configured via `src/lib/auth.js`.*

## 📂 Project Structure

```
src/
├── app/
│   ├── admin/      # Admin dashboard routes
│   ├── api/        # API routes for products
│   ├── checkout/   # Checkout flow
│   └── page.js     # Landing page
├── components/     # Reusable UI components
├── context/        # Cart state management
└── lib/            # Utilities (DB, Auth)
data/
└── products.json   # Mock database file
```

## 🎨 Design System

The project uses a curated dark theme with the following core variables:
*   **Background**: Deep matte black (`#0a0a0a`)
*   **Cards**: Slightly lighter surface (`#111`)
*   **Accent**: Clean White (`#fff`) for primary actions
*   **Typography**: Inter/Sans-serif stack for modern readability

---

Built with ❤️ by [Abdelrahman Mostafa](https://github.com/abdelrhman-mostafa95)
