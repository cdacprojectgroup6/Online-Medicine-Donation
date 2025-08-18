
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, Users, Package, Building2, Heart, TrendingUp, AlertCircle, CheckCircle, Pill, Calendar, Hash, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { userService } from '@/services/userService';
import { donationService } from '@/services/donationService';
import { requestService } from '@/services/requestService';
import { ngoService } from '@/services/ngoService';
import { medicineService } from '@/services/medicineService';
import { hospitalService } from '@/services/hospitalService';
=======
>>>>>>> e494192 (Final Push)

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [requests, setRequests] = useState([]);
  const [medicines, setMedicines] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    // Load all data from localStorage
    const savedDonations = localStorage.getItem('medishare_donations');
    const savedOrders = localStorage.getItem('medishare_orders');
    const savedRequests = localStorage.getItem('medishare_ngo_requests');
    const savedMedicines = localStorage.getItem('medishare_medicines');
    
    if (savedDonations) setDonations(JSON.parse(savedDonations));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedRequests) setRequests(JSON.parse(savedRequests));
    
    if (savedMedicines) {
      setMedicines(JSON.parse(savedMedicines));
    } else {
      // Initialize with sample medicine data if none exists
      const sampleMedicines = [
        {
          MedicineID: 1,
          Name: "Paracetamol 500mg",
          Description: "Pain reliever and fever reducer",
          ExpiryDate: "2024-12-31",
          Quantity: 100,
          DonorID: 1,
          Status: "Verified",
          CreatedAt: "2024-01-15T10:30:00Z"
        },
        {
          MedicineID: 2,
          Name: "Amoxicillin 250mg",
          Description: "Antibiotic for bacterial infections",
          ExpiryDate: "2024-08-15",
          Quantity: 50,
          DonorID: 2,
          Status: "Pending",
          CreatedAt: "2024-01-20T14:45:00Z"
        },
        {
          MedicineID: 3,
          Name: "Ibuprofen 400mg",
          Description: "Anti-inflammatory pain medication",
          ExpiryDate: "2025-03-20",
          Quantity: 75,
          DonorID: 1,
          Status: "Donated",
          CreatedAt: "2024-01-25T09:15:00Z"
        }
      ];
      localStorage.setItem('medishare_medicines', JSON.stringify(sampleMedicines));
      setMedicines(sampleMedicines);
    }
  }, []);

