import { label, path } from "framer-motion/client";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

// header contant

export const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Service",
    path: "/service/webDevelopment",
  },
  {
    id: 3,
    label: "Process",
    path: "/process",
  },
  {
    id: 4,
    label: "Contact",
    path: "/contact",
  },
];

// footer contant

export const ourService = [
  {
    id: 1,
    label: "Website Development",
    path: "/service/webDevelopment",
  },
  {
    id: 2,
    label: "Internship",
    path: "/service/internship",
  },
  {
    id: 3,
    label: "Data & Business Analytics",
    path: "/service/dataAnalytics",
  },
  {
    id: 4,
    label: "Digital Marketing",
    path: "/service/digitalMarketing",
  },
];

export const exploreMore = [...navItems];

export const contactDetails = [
  {
    id: 1,
    label: "Address",
    value: "B-205, Golden Valley Apartments,\nNagaramalai Adivaram, New Fairlands,\nSALEM-636004.",
    Icon: MapPin,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 9363938143",
    Icon: Phone,
  },
  {
    id: 3,
    label: "Email",
    value: "info@infisq.com",
    Icon: Mail,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/infisq/",
    Icon: Linkedin,
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://www.instagram.com/infisqtech/",
    Icon: Instagram,
  },
  {
    id: 3,
    label: "Mail",
    url: "mailto:info@infisq.com",
    Icon: Mail,
  },
];
