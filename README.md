# 💊 Online Medicine Donation Platform

## 📌 Project Overview
The Online Medicine Donation Platform is a full-stack web application designed to connect individual and organizational donors with NGOs and hospitals in need of surplus medicines.

It helps reduce wastage by enabling secure medicine donations, real-time inventory updates, and role-based access for different users (Admins, NGOs, Donors, Hospitals).

This project was developed as part of **CDAC Project Group 6**.

## 📱 Application Preview

### 🔐 Login & Authentication
*Multi-role login system with intuitive user interface*
<img width="1276" height="578" alt="1pp" src="https://github.com/user-attachments/assets/28e89ed2-419d-41e2-823f-768ea6f96334" />

### 📊 Dashboard Views

#### Admin Dashboard - Complete Platform Overview
*Monitor platform performance, manage users, and track all activities*
<img width="1265" height="571" alt="5p" src="https://github.com/user-attachments/assets/ebd121f3-ec3f-40ca-9ab2-2cda8fc9eabb" />

#### Donor Dashboard - Track Your Impact
*View donation history and see lives impacted by your contributions*
<img width="1260" height="565" alt="6p" src="https://github.com/user-attachments/assets/7b1c4994-4441-4957-8f1c-91b1e9d965ea" />

#### Hospital Dashboard - Request & Manage Medicines
*Browse available medicines and manage hospital requests efficiently*
<img width="1258" height="561" alt="3p" src="https://github.com/user-attachments/assets/46479075-67fc-4bf3-a1a9-3e11f08ddb1f" />

#### NGO Dashboard - Community Health Management
*Create requests and connect with donors to help communities*
<img width="1270" height="577" alt="4p" src="https://github.com/user-attachments/assets/238591b0-fa78-43b9-9836-177904c0d199" />

### 💊 Medicine Management System
*Comprehensive medicine inventory with verification and tracking*
<img width="1288" height="586" alt="2p" src="https://github.com/user-attachments/assets/2dd4b607-24bc-4c01-850a-b387f2ffdb26" />


## 🕒 Project Duration
- **Timeline**: 2 Months
- **Platform**: Visual Studio, GitHub

## 🚀 Features
- 👤 **User Authentication & Role-Based Access**
- 💊 **Medicine Donation Management**
- 🏥 **NGO & Hospital Requests**
- 📊 **Donation Tracking & Real-Time Inventory**
- 🔒 **Secure Login with JWT Authentication**
- 🌐 **RESTful APIs for communication**
- ✅ **Thoroughly tested using Postman**

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js** with Vite
- **Tailwind CSS** with shadcn/ui components
- **Context API** for state management

### 🔹 Backend
- **.NET 8 Core** (C#)
- **ASP.NET Core Web API**
- **Entity Framework Core**

### 🔹 Database
- **SQL Server** (MedDB)

### 🔹 Tools & Development
- **Visual Studio** / **VS Code**
- **GitHub** (Version Control)
- **Postman** (API Testing)

## 📁 Project Structure

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

## ⚙️ Setup Instructions

### Prerequisites
- **.NET 8 SDK**
- **Node.js** (v16 or higher)
- **SQL Server** (LocalDB or full version)
- **Git**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/cdacprojectgroup6/Online-Medicine-Donation.git
cd Online-Medicine-Donation
```

### 2️⃣ Setup Database
1. Open SQL Server Management Studio
2. Import the SQL scripts from the `MedDB/` folder
3. Update connection string in `appsettings.json` if needed

### 3️⃣ Run the Backend
```bash
cd "Online Medicine Donation/Solution1 - backend/OnlineMedDonation"
dotnet restore
dotnet run
```

### 4️⃣ Run the Frontend
```bash
cd "Online Medicine Donation/Onlinemd - frontend"
npm install
npm run dev
```

### 5️⃣ Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000 (or check console output)

## 🔐 Default User Roles
The system supports four user roles:
- **Admin**: Full system access and management
- **Donor**: Can donate medicines and track donations
- **Hospital**: Can request medicines and manage inventory
- **NGO**: Can request medicines and coordinate with donors

## 🧪 API Testing
Use the provided Postman collection or test endpoints directly:
- Authentication: `/api/auth/login`
- Medicines: `/api/medicines`
- Donations: `/api/donations`
- Requests: `/api/requests`

## 👥 Contributors
**Group 6 – CDAC Project Team**
- Susheel Tiwari
- Ajinkya Pruthviraj Borse
- Prem Ragade
- Ayesha Sayyad
- Sharvari Waghumbare

## 📜 License
This project is developed for academic purposes as part of CDAC curriculum.

---
**Note**: This is an educational project demonstrating full-stack development skills with modern web technologies.