=======
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize comprehensive medicine data
  const initializeMedicineData = () => {
    const comprehensiveMedicines = [
      {
        id: 1,
        MedicineID: 1,
        name: 'Paracetamol 500mg',
        Name: 'Paracetamol 500mg',
        genericName: 'Acetaminophen',
        Description: 'Pain reliever and fever reducer',
        category: 'Pain Relief',
        manufacturer: 'Johnson & Johnson',
        dosage: '500mg',
        form: 'Tablet',
        Quantity: 100,
        quantity: 100,
        ExpiryDate: '2024-12-31',
        expiryDate: '2024-12-31',
        DonorID: 1,
        Status: 'Verified',
        status: 'available',
        CreatedAt: '2024-01-15T10:30:00Z',
        price: 5.99,
        batchNumber: 'BATCH001',
        storageCondition: 'Store in a cool, dry place',
        prescriptionRequired: false
      },
      {
        id: 2,
        MedicineID: 2,
        name: 'Amoxicillin 250mg',
        Name: 'Amoxicillin 250mg',
        genericName: 'Amoxicillin',
        Description: 'Antibiotic for bacterial infections',
        category: 'Antibiotics',
        manufacturer: 'Pfizer',
        dosage: '250mg',
        form: 'Capsule',
        Quantity: 50,
        quantity: 50,
        ExpiryDate: '2024-08-15',
        expiryDate: '2024-08-15',
        DonorID: 2,
        Status: 'Verified',
        status: 'available',
        CreatedAt: '2024-01-20T14:45:00Z',
        price: 12.50,
        batchNumber: 'BATCH002',
        storageCondition: 'Store in refrigerator',
        prescriptionRequired: true
      },
      {
        id: 3,
        MedicineID: 3,
        name: 'Ibuprofen 400mg',
        Name: 'Ibuprofen 400mg',
        genericName: 'Ibuprofen',
        Description: 'Anti-inflammatory pain medication',
        category: 'Pain Relief',
        manufacturer: 'Bayer',
        dosage: '400mg',
        form: 'Tablet',
        Quantity: 75,
        quantity: 75,
        ExpiryDate: '2025-03-20',
        expiryDate: '2025-03-20',
        DonorID: 1,
        Status: 'Verified',
        status: 'available',
        CreatedAt: '2024-01-25T09:15:00Z',
        price: 8.25,
        batchNumber: 'BATCH003',
        storageCondition: 'Store in a cool, dry place',
        prescriptionRequired: false
      },
      {
        id: 4,
        MedicineID: 4,
        name: 'Metformin 500mg',
        Name: 'Metformin 500mg',
        genericName: 'Metformin',
        Description: 'Oral diabetes medication',
        category: 'Diabetes',
        manufacturer: 'Merck',
        dosage: '500mg',
        form: 'Tablet',
        Quantity: 200,
        quantity: 200,
        ExpiryDate: '2024-09-20',
        expiryDate: '2024-09-20',
        DonorID: 3,
        Status: 'Verified',
        status: 'available',
        CreatedAt: '2024-01-30T11:20:00Z',
        price: 15.99,
        batchNumber: 'BATCH004',
        storageCondition: 'Store at room temperature',
        prescriptionRequired: true
      },
      {
        id: 5,
        MedicineID: 5,
        name: 'Cetirizine 10mg',
        Name: 'Cetirizine 10mg',
        genericName: 'Cetirizine',
        Description: 'Antihistamine for allergy relief',
        category: 'Allergy',
        manufacturer: 'GSK',
        dosage: '10mg',
        form: 'Tablet',
        Quantity: 300,
        quantity: 300,
        ExpiryDate: '2025-01-10',
        expiryDate: '2025-01-10',
        DonorID: 2,
        Status: 'Verified',
        status: 'available',
        CreatedAt: '2024-02-01T09:45:00Z',
        price: 6.50,
        batchNumber: 'BATCH005',
        storageCondition: 'Store in a cool, dry place',
        prescriptionRequired: false
      }
    ];

    return comprehensiveMedicines;
  };

  // Enhanced data loading with error handling
  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load all data from localStorage with fallbacks
        const savedDonations = localStorage.getItem('medishare_donations');
        const savedOrders = localStorage.getItem('medishare_orders');
        const savedRequests = localStorage.getItem('medishare_ngo_requests');
        const savedMedicines = localStorage.getItem('medishare_medicines');
        
        // Set donations
        if (savedDonations) {
          const donationsData = JSON.parse(savedDonations);
          setDonations(Array.isArray(donationsData) ? donationsData : []);
        }

        // Set orders
        if (savedOrders) {
          const ordersData = JSON.parse(savedOrders);
          setOrders(Array.isArray(ordersData) ? ordersData : []);
        }

        // Set requests
        if (savedRequests) {
          const requestsData = JSON.parse(savedRequests);
          setRequests(Array.isArray(requestsData) ? requestsData : []);
        }
        
        // Handle medicines with comprehensive data
        if (savedMedicines) {
          try {
            const medicinesData = JSON.parse(savedMedicines);
            if (Array.isArray(medicinesData) && medicinesData.length > 0) {
              setMedicines(medicinesData);
            } else {
              throw new Error('Invalid medicines data');
            }
          } catch (parseError) {
            console.warn('Error parsing saved medicines, initializing with default data');
            const defaultMedicines = initializeMedicineData();
            setMedicines(defaultMedicines);
            localStorage.setItem('medishare_medicines', JSON.stringify(defaultMedicines));
          }
        } else {
          // Initialize with comprehensive medicine data
          const defaultMedicines = initializeMedicineData();
          setMedicines(defaultMedicines);
          localStorage.setItem('medishare_medicines', JSON.stringify(defaultMedicines));
        }

        console.log('Data loaded successfully');
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Failed to load dashboard data');
        toast({
          title: "Error Loading Data",
          description: "There was an issue loading the dashboard data. Please refresh the page.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  // Enhanced medicine finder with better matching
  const findAvailableMedicine = (medicineName, requiredQuantity) => {
    console.log('Searching for medicine:', medicineName, 'Quantity needed:', requiredQuantity);
    console.log('Available medicines:', medicines);

    // Normalize search term
    const searchTerm = medicineName.toLowerCase().trim();
    
    // First check in medicines array with multiple matching strategies
    const medicine = medicines.find(m => {
      const nameMatch = (m.Name || m.name || '').toLowerCase().includes(searchTerm);
      const genericMatch = (m.genericName || '').toLowerCase().includes(searchTerm);
      const isVerified = (m.Status === 'Verified' || m.status === 'available');
      const hasQuantity = (m.Quantity || m.quantity || 0) >= requiredQuantity;
      
      return (nameMatch || genericMatch) && isVerified && hasQuantity;
    });
    
    if (medicine) {
      console.log('Found medicine in inventory:', medicine);
      return { source: 'medicines', item: medicine };
    }

    // Then check in donations with similar matching
    const donation = donations.find(d => {
      const nameMatch = (d.medicineName || '').toLowerCase().includes(searchTerm);
      const isAvailable = d.status === 'available';
      const hasQuantity = parseInt(d.quantity || 0) >= requiredQuantity;
      
      return nameMatch && isAvailable && hasQuantity;
    });
    
    if (donation) {
      console.log('Found medicine in donations:', donation);
      return { source: 'donations', item: donation };
    }

    console.log('No matching medicine found');
    return null;
  };

  // Loading state
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <p className="text-white ml-4">Loading dashboard data...</p>
        </div>
      </DashboardLayout>
    );
  }

  // Error state
  if (error) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <Card className="bg-red-500/10 border-red-500/20 p-6">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Error Loading Dashboard</h3>
              <p className="text-gray-400 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline" className="border-red-500/30 text-red-400">
                Retry
              </Button>
            </div>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

