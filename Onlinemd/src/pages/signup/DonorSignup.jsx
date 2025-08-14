import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { userService } from '@/services/userService';
import ConnectionStatus from '@/components/ConnectionStatus';
<<<<<<< HEAD
=======
import { Eye, EyeOff } from 'lucide-react';
>>>>>>> e494192 (Final Push)

const DonorSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
=======
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

>>>>>>> e494192 (Final Push)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
=======
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast({
        title: 'Validation Error',
        description: 'All required fields must be filled.',
        variant: 'destructive',
>>>>>>> e494192 (Final Push)
      });
      return false;
    }

<<<<<<< HEAD
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match",
        variant: "destructive",
=======
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Email must be a valid @gmail.com address.',
        variant: 'destructive',
>>>>>>> e494192 (Final Push)
      });
      return false;
    }

<<<<<<< HEAD
    if (formData.password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
=======
    const phone = formData.phone.trim();
    if (phone && !/^[6-9]\d{9}$/.test(phone)) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit Indian mobile number.',
        variant: 'destructive',
>>>>>>> e494192 (Final Push)
      });
      return false;
    }

<<<<<<< HEAD
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
=======
    if (password.length < 6) {
      toast({
        title: 'Weak Password',
        description: 'Password must be at least 6 characters.',
        variant: 'destructive',
      });
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
    if (!passwordRegex.test(password)) {
      toast({
        title: 'Invalid Password',
        description: 'Password must contain at least one uppercase letter and one special character.',
        variant: 'destructive',
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Password Mismatch',
        description: 'Password and Confirm Password do not match.',
        variant: 'destructive',
>>>>>>> e494192 (Final Push)
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      
      // Test connection first
      const isConnected = await userService.testConnection();
      if (!isConnected) {
        toast({
          title: "Connection Error",
          description: "Unable to connect to the server. Please ensure the backend is running.",
          variant: "destructive",
        });
        return;
      }
      
      const signupData = {
        Name: `${formData.firstName} ${formData.lastName}`,
        Email: formData.email,
        Password: formData.password,
        Phone: formData.phone,
        Address: formData.address,
        Role: 'user'
      };

      console.log('Submitting signup data:', signupData);
      const response = await userService.register(signupData);
      
      toast({
        title: "Success",
        description: "Account created successfully! Please log in.",
      });

      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      
      let errorMessage = error.message || "Failed to create account. Please try again.";
      
      // Provide more user-friendly error messages
      if (errorMessage.includes('already exists')) {
        errorMessage = "An account with this email already exists. Please use a different email or try logging in.";
      } else if (errorMessage.includes('Network error')) {
        errorMessage = "Network error: Please check your internet connection and ensure the server is running.";
      } else if (errorMessage.includes('Connection failed')) {
        errorMessage = "Server connection failed. Please ensure the backend server is running on https://localhost:44344";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
=======

    if (!validateForm()) return;

    setLoading(true);
    try {
      const isConnected = await userService.testConnection();
      if (!isConnected) {
        toast({
          title: 'Connection Failed',
          description: 'Cannot reach server. Please try again later.',
          variant: 'destructive',
        });
        return;
      }

      const registerPayload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
        role: 'user',
      };

      await userService.register(registerPayload);

      toast({
        title: 'Registration Successful',
        description: 'You may now log in with your credentials.',
      });

      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);

      let errorMessage = 'An error occurred. Please try again.';
      if (err.message?.includes('already exists')) {
        errorMessage = 'Email already registered. Please login instead.';
      } else if (err.message?.includes('Network Error')) {
        errorMessage = 'Check your internet connection.';
      }

      toast({
        title: 'Signup Failed',
        description: errorMessage,
        variant: 'destructive',
>>>>>>> e494192 (Final Push)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Donor Registration</CardTitle>
<<<<<<< HEAD
          <CardDescription>Join our platform to donate medicines and help those in need</CardDescription>
=======
          <CardDescription>Join us and help distribute unused medicine to those in need.</CardDescription>
>>>>>>> e494192 (Final Push)
        </CardHeader>
        <CardContent>
          <ConnectionStatus />
          <form onSubmit={handleSubmit} className="space-y-6">
<<<<<<< HEAD
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <div>
                <Label htmlFor="address">Full Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
=======
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  autoFocus
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
>>>>>>> e494192 (Final Push)
                  onChange={handleInputChange}
                />
              </div>
            </div>

<<<<<<< HEAD
            {/* Submit */}
            <div className="flex flex-col space-y-4">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Creating Account..." : "Create Donor Account"}
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
=======
            {/* Passwords with toggle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="relative">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Address */}
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={loading} className="w-full flex items-center justify-center">
              {loading ? 'Registering...' : 'Register as Donor'}
            </Button>

            {/* Link to login */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-green-600 hover:underline">
                  Log in here
                </Link>
              </p>
>>>>>>> e494192 (Final Push)
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonorSignup;
<<<<<<< HEAD
=======

>>>>>>> e494192 (Final Push)
