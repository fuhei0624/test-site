
export enum Category {
  WEBSITE = 'WEB SITE',
  LP = 'LP',
  SYSTEM = 'SYSTEM',
  OTHERS = 'OTHERS',
}

export interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}
