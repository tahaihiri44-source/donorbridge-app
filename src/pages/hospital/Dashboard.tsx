import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Users, Calendar, Droplet, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const HospitalDashboard = () => {
  const bloodInventory = [
    { type: "A+", units: 45, status: "normal" },
    { type: "A-", units: 12, status: "low" },
    { type: "B+", units: 38, status: "normal" },
    { type: "B-", units: 8, status: "critical" },
    { type: "AB+", units: 25, status: "normal" },
    { type: "AB-", units: 5, status: "critical" },
    { type: "O+", units: 52, status: "good" },
    { type: "O-", units: 15, status: "low" }
  ];

  const upcomingCampaigns = [
    {
      id: 1,
      name: "Emergency Blood Collection",
      date: "November 10, 2025",
      appointments: 15,
      status: "active"
    },
    {
      id: 2,
      name: "Monthly Collection Drive",
      date: "November 25, 2025",
      appointments: 8,
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="hospital" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">City Hospital Dashboard</h1>
          <p className="text-muted-foreground">Manage blood inventory and donation campaigns</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Units</CardTitle>
              <Droplet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200</div>
              <p className="text-xs text-muted-foreground">In stock</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Calendar className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Donors</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Donations collected</p>
            </CardContent>
          </Card>
        </div>

        {/* Critical Alerts */}
        <Card className="mb-8 border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <CardTitle>Critical Blood Shortage</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The following blood types are critically low. Consider creating urgent campaigns.
            </p>
            <div className="flex gap-2">
              <Badge variant="destructive">B- (8 units)</Badge>
              <Badge variant="destructive">AB- (5 units)</Badge>
            </div>
            <Link to="/hospital/create-campaign">
              <Button className="mt-4">Create Urgent Campaign</Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Blood Inventory */}
          <Card>
            <CardHeader>
              <CardTitle>Blood Inventory Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {bloodInventory.map((blood) => (
                  <div key={blood.type} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">{blood.type}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{blood.units} units</p>
                        <p className="text-xs text-muted-foreground">Available</p>
                      </div>
                    </div>
                    {blood.status === "critical" && (
                      <Badge variant="destructive">Critical</Badge>
                    )}
                    {blood.status === "low" && (
                      <Badge className="bg-orange-500">Low</Badge>
                    )}
                    {blood.status === "good" && (
                      <Badge className="bg-green-500">Good</Badge>
                    )}
                    {blood.status === "normal" && (
                      <Badge variant="outline">Normal</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Campaigns */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Campaigns</CardTitle>
                  <Link to="/hospital/create-campaign">
                    <Button size="sm">Create New</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                        <Badge variant={campaign.status === "active" ? "default" : "outline"}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{campaign.date}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{campaign.appointments} appointments</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "John Doe", type: "O+", time: "10:00 AM" },
                    { name: "Jane Smith", type: "A+", time: "11:30 AM" },
                    { name: "Mike Johnson", type: "B+", time: "2:00 PM" }
                  ].map((appointment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{appointment.name}</p>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                  ))}
                </div>
                <Link to="/hospital/donors">
                  <Button variant="link" className="w-full mt-4">View All Donors</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
