# Project name

Curlafhair

## Description

An Ecommerce Web Application for Curalfhair using HTML, CSS, TailwindCSS, JavaScript, Laravel and PHP

---

## Folder Structure

- `/backend` - Laravel backend code
- `/frontend` - Frontend files (HTML, CSS, JavaScript, etc.)

---

## Installation & Setup

### Prerequisites

- **Node.js** (for frontend dependencies)
- **Composer** (for Laravel backend)
- **PHP** (for Laravel backend)
- **MySQL/PostgreSQL** (for database)

---

### Backend Setup

1. Go to the `backend/` directory:

   ```bash
   cd backend

   ```

2. Install Dependencies

   ```bash
   composer install

   ```

3. Copy .env.example to .env and update with your database and app configuration

   ```
   cp .env.example .env

   ```

4. generate application key

   ```bash
   php artisan key:generate

   ```

5. Run migrations (make sure your database is set up):
   ```bash
   php artisan migrate
   ```
6. Serve the application
   ```bash
   php artisan serve
   ```

### Backend Setup

1. Go to the `backend/` directory:

   ```bash
   cd frontend

   ```

2. Install dependencies

   ```bash
   npm install

   ```

3. Build the frontend tailwindcss

   ```bash
   npx tailwindcss -i ./styles.css -o ./output.css --watch

   ```

4. Open the HTML files (e.g., frontend/index.html) in your browser
