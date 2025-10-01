import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Search, MapPin, Calendar, Droplet, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const FindCampaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const campaigns = [
    {
      id: 1,
      name: "Community Blood Drive",
      organizer: "Red Cross Organization",
      type: "organization",
      location: "Central Mosque, Downtown",
      date: "November 15, 2025",
      time: "9:00 AM - 5:00 PM",
      bloodTypes: ["All Types"],
      urgency: "normal",
      description: "Annual community blood drive to support local hospitals"
    },
    {
      id: 2,
      name: "Emergency Blood Collection",
      organizer: "City Hospital",
      type: "hospital",
      location: "City Hospital, Main Building",
      date: "November 10, 2025",
      time: "8:00 AM - 8:00 PM",
      bloodTypes: ["O-", "AB+"],
      urgency: "critical",
      description: "Urgent need for O- and AB+ blood types"
    },
    {
      id: 3,
      name: "University Blood Donation Day",
      organizer: "Student Health Association",
      type: "organization",
      location: "University Campus, Student Center",
      date: "November 20, 2025",
      time: "10:00 AM - 4:00 PM",
      bloodTypes: ["All Types"],
      urgency: "normal",
      description: "Student-organized donation campaign"
    },
    {
      id: 4,
      name: "Monthly Collection Drive",
      organizer: "Memorial Hospital",
      type: "hospital",
      location: "Memorial Hospital, Blood Bank",
      date: "November 25, 2025",
      time: "7:00 AM - 7:00 PM",
      bloodTypes: ["A+", "B+", "O+"],
      urgency: "high",
      description: "Regular monthly blood collection"
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="donor" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Blood Donation Campaigns</h1>
          <p className="text-muted-foreground">Discover nearby donation opportunities and save lives</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location, organizer, or campaign name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns List */}
        <div className="space-y-6">
          {filteredCampaigns.map((campaign) => (
            <Card key={campaign.id} className={campaign.urgency === "critical" ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{campaign.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      {campaign.organizer}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {campaign.urgency === "critical" && (
                      <Badge variant="destructive">Critical</Badge>
                    )}
                    {campaign.urgency === "high" && (
                      <Badge className="bg-orange-500">High Priority</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{campaign.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{campaign.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{campaign.date}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Droplet className="h-4 w-4 text-primary" />
                      <span className="text-foreground">
                        Blood Types: {campaign.bloodTypes.join(", ")}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Time: {campaign.time}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to={`/donor/book-appointment?campaign=${campaign.id}`} className="flex-1">
                    <Button className="w-full">Book Appointment</Button>
                  </Link>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No campaigns found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FindCampaigns;
