# 💊 Online Medicine Donation Platform

# 📌 Project Overview
The **Online Medicine Donation Platform** is a full-stack web application designed to connect individual and organizational donors with NGOs and hospitals in need of surplus medicines.  

It helps reduce wastage by enabling secure medicine donations, real-time inventory updates, and role-based access for different users (Admins, NGOs, Donors).  

This project was developed as part of CDAC Project Group 6.

---

🕒 Project Duration
- Timeline: 2 Months  
- Platform: Visual Studio, GitHub  

---

🚀 Features
- 👤 User Authentication & Role-Based Access
- 💊 Medicine Donation Management
- 🏥 NGO & Hospital Requests
- 📊 Donation Tracking & Real-Time Inventory
- 🔒 Secure Login with Session Management
- 🌐 REST & GraphQL APIs for communication
- ⚡ Performance Boost with Redis Caching
- 🐳 Docker & Kubernetes for Deployment on AWS
- ✅ Thoroughly tested using Postman

---

🛠️ Tech Stack

🔹 Frontend
- React.js  
- Redux  
- Tailwind CSS  

🔹 Backend
- .NET Core (C#)  
- Express.js  

🔹 Database
- MySQL (MedDB)  
- Redis (for caching)  

🔹 Tools & Deployment
- Docker  
- Kubernetes  
- AWS  
- GitHub (Version Control)  
- Postman (API Testing)  
- Visual Studio  

---


# Online Medicine Donation - Project Structure

```
OnlineMedicineDonation/
├── 📁 MedDB/
│   ├── databaseScript.sql
│   └── MedDB.sql
│
├── 📁 Online Medicine Donation/
│   ├── 📁 Onlinemd - frontend/
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── tailwind.config.js
│   │   ├── 📁 src/
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   │   ├── 📁 components/
│   │   │   │   ├── DashboardLayout.jsx
│   │   │   │   ├── ConnectionStatus.jsx
│   │   │   │   └── 📁 ui/ (shadcn/ui components)
│   │   │   ├── 📁 contexts/
│   │   │   │   └── AuthContext.jsx
│   │   │   ├── 📁 pages/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── DonorDashboard.jsx
│   │   │   │   ├── HospitalDashboard.jsx
│   │   │   │   ├── NGODashboard.jsx
│   │   │   │   ├── MedicinePage.jsx
│   │   │   │   ├── DonationList.jsx
│   │   │   │   ├── RequestList.jsx
│   │   │   │   └── 📁 signup/
│   │   │   │       ├── AdminSignup.jsx
│   │   │   │       ├── DonorSignup.jsx
│   │   │   │       ├── HospitalSignup.jsx
│   │   │   │       └── NgoSignup.jsx
│   │   │   └── 📁 services/
│   │   │       ├── adminService.js
│   │   │       ├── donationService.js
│   │   │       ├── hospitalService.js
│   │   │       ├── medicineService.js
│   │   │       ├── ngoService.js
│   │   │       ├── requestService.js
│   │   │       └── userService.js
│   │   └── 📁 dist/ (build output)
│   │
│   └── 📁 Solution1 - backend/
│       └── 📁 OnlineMedDonation/
│           ├── Program.cs
│           ├── appsettings.json
│           ├── OnlineMedDonation.csproj
│           ├── 📁 Controllers/
│           │   ├── AuthController.cs
│           │   ├── AdminAuthController.cs
│           │   ├── AdminsController.cs
│           │   ├── DonationsController.cs
│           │   ├── HospitalsController.cs
│           │   ├── MedicinesController.cs
│           │   ├── NgoesController.cs
│           │   ├── RequestsController.cs
│           │   ├── UsersController.cs
│           │   └── AnalyticsController.cs
│           ├── 📁 Models/
│           │   ├── User.cs
│           │   ├── Admin.cs
│           │   ├── Hospital.cs
│           │   ├── Ngo.cs
│           │   ├── Medicine.cs
│           │   ├── Donation.cs
│           │   ├── Request.cs
│           │   └── MedDonationContext.cs
│           ├── 📁 DTOs/
│           │   ├── LoginDto.cs
│           │   ├── RegisterDto.cs
│           │   └── ChangePasswordDto.cs
│           └── 📁 Views/ (MVC views)
│
├── GROUP-6.doc
├── OMDppt.pptx
└── README.md
```

---

## ⚙️ Setup Instructions

1️⃣ Clone the Repository
bash
git clone https://github.com/cdacprojectgroup6/Online-Medicine-Donation.git
cd Online-Medicine-Donation
2️⃣ Setup Database
Import the SQL scripts from the MedDB/ folder into your MySQL server.

3️⃣ Run the Backend
bash
cd "Online Medicine Donation/Solution1 - backend"
dotnet restore
dotnet run

4️⃣ Run the Frontend
bash
cd "Online Medicine Donation/Onlinemd - frontend"
npm install
npm start

5️⃣ Access the Application
Frontend: http://localhost:5173

Backend API: http://localhost:44344

## 👥 Contributors
Group 6 – CDAC Project Team
1. Susheel Tiwari
2. Ajinkya Pruthviraj Borse
3. Prem Ragade
4. Ayesha Sayyad
5. Sharwari Waghumbare

📜 License
This project is developed for academic purposes.