>>>>>>> e494192 (Final Push)
  const stats = [
    {
      title: 'Total Donations',
      value: donations.length,
      icon: Package,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      change: '+12%'
    },
    {
      title: 'Hospital Orders',
      value: orders.length,
      icon: Building2,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      change: '+8%'
    },
    {
      title: 'NGO Requests',
      value: requests.length,
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      change: '+15%'
    },
    {
      title: 'Total Medicines',
      value: medicines.length,
      icon: Pill,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      change: '+18%'
    }
  ];

  const recentActivity = [
    ...donations.slice(-3).map(d => ({
      id: d.id,
      type: 'donation',
      title: `New donation: ${d.medicineName}`,
      subtitle: `By ${d.donorName}`,
      time: new Date(d.dateAdded).toLocaleDateString(),
      icon: Package,
      color: 'text-green-400'
    })),
    ...orders.slice(-3).map(o => ({
      id: o.id,
      type: 'order',
      title: `Hospital order: ${o.medicineName}`,
      subtitle: `By ${o.hospitalName}`,
      time: new Date(o.orderDate).toLocaleDateString(),
      icon: Building2,
      color: 'text-blue-400'
    })),
    ...requests.slice(-3).map(r => ({
      id: r.id,
      type: 'request',
      title: `NGO request: ${r.medicineName}`,
      subtitle: `By ${r.ngoName}`,
      time: new Date(r.dateCreated).toLocaleDateString(),
      icon: Users,
      color: 'text-purple-400'
    })),
    ...medicines.slice(-3).map(m => ({
<<<<<<< HEAD
      id: m.MedicineID,
      type: 'medicine',
      title: `New medicine: ${m.Name}`,
      subtitle: `Quantity: ${m.Quantity} • Status: ${m.Status}`,
      time: new Date(m.CreatedAt).toLocaleDateString(),
=======
      id: m.MedicineID || m.id,
      type: 'medicine',
      title: `Medicine: ${m.Name || m.name}`,
      subtitle: `Quantity: ${m.Quantity || m.quantity} • Status: ${m.Status || m.status}`,
      time: new Date(m.CreatedAt || Date.now()).toLocaleDateString(),
>>>>>>> e494192 (Final Push)
      icon: Pill,
      color: 'text-cyan-400'
    }))
  ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - MediShare</title>
        <meta name="description" content="Manage the MediShare platform, monitor activities, and oversee medicine donations." />
      </Helmet>

      <DashboardLayout>
        <div className="space-y-6">
<<<<<<< HEAD
=======
          {/* Debug Info - Remove in production */}
          {/* <Card className="bg-blue-500/10 border-blue-500/20">
            <div className="p-4">
              <h3 className="text-blue-400 font-medium mb-2">🔍 Debug Info</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Medicines loaded:</span>
                  <span className="text-white ml-2">{medicines.length}</span>
                </div>
                <div>
                  <span className="text-gray-400">Donations:</span>
                  <span className="text-white ml-2">{donations.length}</span>
                </div>
                <div>
                  <span className="text-gray-400">Orders:</span>
                  <span className="text-white ml-2">{orders.length}</span>
                </div>
                <div>
                  <span className="text-gray-400">Requests:</span>
                  <span className="text-white ml-2">{requests.length}</span>
                </div>
              </div>
              {medicines.length > 0 && (
                <div className="mt-2">
                  <span className="text-gray-400">Sample medicine:</span>
                  <span className="text-white ml-2">{medicines[0].Name || medicines[0].name}</span>
                </div>
              )}
            </div>
          </Card> */}

>>>>>>> e494192 (Final Push)
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 border border-white/10"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-gray-400 text-lg">Monitor and manage the MediShare platform</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 max-w-2xl">
                  Welcome back! Here's an overview of your platform's performance and recent activities.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Administrator
                </Badge>
<<<<<<< HEAD
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Reports
=======
                {/* <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Reports
                </Button> */}
                <Button 
                  onClick={() => navigate('/admin-signup')} 
                  className="text-black bg-orange-400 hover:bg-orange-500 hover:scale-105 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  ADD Admin
>>>>>>> e494192 (Final Push)
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                      {stat.change && (
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                          <span className="text-gray-400 text-xs">from last month</span>
                        </div>
                      )}
                    </div>
                    <div className={`p-4 rounded-xl ${stat.bgColor} border border-white/10`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 border bg-white/5 border-white/10">
                <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="medicines" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                  Medicines
                </TabsTrigger>
                <TabsTrigger value="donations" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                  Donations
                </TabsTrigger>
                <TabsTrigger value="orders" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="requests" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  Requests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="glass-effect border-orange-500/20">
                  <div className="p-6">
                    <h3 className="mb-6 text-xl font-semibold text-white">Recent Activity</h3>
                    
                    {recentActivity.length === 0 ? (
                      <div className="py-8 text-center">
                        <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                        <h4 className="mb-2 text-lg font-medium text-white">No recent activity</h4>
                        <p className="text-gray-400">Activity will appear here as users interact with the platform</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {recentActivity.map((activity) => (
                          <div key={`${activity.type}-${activity.id}`} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                            <div className={`p-2 rounded-lg bg-white/10`}>
                              <activity.icon className={`w-4 h-4 ${activity.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-white">{activity.title}</h4>
                              <p className="text-xs text-gray-400">{activity.subtitle}</p>
                            </div>
                            <span className="text-xs text-gray-400">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="medicines" className="space-y-6">
                <Card className="glass-effect border-cyan-500/20">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white">All Medicines</h3>
                      <div className="flex gap-2">
                        <Button
=======
                      <h3 className="text-xl font-semibold text-white">All Medicines ({medicines.length})</h3>
                      <div className="flex gap-2">
                        {/* <Button
>>>>>>> e494192 (Final Push)
                          onClick={() => navigate('/medicines')}
                          className="text-white bg-cyan-600 hover:bg-cyan-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Manage Medicines
<<<<<<< HEAD
                        </Button>
                        <Button
                          onClick={() => toast({
                            title: "🚧 Feature coming soon!",
                            description: "Medicine management features will be available in the next update! 🚀"
                          })}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400"
                        >
                          Export Data
                        </Button>
=======
                        </Button> */}
                        {/* <Button
                          onClick={() => {
                            console.log('Exporting medicines:', medicines);
                            toast({
                              title: "📊 Medicines Data",
                              description: `Found ${medicines.length} medicines in inventory. Check console for details.`
                            });
                          }}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400"
                        >
                          Debug Data
                        </Button> */}
>>>>>>> e494192 (Final Push)
                      </div>
                    </div>
                    
                    {medicines.length === 0 ? (
                      <div className="py-12 text-center">
                        <Pill className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <h4 className="mb-2 text-xl font-medium text-white">No medicines available</h4>
                        <p className="mb-4 text-gray-400">No medicines have been added to the system yet</p>
<<<<<<< HEAD
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Hash className="w-4 h-4" />
                          <span>MedicineID • Name • Description • ExpiryDate • Quantity • DonorID • Status • CreatedAt</span>
                        </div>
=======
                        <Button 
                          onClick={() => {
                            const defaultMedicines = initializeMedicineData();
                            setMedicines(defaultMedicines);
                            localStorage.setItem('medishare_medicines', JSON.stringify(defaultMedicines));
                            toast({
                              title: "✅ Sample Data Added",
                              description: "Sample medicines have been added to the inventory."
                            });
                          }}
                          className="bg-cyan-600 hover:bg-cyan-700"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Initialize Sample Data
                        </Button>
>>>>>>> e494192 (Final Push)
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {medicines.map((medicine) => (
<<<<<<< HEAD
                          <div key={medicine.MedicineID} className="flex items-center justify-between p-4 transition-colors rounded-lg bg-white/5 hover:bg-white/10">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-medium text-white">{medicine.Name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  ID: {medicine.MedicineID}
                                </Badge>
=======
                          <div key={medicine.MedicineID || medicine.id} className="flex items-center justify-between p-4 transition-colors rounded-lg bg-white/5 hover:bg-white/10">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-medium text-white">{medicine.Name || medicine.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  ID: {medicine.MedicineID || medicine.id}
                                </Badge>
                                {(medicine.category || medicine.Category) && (
                                  <Badge variant="outline" className="text-xs bg-blue-500/20 text-blue-400">
                                    {medicine.category || medicine.Category}
                                  </Badge>
                                )}
>>>>>>> e494192 (Final Push)
                              </div>
                              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
                                <div>
                                  <p className="text-gray-400">Description</p>
<<<<<<< HEAD
                                  <p className="text-white">{medicine.Description || 'No description'}</p>
=======
                                  <p className="text-white">{medicine.Description || medicine.description || 'No description'}</p>
>>>>>>> e494192 (Final Push)
                                </div>
                                <div>
                                  <p className="text-gray-400">Quantity</p>
                                  <p className="flex items-center gap-1 text-white">
                                    <Hash className="w-3 h-3" />
<<<<<<< HEAD
                                    {medicine.Quantity}
=======
                                    {medicine.Quantity || medicine.quantity || 0}
>>>>>>> e494192 (Final Push)
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Expiry Date</p>
                                  <p className="flex items-center gap-1 text-white">
                                    <Calendar className="w-3 h-3" />
<<<<<<< HEAD
                                    {new Date(medicine.ExpiryDate).toLocaleDateString()}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Donor ID</p>
                                  <p className="text-white">{medicine.DonorID}</p>
=======
                                    {new Date(medicine.ExpiryDate || medicine.expiryDate).toLocaleDateString()}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Manufacturer</p>
                                  <p className="text-white">{medicine.manufacturer || medicine.DonorID || 'N/A'}</p>
>>>>>>> e494192 (Final Push)
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mt-3">
                                <Badge variant={
<<<<<<< HEAD
                                  medicine.Status === 'Verified' ? 'default' :
                                  medicine.Status === 'Donated' ? 'secondary' :
                                  'outline'
                                } className={
                                  medicine.Status === 'Verified' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                  medicine.Status === 'Donated' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }>
                                  {medicine.Status}
                                </Badge>
                                <span className="text-xs text-gray-400">
                                  Created: {new Date(medicine.CreatedAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toast({
                                  title: "🚧 Feature coming soon!",
                                  description: "Medicine management features will be available in the next update! 🚀"
                                })}
                                className="border-cyan-500/30 text-cyan-400"
                              >
                                Manage
                              </Button>
=======
                                  (medicine.Status || medicine.status) === 'Verified' || (medicine.Status || medicine.status) === 'available' ? 'default' :
                                  (medicine.Status || medicine.status) === 'Donated' ? 'secondary' :
                                  'outline'
                                } className={
                                  (medicine.Status || medicine.status) === 'Verified' || (medicine.Status || medicine.status) === 'available' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                  (medicine.Status || medicine.status) === 'Donated' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }>
                                  {medicine.Status || medicine.status}
                                </Badge>
                                <span className="text-xs text-gray-400">
                                  Created: {new Date(medicine.CreatedAt || Date.now()).toLocaleDateString()}
                                </span>
                                {medicine.prescriptionRequired && (
                                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                                    Rx Required
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              {/* <Button
                                size="sm"
                                variant="outline"
                                onClick={() => navigate(`/medicines/${medicine.MedicineID || medicine.id}`)}
                                className="border-cyan-500/30 text-cyan-400"
                              >
                                View Details
                              </Button> */}
>>>>>>> e494192 (Final Push)
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="donations" className="space-y-6">
                <Card className="glass-effect border-green-500/20">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white">All Donations</h3>
                      <Button
                        onClick={() => toast({
                          title: "🚧 Feature coming soon!",
                          description: "Advanced donation management features will be available in the next update! 🚀"
=======
                      <h3 className="text-xl font-semibold text-white">All Donations ({donations.length})</h3>
                      {/* <Button
                        onClick={() => toast({
                          title: "✅ Donations Synced",
                          description: "All donation status changes saved to localStorage",
>>>>>>> e494192 (Final Push)
                        })}
                        variant="outline"
                        className="text-green-400 border-green-500/30"
                      >
<<<<<<< HEAD
                        Export Data
                      </Button>
=======
                        Save Changes
                      </Button> */}
>>>>>>> e494192 (Final Push)
                    </div>
                    
                    {donations.length === 0 ? (
                      <div className="py-8 text-center">
                        <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                        <h4 className="mb-2 text-lg font-medium text-white">No donations yet</h4>
                        <p className="text-gray-400">Donations will appear here as users add them</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
<<<<<<< HEAD
                        {donations.map((donation) => (
                          <div key={donation.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                            <div>
                              <h4 className="font-medium text-white">{donation.medicineName}</h4>
                              <p className="text-sm text-gray-400">
                                By {donation.donorName} • {donation.quantity} • Expires: {new Date(donation.expiryDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={donation.status === 'available' ? 'default' : 'secondary'}>
                                {donation.status}
                              </Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toast({
                                  title: "🚧 Feature coming soon!",
                                  description: "Donation management features will be available in the next update! 🚀"
                                })}
                              >
                                Manage
                              </Button>
                            </div>
                          </div>
                        ))}
=======
                        {donations.map((donation, index) => {
                          const handleStatusChange = (newStatus) => {
                            const updatedDonations = [...donations];
                            updatedDonations[index].status = newStatus;
                            setDonations(updatedDonations);
                            localStorage.setItem('medishare_donations', JSON.stringify(updatedDonations));

                            toast({
                              title: "✅ Status Updated",
                              description: `Donation status changed to "${newStatus}"`,
                            });
                          };

                          return (
                            <div key={donation.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                              <div>
                                <h4 className="font-medium text-white">{donation.medicineName}</h4>
                                <p className="text-sm text-gray-400">
                                  By {donation.donorName} • Qty: {donation.quantity} • Expires: {new Date(donation.expiryDate).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={donation.status === 'available' ? 'default' : 'secondary'} className={
                                  donation.status === 'available' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                  donation.status === 'donated' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }>
                                  {donation.status}
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    const newStatus = donation.status === 'available' ? 'donated' : 'available';
                                    handleStatusChange(newStatus);
                                  }}
                                  className="border-green-500/30 text-green-400"
                                >
                                  {donation.status === 'available' ? 'Mark Donated' : 'Mark Available'}
                                </Button>
                              </div>
                            </div>
                          );
                        })}
>>>>>>> e494192 (Final Push)
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6">
                <Card className="glass-effect border-blue-500/20">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white">Hospital Orders</h3>
                      <Button
                        onClick={() => toast({
                          title: "🚧 Feature coming soon!",
                          description: "Order management features will be available in the next update! 🚀"
=======
                      <h3 className="text-xl font-semibold text-white">Hospital Orders ({orders.length})</h3>
                      {/* <Button
                        onClick={() => toast({
                          title: "📦 Orders Updated",
                          description: "All order changes are saved in localStorage.",
>>>>>>> e494192 (Final Push)
                        })}
                        variant="outline"
                        className="text-blue-400 border-blue-500/30"
                      >
<<<<<<< HEAD
                        Export Data
                      </Button>
                    </div>
                    
=======
                        Save Changes
                      </Button> */}
                    </div>

>>>>>>> e494192 (Final Push)
                    {orders.length === 0 ? (
                      <div className="py-8 text-center">
                        <Building2 className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                        <h4 className="mb-2 text-lg font-medium text-white">No orders yet</h4>
                        <p className="text-gray-400">Hospital orders will appear here</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
<<<<<<< HEAD
                        {orders.map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                            <div>
                              <h4 className="font-medium text-white">{order.medicineName}</h4>
                              <p className="text-sm text-gray-400">
                                By {order.hospitalName} • {new Date(order.orderDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={order.status === 'pending' ? 'secondary' : 'default'}>
                                {order.status}
                              </Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toast({
                                  title: "🚧 Feature coming soon!",
                                  description: "Order management features will be available in the next update! 🚀"
                                })}
                              >
                                Manage
                              </Button>
                            </div>
                          </div>
                        ))}
=======
                        {orders.map((order, index) => {
                          const availableSource = findAvailableMedicine(order.medicineName, order.quantity);
                          const isAvailable = availableSource !== null;

                          const handleComplete = () => {
                            if (!isAvailable) {
                              toast({
                                title: "❌ Medicine Not Available",
                                description: `No sufficient medicine available for "${order.medicineName}". Required: ${order.quantity}`,
                                variant: "destructive",
                              });
                              return;
                            }

                            // Update order status
                            const updatedOrders = [...orders];
                            updatedOrders[index].status = 'completed';
                            setOrders(updatedOrders);
                            localStorage.setItem('medishare_orders', JSON.stringify(updatedOrders));

                            // Update source inventory
                            if (availableSource.source === 'medicines') {
                              const updatedMedicines = medicines.map(m => {
                                if ((m.MedicineID || m.id) === (availableSource.item.MedicineID || availableSource.item.id)) {
                                  const newQuantity = (m.Quantity || m.quantity) - order.quantity;
                                  return {
                                    ...m,
                                    Quantity: newQuantity,
                                    quantity: newQuantity,
                                    Status: newQuantity <= 0 ? 'Donated' : (m.Status || m.status),
                                    status: newQuantity <= 0 ? 'donated' : (m.status || 'available')
                                  };
                                }
                                return m;
                              });
                              setMedicines(updatedMedicines);
                              localStorage.setItem('medishare_medicines', JSON.stringify(updatedMedicines));
                            } else if (availableSource.source === 'donations') {
                              const updatedDonations = donations.map(d => {
                                if (d.id === availableSource.item.id) {
                                  const remainingQty = parseInt(d.quantity) - order.quantity;
                                  return {
                                    ...d,
                                    quantity: remainingQty.toString(),
                                    status: remainingQty <= 0 ? 'donated' : d.status
                                  };
                                }
                                return d;
                              });
                              setDonations(updatedDonations);
                              localStorage.setItem('medishare_donations', JSON.stringify(updatedDonations));
                            }

                            toast({
                              title: "✅ Order Completed",
                              description: `Order for ${order.medicineName} completed and inventory updated.`,
                            });
                          };

                          return (
                            <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                              <div>
                                <h4 className="font-medium text-white">{order.medicineName}</h4>
                                <p className="text-sm text-gray-400">
                                  By {order.hospitalName} • Qty: {order.quantity} • {new Date(order.orderDate).toLocaleDateString()}
                                </p>
                                {availableSource && (
                                  <p className="text-xs text-green-400 mt-1">
                                    ✅ Available from: {availableSource.source === 'medicines' ? 'Medicine Inventory' : 'Donations'} 
                                    ({availableSource.source === 'medicines' ? (availableSource.item.Quantity || availableSource.item.quantity) : availableSource.item.quantity} units)
                                  </p>
                                )}
                                {!availableSource && (
                                  <p className="text-xs text-red-400 mt-1">
                                    ❌ No sufficient stock available
                                  </p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={order.status === 'pending' ? 'secondary' : 'default'} className={
                                  order.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
                                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }>
                                  {order.status}
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className={isAvailable ? "text-green-400 border-green-400" : "text-red-400 border-red-400"}
                                  onClick={handleComplete}
                                  disabled={order.status === 'completed'}
                                >
                                  {order.status === 'completed' ? 'Completed' : isAvailable ? 'Complete' : 'Unavailable'}
                                </Button>
                              </div>
                            </div>
                          );
                        })}
>>>>>>> e494192 (Final Push)
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="requests" className="space-y-6">
                <Card className="glass-effect border-purple-500/20">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white">NGO Requests</h3>
                      <Button
                        onClick={() => toast({
                          title: "🚧 Feature coming soon!",
                          description: "Request management features will be available in the next update! 🚀"
=======
                      <h3 className="text-xl font-semibold text-white">NGO Requests ({requests.length})</h3>
                      {/* <Button
                        onClick={() => toast({
                          title: "✅ Requests Synced",
                          description: "Request updates saved to localStorage",
>>>>>>> e494192 (Final Push)
                        })}
                        variant="outline"
                        className="text-purple-400 border-purple-500/30"
                      >
<<<<<<< HEAD
                        Export Data
                      </Button>
                    </div>
                    
=======
                        Save Changes
                      </Button> */}
                    </div>

>>>>>>> e494192 (Final Push)
                    {requests.length === 0 ? (
                      <div className="py-8 text-center">
                        <Users className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                        <h4 className="mb-2 text-lg font-medium text-white">No requests yet</h4>
                        <p className="text-gray-400">NGO requests will appear here</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
<<<<<<< HEAD
                        {requests.map((request) => (
                          <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                            <div>
                              <h4 className="font-medium text-white">{request.medicineName}</h4>
                              <p className="text-sm text-gray-400">
                                By {request.ngoName} • {request.quantity} • {request.beneficiaries} beneficiaries
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={request.status === 'open' ? 'default' : 'secondary'}>
                                {request.status}
                              </Badge>
                              <Badge variant="outline" className={
                                request.urgency === 'high' ? 'text-red-400 border-red-400' :
                                request.urgency === 'medium' ? 'text-yellow-400 border-yellow-400' :
                                'text-green-400 border-green-400'
                              }>
                                {request.urgency}
                              </Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toast({
                                  title: "🚧 Feature coming soon!",
                                  description: "Request management features will be available in the next update! 🚀"
                                })}
                              >
                                Manage
                              </Button>
                            </div>
                          </div>
                        ))}
=======
                        {requests.map((request, index) => {
                          const availableSource = findAvailableMedicine(request.medicineName, request.quantity);
                          const isAvailable = availableSource !== null;

                          const handleFulfill = () => {
                            if (!isAvailable) {
                              toast({
                                title: "❌ Medicine Not Available",
                                description: `No sufficient medicine available for "${request.medicineName}". Needed: ${request.quantity}`,
                                variant: "destructive",
                              });
                              return;
                            }

                            // Update request status
                            const updatedRequests = [...requests];
                            updatedRequests[index].status = 'fulfilled';
                            setRequests(updatedRequests);
                            localStorage.setItem('medishare_ngo_requests', JSON.stringify(updatedRequests));

                            // Update source inventory
                            if (availableSource.source === 'medicines') {
                              const updatedMedicines = medicines.map(m => {
                                if ((m.MedicineID || m.id) === (availableSource.item.MedicineID || availableSource.item.id)) {
                                  const newQuantity = (m.Quantity || m.quantity) - request.quantity;
                                  return {
                                    ...m,
                                    Quantity: newQuantity,
                                    quantity: newQuantity,
                                    Status: newQuantity <= 0 ? 'Donated' : (m.Status || m.status),
                                    status: newQuantity <= 0 ? 'donated' : (m.status || 'available')
                                  };
                                }
                                return m;
                              });
                              setMedicines(updatedMedicines);
                              localStorage.setItem('medishare_medicines', JSON.stringify(updatedMedicines));
                            } else if (availableSource.source === 'donations') {
                              const updatedDonations = donations.map(d => {
                                if (d.id === availableSource.item.id) {
                                  const remainingQty = parseInt(d.quantity) - request.quantity;
                                  return {
                                    ...d,
                                    quantity: remainingQty.toString(),
                                    status: remainingQty <= 0 ? 'donated' : d.status
                                  };
                                }
                                return d;
                              });
                              setDonations(updatedDonations);
                              localStorage.setItem('medishare_donations', JSON.stringify(updatedDonations));
                            }

                            toast({
                              title: "✅ Request Fulfilled",
                              description: `Request for ${request.medicineName} fulfilled and inventory updated.`,
                            });
                          };

                          return (
                            <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                              <div>
                                <h4 className="font-medium text-white">{request.medicineName}</h4>
                                <p className="text-sm text-gray-400">
                                  By {request.ngoName} • Qty: {request.quantity} • {request.beneficiaries} beneficiaries
                                </p>
                                {availableSource && (
                                  <p className="text-xs text-green-400 mt-1">
                                    ✅ Available from: {availableSource.source === 'medicines' ? 'Medicine Inventory' : 'Donations'} 
                                    ({availableSource.source === 'medicines' ? (availableSource.item.Quantity || availableSource.item.quantity) : availableSource.item.quantity} units)
                                  </p>
                                )}
                                {!availableSource && (
                                  <p className="text-xs text-red-400 mt-1">
                                    ❌ No sufficient stock available
                                  </p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={request.status === 'open' ? 'default' : 'secondary'} className={
                                  request.status === 'fulfilled' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
                                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                }>
                                  {request.status}
                                </Badge>
                                <Badge variant="outline" className={
                                  request.urgency === 'high' ? 'text-red-400 border-red-400' :
                                  request.urgency === 'medium' ? 'text-yellow-400 border-yellow-400' :
                                  'text-green-400 border-green-400'
                                }>
                                  {request.urgency}
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className={isAvailable ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'}
                                  onClick={handleFulfill}
                                  disabled={request.status === 'fulfilled'}
                                >
                                  {request.status === 'fulfilled' ? 'Fulfilled' : isAvailable ? 'Fulfill' : 'Unavailable'}
                                </Button>
                              </div>
                            </div>
                          );
                        })}
>>>>>>> e494192 (Final Push)
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </DashboardLayout>
    </>
  );
};

<<<<<<< HEAD
export default AdminDashboard;
=======
export default AdminDashboard;
>>>>>>> e494192 (Final Push)
