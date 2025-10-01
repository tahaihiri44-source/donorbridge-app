import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, LogOut } from "lucide-react";
import { toast } from "sonner";

interface NavbarProps {
  role: "donor" | "hospital" | "organization";
}

const Navbar = ({ role }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={`/${role}/dashboard`} className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <span className="text-2xl font-bold text-foreground">BloodLink</span>
        </Link>
        <div className="flex gap-3 items-center">
          {role === "donor" && (
            <>
              <Link to="/donor/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/donor/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
              <Link to="/donor/campaigns">
                <Button variant="ghost">Find Campaigns</Button>
              </Link>
            </>
          )}
          {(role === "hospital" || role === "organization") && (
            <>
              <Link to="/hospital/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/hospital/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
              <Link to="/hospital/create-campaign">
                <Button variant="ghost">Create Campaign</Button>
              </Link>
              <Link to="/hospital/donors">
                <Button variant="ghost">Donors</Button>
              </Link>
            </>
          )}
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
