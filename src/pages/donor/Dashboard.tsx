import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Calendar, Droplet, MapPin, TrendingUp, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const DonorDashboard = () => {
  const nextEligibleDate = new Date();
  nextEligibleDate.setMonth(nextEligibleDate.getMonth() + 3);

  const upcomingCampaigns = [
    {
      id: 1,
      name: "Community Blood Drive",
      location: "Central Mosque",
      date: "2025-11-15",
      bloodType: "All Types",
      urgency: "normal"
    },
    {
      id: 2,
      name: "Emergency Collection",
      location: "City Hospital",
      date: "2025-11-10",
      bloodType: "O-",
      urgency: "critical"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="donor" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back, John!</h1>
          <p className="text-muted-foreground">Track your donations and find campaigns near you</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <Droplet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Lives impacted: ~36</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Type</CardTitle>
              <Droplet className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">O+</div>
              <p className="text-xs text-muted-foreground">Universal donor</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Eligible</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 days</div>
              <p className="text-xs text-muted-foreground">{nextEligibleDate.toLocaleDateString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donation Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 years</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        {/* Urgent Requests */}
        <Card className="mb-8 border-primary">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary animate-pulse" />
              <CardTitle>Urgent Blood Requests</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">Emergency: O- Blood Needed</h4>
                    <p className="text-sm text-muted-foreground">City Hospital - Critical Care Unit</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Urgent need for O- blood type. Patient in critical condition.
                </p>
                <Button size="sm">Respond to Request</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upcoming Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Nearby Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingCampaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                      {campaign.urgency === "critical" && (
                        <Badge variant="destructive">Critical</Badge>
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {campaign.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {campaign.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet className="h-4 w-4" />
                        {campaign.bloodType}
                      </div>
                    </div>
                    <Link to={`/donor/book-appointment?campaign=${campaign.id}`}>
                      <Button size="sm" variant="outline" className="w-full">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
              <Link to="/donor/campaigns">
                <Button variant="link" className="w-full mt-4">View All Campaigns</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Donations */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2025-08-15", location: "City Hospital", units: "450ml" },
                  { date: "2025-05-10", location: "Red Cross Center", units: "450ml" },
                  { date: "2025-02-20", location: "Community Center", units: "450ml" }
                ].map((donation, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{donation.location}</p>
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </div>
                    <Badge variant="outline">{donation.units}</Badge>
                  </div>
                ))}
              </div>
              <Link to="/donor/history">
                <Button variant="link" className="w-full mt-4">View Full History</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
