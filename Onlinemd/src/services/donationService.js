<<<<<<< HEAD
// Donation Service - ASP.NET Core Integration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:44344/api';

export const donationService = {
  // Get all donations
  async getAllDonations() {
    try {
      const response = await fetch(`${API_BASE_URL}/donations`);
      if (!response.ok) {
        throw new Error('Failed to fetch donations');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
  },

  // Get donation by ID
  async getDonationById(donationId) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${donationId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch donation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching donation:', error);
      throw error;
    }
  },

  // Create new donation
  async createDonation(donationData) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
      if (!response.ok) {
        throw new Error('Failed to create donation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating donation:', error);
      throw error;
    }
  },

  // Update donation
  async updateDonation(donationId, donationData) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${donationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
      if (!response.ok) {
        throw new Error('Failed to update donation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating donation:', error);
      throw error;
    }
  },

  // Delete donation
  async deleteDonation(donationId) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${donationId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete donation');
      }
      return true;
    } catch (error) {
      console.error('Error deleting donation:', error);
      throw error;
    }
  },

  // Get donations by donor
  async getDonationsByDonor(donorId) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/donor/${donorId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch donations by donor');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching donations by donor:', error);
      throw error;
    }
  },

  // Get donations by status
  async getDonationsByStatus(status) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/status/${status}`);
      if (!response.ok) {
        throw new Error('Failed to fetch donations by status');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching donations by status:', error);
      throw error;
    }
  },

  // Search donations
  async searchDonations(searchTerm) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Failed to search donations');
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching donations:', error);
      throw error;
    }
  },

  // Get donation statistics
  async getDonationStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/stats`);
      if (!response.ok) {
        throw new Error('Failed to fetch donation statistics');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching donation statistics:', error);
      throw error;
    }
  },

  // Approve donation
  async approveDonation(donationId) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${donationId}/approve`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to approve donation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error approving donation:', error);
      throw error;
    }
  },

  // Reject donation
  async rejectDonation(donationId, reason) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/${donationId}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reason }),
      });
      if (!response.ok) {
        throw new Error('Failed to reject donation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error rejecting donation:', error);
      throw error;
    }
  }
=======
// Donation Service - ASP.NET Core Integration
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
  const token = localStorage.getItem('user_token') || localStorage.getItem('admin_token');
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

export const donationService = {
  // Get all donations
  async getAllDonations() {
    try {
      const response = await api.get('/donations');
      return response.data;
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
  },

  // Get donation by ID
  async getDonationById(donationId) {
    try {
      const response = await api.get(`/donations/${donationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching donation:', error);
      throw error;
    }
  },

  // Create new donation
  async createDonation(donationData) {
    try {
      const response = await api.post('/donations', donationData);
      return response.data;
    } catch (error) {
      console.error('Error creating donation:', error);
      throw error;
    }
  },

  // Update donation
  async updateDonation(donationId, donationData) {
    try {
      const response = await api.put(`/donations/${donationId}`, donationData);
      return response.data;
    } catch (error) {
      console.error('Error updating donation:', error);
      throw error;
    }
  },

  // Delete donation
  async deleteDonation(donationId) {
    try {
      const response = await api.delete(`/donations/${donationId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting donation:', error);
      throw error;
    }
  },

  // Get donations by donor
  async getDonationsByDonor(donorId) {
    try {
      const response = await api.get(`/donations/donor/${donorId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching donations by donor:', error);
      throw error;
    }
  },

  // Get donations by status
  async getDonationsByStatus(status) {
    try {
      const response = await api.get(`/donations/status/${status}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching donations by status:', error);
      throw error;
    }
  },

  // Search donations
  async searchDonations(searchTerm) {
    try {
      const response = await api.get(`/donations/search?q=${encodeURIComponent(searchTerm)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching donations:', error);
      throw error;
    }
  },

  // Get donation statistics
  async getDonationStats() {
    try {
      const response = await api.get('/donations/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching donation statistics:', error);
      throw error;
    }
  },

  // Approve donation
  async approveDonation(donationId) {
    try {
      const response = await api.put(`/donations/${donationId}/approve`);
      return response.data;
    } catch (error) {
      console.error('Error approving donation:', error);
      throw error;
    }
  },

  // Reject donation
  async rejectDonation(donationId, reason) {
    try {
      const response = await api.put(`/donations/${donationId}/reject`, { reason });
      return response.data;
    } catch (error) {
      console.error('Error rejecting donation:', error);
      throw error;
    }
  }
>>>>>>> e494192 (Final Push)
}; 