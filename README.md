# SecureAuth Web Application

SecureAuth is a modern, responsive full-stack web application providing enterprise-grade authentication and security solutions. Built with React and Next.js, styled with Tailwind CSS, it features a clean UI, responsive design, and robust user authentication with secure credential management.

---
## 🌐 Live Demo

🚀 Check out the live deployed project:

🔗 [https://secureauth.vercel.app](https://secureauth.vercel.app)


## Live Features

### 🔐 Authentication

- **Username / Email + Password Login:** Users can log in securely using their username or email with password authentication.
- **Google OAuth Sign-In:** Quick and secure login with Google using NextAuth.js.
- **JWT Tokens:** JSON Web Tokens are used to verify and protect user sessions on private routes.

### 🛡️ Security

- **bcrypt Password Hashing:** All passwords are securely hashed with bcrypt before storing in the database.
- **OTP Verification:** Signup process includes OTP verification sent via email to validate user accounts.
- **Protected Routes:** Middleware ensures that only authenticated users can access private pages.

### 💻 UI

- **Responsive Design:** Fully responsive layout built with Tailwind CSS for seamless experience on all devices.
- **Dark Mode Support:** Partial dark mode styling for comfortable viewing in all environments.

### 🔗 Backend

- **Firebase Firestore:** Used as the backend database to store user data securely.
- **NextAuth.js Session Management:** Handles authentication, OAuth integrations, and user sessions efficiently.

---

## 🛠️ Tech Stack

- React 18 / Next.js 13+
- Tailwind CSS for styling
- NextAuth.js for authentication and OAuth integration (Google Sign-In)
- JSON Web Tokens (JWT) for session and route protection
- bcrypt for secure password hashing
- Firebase Firestore for backend database and user management
- Lucide React icons for scalable SVG icons
- JavaScript / JSX

---

## 🔄 Authentication Flow Highlights

- **Signup:** Users create accounts by entering their credentials, and an OTP is sent to their email for verification before the account is activated.

- **Login:** Supports login using either username/email with password (hashed via bcrypt) or through Google OAuth using NextAuth.js for seamless authentication.

- **Protected Routes:** Middleware integrated with JWT token verification ensures only authenticated users can access certain pages and APIs.

- **Password Reset:** Users can request password reset emails and securely change their passwords via OTP or token-based reset flows.

- **Session Management:** NextAuth manages user sessions, JWT tokens, and integrates smoothly with the Firebase backend for authentication and authorization.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed and set up:

- **Node.js** (v16 or later recommended) ⚙️  
  [Download Node.js](https://nodejs.org/)

- **npm or yarn** package manager 📦  
  npm is included with Node.js, or install [Yarn](https://yarnpkg.com/) if preferred.

- **Firebase Project with Firestore Enabled** 🔥  
  - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
  - Enable **Firestore Database** in the Firebase console.

- **Google OAuth Credentials for NextAuth Setup** 🔑  
  - Go to [Google Cloud Console](https://console.cloud.google.com/).  
  - Create OAuth 2.0 credentials (Client ID and Secret) and add your authorized redirect URI, e.g., `http://localhost:3000/api/auth/callback/google`.

## 🚀 Deployment

### **Vercel (Recommended)**

Deploying on [Vercel](https://vercel.com/) is seamless for Next.js applications:

1. **Push your code** to GitHub.
2. **Connect your repository** to Vercel.
3. **Add environment variables** in the Vercel dashboard under **Project Settings → Environment Variables**.
4. **Deploy automatically** on each push to your GitHub repository.

---

### **Other Platforms**

- **Netlify:** 🌐 Deploy via Git integration. [Netlify Docs](https://docs.netlify.com/)
- **Heroku:** ☁️ Use Node.js buildpacks for deployment. [Heroku Docs](https://devcenter.heroku.com/categories/nodejs-support)
- **AWS:** 🖥️ Deploy using [AWS Amplify](https://aws.amazon.com/amplify/) for full-stack apps or [EC2](https://aws.amazon.com/ec2/) for server setup.

---

## 🔒 Built Securely

Built securely with ❤️ by [**Saraswati Adkine**](https://github.com/saru0213)

🛡️ Empowering digital security with **SecureAuth**

---
