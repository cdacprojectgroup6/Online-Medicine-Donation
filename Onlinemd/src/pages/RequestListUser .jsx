import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestService } from '@/services/requestService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Search, Plus, Edit, Trash2, Eye, ClipboardList } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const RequestListUser = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const data = await requestService.getAllRequests();
      setRequests(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch requests',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await requestService.deleteRequest(id);
      setRequests(requests.filter((req) => req.requestId !== id));
      toast({ title: 'Deleted', description: 'Request removed.' });
    } catch {
      toast({ title: 'Error', description: 'Delete failed', variant: 'destructive' });
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Requests Management</h1>
          {/* <Button
            onClick={() => navigate('/requests/new')}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Request
          </Button> */}
        </div>

        {/* Search Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Requests List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requests
            .filter((r) =>
              [r.medicineName, r.requestId, r.status]
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((request) => (
              <Card key={request.requestId} className="bg-white/10 text-white">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-500 rounded-full p-2">
                      <ClipboardList className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold">{request.medicineName}</p>
                      <p className="text-sm text-gray-300">
                        Quantity : {request.quantity}
                      </p>

                      {/* <p className="text-sm text-gray-300">
                        Request ID: {request.requestId}
                      </p> */}
                      {/* <Badge>{request.status}</Badge> */}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-2">
                    {/* <Button
                      onClick={() => navigate(/requests/${request.requestId})}
                      size="sm"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => navigate(/requests/${request.requestId}/edit)}
                      size="sm"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(request.requestId)}
                      size="sm"
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequestListUser;