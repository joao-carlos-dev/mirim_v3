export interface NewsItem {
  lenght: number;
  id: number;
  title: string;
  summary: string;
  category: "Cultura" | "Eventos" | "Museu";
  date: string;
  imageUrl: string; // capa
  images?: string[];
  link: string;
  content?: string;
}