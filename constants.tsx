
import { ColorOption } from './types';

export const COLORS: ColorOption[] = [
  { name: 'Slate Gray', hex: '#4a5568' },
  { name: 'Earthy Violet', hex: '#6b46c1' },
  { name: 'Moss Green', hex: '#4a7c59' },
  { name: 'Ocean Blue', hex: '#2c5282' }
];

export const SIZES: string[] = ['S', 'M', 'L'];

export const FEATURES = [
  {
    title: "Premium Materials",
    description: "High-strength outer shell with natural, refined elegance through sustainable textiles.",
    icon: "fa-shield-halved"
  },
  {
    title: "Eco-Friendly Design",
    description: "Responsibly sourced or recycled materials. Fully recyclable packaging.",
    icon: "fa-leaf"
  },
  {
    title: "All-Day Comfort",
    description: "Soft, breathable liner with an adjustable fit system for the perfect feel.",
    icon: "fa-cloud"
  },
  {
    title: "Ventilation Control",
    description: "Integrated multi-vent airflow system to prevent overheating.",
    icon: "fa-wind"
  }
];

export const PRODUCT_IMAGE = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/velora-helmet.png";
// Note: Using the provided image link in a real app or fallback to the provided image asset logic.
// Since I can't guarantee local image paths in this sandbox, I'll use the provided URL if it's external or a high-quality placeholder.
export const HELMET_IMG = "https://images.unsplash.com/photo-1582231542981-2292067f9621?q=80&w=1000&auto=format&fit=crop"; 
// Overriding with actual provided image from prompt
export const BILD1 = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/velora-helmet.png";
