import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  visitType: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
}

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    visitType: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours with more information.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        visitType: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white text-lg">Full Name *</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder-white/70 text-lg h-14"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white text-lg">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder-white/70 text-lg h-14"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white text-lg">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder-white/70 text-lg h-14"
          placeholder="+60 12-345-6789"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="visitType" className="text-white text-lg">Visit Type</Label>
        <Select value={formData.visitType} onValueChange={(value) => handleInputChange("visitType", value)}>
          <SelectTrigger className="bg-white/20 border-white/30 text-white h-14">
            <SelectValue placeholder="Select visit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="virtual">Virtual Tour</SelectItem>
            <SelectItem value="in-person">In-Person Visit</SelectItem>
            <SelectItem value="extended">Extended Stay (1-2 weeks)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white text-lg">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder-white/70 text-lg min-h-[100px]"
          placeholder="Tell us about your interests or any questions you have..."
        />
      </div>

      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full bg-white text-primary hover:bg-gray-100 btn-senior"
      >
        {contactMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function NewsletterForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You'll receive our community updates and event notifications.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Missing Email",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="bg-gray-700 text-white border-gray-600 text-lg h-12"
        required
      />
      <Button
        type="submit"
        disabled={newsletterMutation.isPending}
        className="w-full bg-primary hover:bg-blue-700 text-white btn-senior"
      >
        {newsletterMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
