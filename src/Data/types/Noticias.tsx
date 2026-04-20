export interface NewsItem {
  lenght: number;
  id: number;
  title: string;
  summary: string;
  category: "Cultura" | "Eventos" | "Museu" | "Mirim";
  date: string;
  imageUrl: string; // capa
  images?: string[];
  link: string;
  content?: NewsContent;
  isArchived?: boolean;
}

export interface AgendaItem {
  hora: string;
  atividade: string;
}

export interface NewsContent {
  text: string;
  agenda?: AgendaItem[];
}