import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Droplet } from "lucide-react";

const DonationHistory = () => {
  const donations = [
    {
      id: 1,
      date: "August 15, 2025",
      location: "City Hospital",
      bloodType: "O+",
      units: "450ml",
      status: "completed"
    },
    {
      id: 2,
      date: "May 10, 2025",
      location: "Red Cross Center",
      bloodType: "O+",
      units: "450ml",
      status: "completed"
    },
    {
      id: 3,
      date: "February 20, 2025",
      location: "Community Center Blood Drive",
      bloodType: "O+",
      units: "450ml",
      status: "completed"
    },
    {
      id: 4,
      date: "November 5, 2024",
      location: "Central Mosque Campaign",
      bloodType: "O+",
      units: "450ml",
      status: "completed"
    },
    {
      id: 5,
      date: "August 1, 2024",
      location: "City Hospital",
      bloodType: "O+",
      units: "450ml",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="donor" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Donation History</h1>
          <p className="text-muted-foreground">Your complete record of blood donations</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{donations.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{donations.length * 450}ml</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">~{donations.length * 3}</div>
            </CardContent>
          </Card>
        </div>

        {/* Donations List */}
        <Card>
          <CardHeader>
            <CardTitle>All Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {donations.map((donation) => (
                <div key={donation.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{donation.location}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4" />
                        {donation.date}
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10">
                      {donation.status}
                    </Badge>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Droplet className="h-4 w-4 text-primary" />
                      <span>Blood Type: {donation.bloodType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Droplet className="h-4 w-4 text-accent" />
                      <span>Volume: {donation.units}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationHistory;
