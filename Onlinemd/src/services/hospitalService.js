// Hospital Service - MySQL Integration
<<<<<<< HEAD
// This file integrates with ASP.NET Core backend at https://localhost:44344/api

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:44344/api';

async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error (${response.status}): ${errorText}`);
  }
  return response.json();
}
=======
// This file integrates with ASP.NET Core backend at https://medkindbackend.azurewebsites.net/api

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
>>>>>>> e494192 (Final Push)

export const hospitalService = {
  async getAllHospitals() {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals`);
      return await handleResponse(response);
=======
      const response = await api.get('/hospitals');
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospitals:', error.message);
      throw error;
    }
  },

  async getHospitalById(hospitalId) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/${hospitalId}`);
      return await handleResponse(response);
=======
      const response = await api.get(`/hospitals/${hospitalId}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospital:', error.message);
      throw error;
    }
  },

  async createHospital(hospitalData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hospitalData),
      });
      return await handleResponse(response);
=======
      const response = await api.post('/hospitals', hospitalData);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to create hospital:', error.message);
      throw error;
    }
  },

  async updateHospital(hospitalId, hospitalData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/${hospitalId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hospitalData),
      });
      return await handleResponse(response);
=======
      const response = await api.put(`/hospitals/${hospitalId}`, hospitalData);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to update hospital:', error.message);
      throw error;
    }
  },

  async deleteHospital(hospitalId) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/${hospitalId}`, {
        method: 'DELETE',
      });
      return await handleResponse(response);
=======
      const response = await api.delete(`/hospitals/${hospitalId}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to delete hospital:', error.message);
      throw error;
    }
  },

  async getHospitalsByCity(city) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/city/${encodeURIComponent(city)}`);
      return await handleResponse(response);
=======
      const response = await api.get(`/hospitals/city/${encodeURIComponent(city)}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospitals by city:', error.message);
      throw error;
    }
  },

  async getHospitalsByState(state) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/state/${encodeURIComponent(state)}`);
      return await handleResponse(response);
=======
      const response = await api.get(`/hospitals/state/${encodeURIComponent(state)}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospitals by state:', error.message);
      throw error;
    }
  },

  async searchHospitals(searchTerm) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/search?q=${encodeURIComponent(searchTerm)}`);
      return await handleResponse(response);
=======
      const response = await api.get(`/hospitals/search?q=${encodeURIComponent(searchTerm)}`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to search hospitals:', error.message);
      throw error;
    }
  },

  async getHospitalStats() {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/stats`);
      return await handleResponse(response);
=======
      const response = await api.get('/hospitals/stats');
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospital stats:', error.message);
      throw error;
    }
  },

  async getHospitalProfile(hospitalId) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/${hospitalId}/profile`);
      return await handleResponse(response);
=======
      const response = await api.get(`/hospitals/${hospitalId}/profile`);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to fetch hospital profile:', error.message);
      throw error;
    }
  },

  async updateHospitalProfile(hospitalId, profileData) {
    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/hospitals/${hospitalId}/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      return await handleResponse(response);
=======
      const response = await api.put(`/hospitals/${hospitalId}/profile`, profileData);
      return response.data;
>>>>>>> e494192 (Final Push)
    } catch (error) {
      console.error('🔴 Failed to update hospital profile:', error.message);
      throw error;
    }
  }
};
