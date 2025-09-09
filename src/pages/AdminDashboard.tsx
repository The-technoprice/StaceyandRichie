import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, DollarSign, Gift, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Donation {
  id: number;
  donor_name: string;
  donor_email: string;
  amount: number;
  category: string;
  message?: string;
  paystack_reference?: string;
  status: string;
  created_at: string;
}

interface Pledge {
  id: number;
  guest_name: string;
  guest_email: string;
  phone?: string;
  support_type: string;
  description: string;
  availability?: string;
  contact_preference: string;
  created_at: string;
}

interface Gift {
  id: number;
  donor_name: string;
  donor_email: string;
  amount: number;
  category: string;
  message?: string;
  paystack_reference?: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [donationsRes, pledgesRes, giftsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/admin/donations`),
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/admin/pledges`),
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/admin/gifts`)
      ]);

      if (donationsRes.ok) {
        const donationsData = await donationsRes.json();
        setDonations(donationsData);
      }

      if (pledgesRes.ok) {
        const pledgesData = await pledgesRes.json();
        setPledges(pledgesData);
      }

      if (giftsRes.ok) {
        const giftsData = await giftsRes.json();
        setGifts(giftsData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string, headers: string[]) => {
    if (data.length === 0) {
      toast({
        title: "No Data",
        description: "No data available to export",
        variant: "destructive",
      });
      return;
    }

    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const key = header.toLowerCase().replace(/\s+/g, '_');
          const value = row[key] || '';
          return `"${String(value).replace(/"/g, '""')}"`;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: `${filename} exported successfully`,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const totalGifts = gifts.reduce((sum, gift) => sum + gift.amount, 0);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Wedding Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage donations, pledges, and gifts</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalDonations)}</div>
            <p className="text-xs text-muted-foreground">{donations.length} donations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Pledges</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pledges.length}</div>
            <p className="text-xs text-muted-foreground">Service offers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gift Donations</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalGifts)}</div>
            <p className="text-xs text-muted-foreground">{gifts.length} gifts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalDonations + totalGifts)}</div>
            <p className="text-xs text-muted-foreground">All contributions</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Tables */}
      <Tabs defaultValue="donations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="donations">Donations ({donations.length})</TabsTrigger>
          <TabsTrigger value="pledges">Pledges ({pledges.length})</TabsTrigger>
          <TabsTrigger value="gifts">Gifts ({gifts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="donations" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Donation Records</h3>
            <Button 
              onClick={() => exportToCSV(
                donations, 
                'donations',
                ['Donor Name', 'Donor Email', 'Amount', 'Category', 'Message', 'Paystack Reference', 'Status', 'Created At']
              )}
              variant="outline"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{donation.donor_name}</div>
                        <div className="text-sm text-muted-foreground">{donation.donor_email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(donation.amount)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{donation.category}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{donation.message || '-'}</TableCell>
                    <TableCell className="font-mono text-sm">{donation.paystack_reference || '-'}</TableCell>
                    <TableCell>
                      <Badge variant={donation.status === 'completed' ? 'default' : 'secondary'}>
                        {donation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(donation.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
                {donations.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                      No donations yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="pledges" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Service Pledge Records</h3>
            <Button 
              onClick={() => exportToCSV(
                pledges, 
                'pledges',
                ['Guest Name', 'Guest Email', 'Phone', 'Support Type', 'Description', 'Availability', 'Contact Preference', 'Created At']
              )}
              variant="outline"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Support Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pledges.map((pledge) => (
                  <TableRow key={pledge.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{pledge.guest_name}</div>
                        <div className="text-sm text-muted-foreground">{pledge.guest_email}</div>
                        {pledge.phone && (
                          <div className="text-sm text-muted-foreground">{pledge.phone}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{pledge.support_type}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">{pledge.description}</TableCell>
                    <TableCell className="text-sm">{pledge.availability || '-'}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{pledge.contact_preference}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(pledge.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
                {pledges.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No pledges yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="gifts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Gift Records</h3>
            <Button 
              onClick={() => exportToCSV(
                gifts, 
                'gifts',
                ['Donor Name', 'Donor Email', 'Amount', 'Category', 'Message', 'Paystack Reference', 'Created At']
              )}
              variant="outline"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
          
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gifts.map((gift) => (
                  <TableRow key={gift.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{gift.donor_name}</div>
                        <div className="text-sm text-muted-foreground">{gift.donor_email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(gift.amount)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{gift.category}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{gift.message || '-'}</TableCell>
                    <TableCell className="font-mono text-sm">{gift.paystack_reference || '-'}</TableCell>
                    <TableCell className="text-sm">
                      {new Date(gift.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
                {gifts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No gifts yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;