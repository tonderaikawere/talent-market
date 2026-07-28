# Talent Market - Professional Freelancer & Job Marketplace

Talent Market is a fully functional web application designed for professional networking and job applications. It features a responsive React single-page application (SPA) styled with custom Material-UI (MUI) themes, coupled with a Node.js/Express backend API.

## Features

- **Dynamic Profile Matching**: Fetches developer profiles and job listings in real-time from the backend server.
- **Real-Time Client-Side Search**: Instantly filters talent profiles in the UI using search bar keywords.
- **Responsive Active Job Sidebar**: Interactive jobs list that scales gracefully across mobile and desktop devices.
- **Application Submission System**: Modally-driven applying system with email and name form validation.
- **Unique Imagery**: Generates custom avatar designs and company logos to simulate a populated professional network.
- **Premium Dark Aesthetics**: Styled with high-contrast slate-blue palettes, custom scrollbars, and Outfit font typography.

---

## Tech Stack

- **Frontend**: React (v18), Material-UI (v5), React Router (v6), Axios
- **Backend**: Node.js, Express, CORS

---

## Getting Started

Follow the steps below to set up and run the application locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

---

### Step 1: Start the Backend Server

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   node server.js
   ```
   *The backend will be running on [http://localhost:5000](http://localhost:5000)*

---

### Step 2: Start the Frontend App

1. Open a new terminal window/tab and navigate to the `profile-cards` directory:
   ```bash
   cd profile-cards
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Run the React development server:
   ```bash
   npm start
   ```
   *The web application will open automatically on [http://localhost:3000](http://localhost:3000)*

---

## Directory Structure

```text
talent-market/
├── backend/               # Express backend application
│   ├── package.json
│   └── server.js          # API Server configuration & mock database
├── profile-cards/         # React SPA frontend application
│   ├── public/
│   │   └── images/        # High-quality avatars and company logos
│   ├── src/
│   │   ├── components/    # Reusable React UI components
│   │   ├── App.js         # Navigation routes & overall layout
│   │   └── index.css      # Core dark-theme styles & global fonts
│   └── package.json
├── CODE_OF_CONDUCT.md     # Community guidelines
├── CONTRIBUTING.md        # Guidelines for contributions
├── LICENSE                # MIT License
├── ROADMAP.md             # Development goals
└── SECURITY.md            # Security vulnerability report procedures
```

---

## License

This project is licensed under the [MIT License](LICENSE).
