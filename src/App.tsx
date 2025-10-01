import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DonorDashboard from "./pages/donor/Dashboard";
import DonorProfile from "./pages/donor/Profile";
import DonationHistory from "./pages/donor/DonationHistory";
import FindCampaigns from "./pages/donor/FindCampaigns";
import BookAppointment from "./pages/donor/BookAppointment";
import HospitalDashboard from "./pages/hospital/Dashboard";
import HospitalProfile from "./pages/hospital/Profile";
import CreateCampaign from "./pages/hospital/CreateCampaign";
import DonorManagement from "./pages/hospital/DonorManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Donor Routes */}
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/profile" element={<DonorProfile />} />
          <Route path="/donor/history" element={<DonationHistory />} />
          <Route path="/donor/campaigns" element={<FindCampaigns />} />
          <Route path="/donor/book-appointment" element={<BookAppointment />} />
          
          {/* Hospital/Organization Routes */}
          <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
          <Route path="/hospital/profile" element={<HospitalProfile />} />
          <Route path="/hospital/create-campaign" element={<CreateCampaign />} />
          <Route path="/hospital/donors" element={<DonorManagement />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
