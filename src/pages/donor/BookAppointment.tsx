import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [timeSlot, setTimeSlot] = useState("");
  const [notes, setNotes] = useState("");

  const campaign = {
    id: searchParams.get("campaign"),
    name: "Community Blood Drive",
    location: "Central Mosque, Downtown",
    date: "November 15, 2025",
    organizer: "Red Cross Organization"
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  const handleBooking = () => {
    if (!timeSlot) {
      toast.error("Please select a time slot");
      return;
    }
    toast.success("Appointment booked successfully!");
    navigate("/donor/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar role="donor" />
      
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Book Appointment</h1>
          <p className="text-muted-foreground">Schedule your blood donation</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground">{campaign.name}</h3>
              <p className="text-sm text-muted-foreground">{campaign.organizer}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">{campaign.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-foreground">{campaign.date}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Time Slot</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
              <div className="grid md:grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <div key={slot} className="flex items-center space-x-2 p-3 border border-border rounded-md">
                    <RadioGroupItem value={slot} id={slot} />
                    <Label htmlFor={slot} className="flex items-center gap-2 cursor-pointer flex-1">
                      <Clock className="h-4 w-4" />
                      {slot}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Additional Notes (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Any special requests or medical information we should know..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pre-Donation Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Get a good night's sleep before donation</li>
              <li>✓ Eat a healthy meal 2-3 hours before</li>
              <li>✓ Drink plenty of water</li>
              <li>✓ Bring a valid ID</li>
              <li>✓ Wear comfortable clothing</li>
              <li>✓ Avoid alcohol 24 hours before donation</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" className="flex-1" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
