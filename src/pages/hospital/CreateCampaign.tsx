import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    urgency: "normal"
  });

  const [selectedBloodTypes, setSelectedBloodTypes] = useState<string[]>([]);
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleBloodTypeToggle = (type: string) => {
    setSelectedBloodTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBloodTypes.length === 0) {
      toast.error("Please select at least one blood type");
      return;
    }
    toast.success("Campaign created successfully!");
    navigate("/hospital/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="hospital" />
      
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Blood Donation Campaign</h1>
          <p className="text-muted-foreground">Organize a new blood collection drive</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Campaign Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Community Blood Drive"
                  value={campaign.name}
                  onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the purpose and goals of this campaign..."
                  value={campaign.description}
                  onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level *</Label>
                <Select
                  value={campaign.urgency}
                  onValueChange={(value) => setCampaign({ ...campaign, urgency: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Location & Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Central Mosque, Downtown"
                  value={campaign.location}
                  onChange={(e) => setCampaign({ ...campaign, location: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={campaign.date}
                  onChange={(e) => setCampaign({ ...campaign, date: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time *</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={campaign.startTime}
                    onChange={(e) => setCampaign({ ...campaign, startTime: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time *</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={campaign.endTime}
                    onChange={(e) => setCampaign({ ...campaign, endTime: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Required Blood Types *</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {bloodTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                    <Checkbox
                      id={type}
                      checked={selectedBloodTypes.includes(type)}
                      onCheckedChange={() => handleBloodTypeToggle(type)}
                    />
                    <Label
                      htmlFor={type}
                      className="font-semibold cursor-pointer flex-1 text-center"
                    >
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="link"
                onClick={() => setSelectedBloodTypes(bloodTypes)}
                className="mt-2"
              >
                Select All Types
              </Button>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
