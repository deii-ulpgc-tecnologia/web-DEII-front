export interface Noticia {
    id: number;
    date: string;
    title: string;
    description: string;
    imageUrl: string;
    pinned?: boolean;
}
