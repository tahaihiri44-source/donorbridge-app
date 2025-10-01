import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Search, Calendar, Users, Building2, MapPin } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-bold text-foreground">BloodLink</span>
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Save Lives Through
          <span className="text-primary"> Blood Donation</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect donors with hospitals and organizations. Find blood donation campaigns, 
          track your donations, and make a difference in your community.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/register?role=donor">
            <Button size="lg" className="gap-2">
              <Heart className="h-5 w-5" />
              Become a Donor
            </Button>
          </Link>
          <Link to="/register?role=hospital">
            <Button size="lg" variant="outline" className="gap-2">
              <Building2 className="h-5 w-5" />
              Register Hospital
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Register</h3>
            <p className="text-muted-foreground">
              Sign up as a donor, hospital, or organization to join our community
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Find Campaigns</h3>
            <p className="text-muted-foreground">
              Discover nearby blood donation campaigns and urgent requests
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Book & Donate</h3>
            <p className="text-muted-foreground">
              Schedule appointments and track your donation history
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Hospitals & Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Lives Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Make a Difference?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of donors and organizations saving lives every day
        </p>
        <Link to="/register">
          <Button size="lg" className="gap-2">
            <Heart className="h-5 w-5" />
            Get Started Today
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 BloodLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
