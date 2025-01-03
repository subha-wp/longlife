export interface Product {
  id: string;
  name: string;
  description?: string;
  capacity: string;
  voltage: string;
  price: number;
  image_url?: string;
  series: "standard" | "pro";
  created_at?: string;
  updated_at?: string;
}
