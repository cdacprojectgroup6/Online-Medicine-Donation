// Admin Service - MySQL Integration
// This file demonstrates how to integrate with MySQL database for admin CRUD operations

<<<<<<< HEAD
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:44344/api';
=======
import axios from 'axios';

const API_BASE_URL = 'https://medkindbackend.azurewebsites.net/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);
>>>>>>> e494192 (Final Push)

export const adminService = {
  // Admin Signup
  async adminSignup(adminData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: adminData.Name,
          Email: adminData.Email,
          Password: adminData.Password,
          Role: 'admin'
        }),
      });
      if (!response.ok) {
        throw new Error('Admin signup failed');
      }
      return await response.json();
=======
      const response = await api.post('/admin/signup', {
        Name: adminData.Name,
        Email: adminData.Email,
        Password: adminData.Password,
        Role: 'admin'
      });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error in admin signup:', error);
      throw error;
    }
  },

  // Admin Login
  async adminLogin(credentials) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: credentials.Email,
          Password: credentials.Password
        }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return await response.json();
=======
      const response = await api.post('/admin/login', {
        Email: credentials.Email,
        Password: credentials.Password
      });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error in admin login:', error);
      throw error;
    }
  },

  // Forgot Password - Send OTP
  async forgotPassword(email) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email }),
      });
      if (!response.ok) {
        throw new Error('Failed to send reset code');
      }
      return await response.json();
=======
      const response = await api.post('/admin/forgot-password', { Email: email });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error in forgot password:', error);
      throw error;
    }
  },

  // Verify OTP
  async verifyOTP(email, otp) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          Email: email,
          OTP: otp 
        }),
      });
      if (!response.ok) {
        throw new Error('Invalid OTP');
      }
      return await response.json();
=======
      const response = await api.post('/admin/verify-otp', { 
        Email: email,
        OTP: otp 
      });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error in OTP verification:', error);
      throw error;
    }
  },

  // Reset Password
  async resetPassword(email, otp, newPassword) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          Email: email,
          OTP: otp,
          NewPassword: newPassword 
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to reset password');
      }
      return await response.json();
=======
      const response = await api.post('/admin/reset-password', { 
        Email: email,
        OTP: otp,
        NewPassword: newPassword 
      });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error in password reset:', error);
      throw error;
    }
  },

  // Get all admins (for admin management)
  async getAllAdmins() {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/all`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch admins');
      }
      return await response.json();
=======
      const response = await api.get('/admin/all');
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  },

  // Get admin by ID
  async getAdminById(adminId) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/${adminId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch admin');
      }
      return await response.json();
=======
      const response = await api.get(`/admin/${adminId}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error fetching admin:', error);
      throw error;
    }
  },

  // Update admin
  async updateAdmin(adminId, adminData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/${adminId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify(adminData),
      });
      if (!response.ok) {
        throw new Error('Failed to update admin');
      }
      return await response.json();
=======
      const response = await api.put(`/admin/${adminId}`, adminData);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error updating admin:', error);
      throw error;
    }
  },

  // Delete admin
  async deleteAdmin(adminId) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/${adminId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete admin');
      }
      return await response.json();
=======
      const response = await api.delete(`/admin/${adminId}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error deleting admin:', error);
      throw error;
    }
  },

  // Change password (for logged in admin)
  async changePassword(currentPassword, newPassword) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify({ 
          CurrentPassword: currentPassword,
          NewPassword: newPassword 
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to change password');
      }
      return await response.json();
=======
      const response = await api.post('/admin/change-password', { 
        CurrentPassword: currentPassword,
        NewPassword: newPassword 
      });
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },

  // Get admin profile
  async getAdminProfile() {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return await response.json();
=======
      const response = await api.get('/admin/profile');
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  // Update admin profile
  async updateAdminProfile(profileData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/admin/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify(profileData),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      return await response.json();
=======
      const response = await api.put('/admin/profile', profileData);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};

// Example MySQL queries that would be used on the backend:

/*
-- Create admins table
CREATE TABLE admins (
  AdminId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Email LONGTEXT NOT NULL,
  PasswordHash LONGTEXT NOT NULL,
  Role VARCHAR(20) NOT NULL DEFAULT 'admin',
  CreatedAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  UNIQUE KEY unique_email (Email(255))
);

-- Admin signup
INSERT INTO admins (Name, Email, PasswordHash, Role) 
VALUES (?, ?, ?, 'admin');

-- Admin login
SELECT * FROM admins WHERE Email = ?;

-- Forgot password - store OTP temporarily
CREATE TABLE password_resets (
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Email VARCHAR(255) NOT NULL,
  OTP VARCHAR(6) NOT NULL,
  ExpiresAt DATETIME NOT NULL,
  CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Store OTP for password reset
INSERT INTO password_resets (Email, OTP, ExpiresAt) 
VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 15 MINUTE));

-- Verify OTP
SELECT * FROM password_resets 
WHERE Email = ? AND OTP = ? AND ExpiresAt > NOW();

-- Reset password
UPDATE admins 
SET PasswordHash = ? 
WHERE Email = ?;

-- Delete used OTP
DELETE FROM password_resets WHERE Email = ?;

-- Get all admins
SELECT AdminId, Name, Email, Role, CreatedAt FROM admins ORDER BY CreatedAt DESC;

-- Get admin by ID
SELECT * FROM admins WHERE AdminId = ?;

-- Update admin
UPDATE admins 
SET Name = ?, Email = ?, Role = ? 
WHERE AdminId = ?;

-- Delete admin
DELETE FROM admins WHERE AdminId = ?;

-- Change password
UPDATE admins 
SET PasswordHash = ? 
WHERE AdminId = ?;

-- Get admin profile
SELECT AdminId, Name, Email, Role, CreatedAt FROM admins WHERE AdminId = ?;

-- Update admin profile
UPDATE admins 
SET Name = ?, Email = ? 
WHERE AdminId = ?;
*/ 