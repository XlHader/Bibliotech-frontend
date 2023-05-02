# BIBLIOTECH

## React Frontend

This is the frontend of the Bibliotech application, built with VITE and React. To use it, you need to have the Laravel backend running. The backend repository can be found at: https://github.com/XlHader/Bibliotech.

After running the Laravel migrations, you can use the following test user to log in:

| Email | Password |
| ----- | -------- |
|admin@example.com|Admin123!|

## Installation 

### 1. Clone the Git Repository

To get started with the installation of the application, you will first need to clone the Git repository. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/XlHader/Bibliotech-frontend
```

### 2. Environment Variables

You will need to create an .env.local file in the root of the project, and set the following environment variable:

```bash
VITE_BASE_URL=http://localhost:8000
# ONLY USE VITE_ PREFIX VARIABLES
# Variables that do not start with the prefix "VITE_" will not be recognized by Vite
```

### 3. Install Dependencies

You will need to have Node.js and npm installed on your machine. You can download Node.js from the following link: https://nodejs.org/en/download/

Once you have Node.js installed, you can install the dependencies by running the following command in your terminal:

```bash
npm install
```

### 4. Run the Application

You can run the application by running the following command in your terminal:

```bash
npm run dev
```

The application will be running on http://localhost:5173

### 5. Build

You can build the application by running the following command in your terminal:

```bash
npm run build
```

### Usage

Once the application is running, you can interact with the Bibliotech API by using the interface provided by the frontend. 
