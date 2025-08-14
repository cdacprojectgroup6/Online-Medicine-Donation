import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ngoService } from '@/services/ngoService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/DashboardLayout';

const NGOForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ngoService.addNgo(formData);
      toast({ title: "Success", description: "NGO added successfully" });
      navigate('/ngos');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add NGO",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout>
      <Card className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Add New NGO</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="organizationName" placeholder="Organization Name" value={formData.organizationName} onChange={handleChange} required />
            <Input name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required />
            <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <Input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full">Add NGO</Button>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default NGOForm;
