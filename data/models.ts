export type ModelCategory = "feminino" | "masculino" | "desenvolvimento";

export interface Model {
  id: string;
  slug: string;
  name: string;
  category: ModelCategory;
  coverImage: string;
  images: string[];
  height: string;
  bust?: string;
  waist: string;
  hips?: string;
  shoes: string;
  eyes: string;
  hair: string;
  nationality: string;
  age?: number;
  instagram?: string;
  featured?: boolean;
}

export const models: Model[] = [
  {
    id: "1",
    slug: "valentina-reis",
    name: "Valentina Reis",
    category: "feminino",
    coverImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90",
    ],
    height: "1,78m",
    bust: "82cm",
    waist: "61cm",
    hips: "89cm",
    shoes: "38",
    eyes: "Castanhos",
    hair: "Castanho escuro",
    nationality: "Brasileira",
    age: 22,
    instagram: "@valentina.reis",
    featured: true,
  },
  {
    id: "2",
    slug: "isabella-mont",
    name: "Isabella Mont",
    category: "feminino",
    coverImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=90",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&q=90",
    ],
    height: "1,76m",
    bust: "84cm",
    waist: "63cm",
    hips: "91cm",
    shoes: "37",
    eyes: "Verdes",
    hair: "Loiro",
    nationality: "Brasileira",
    age: 24,
    featured: true,
  },
  {
    id: "3",
    slug: "camila-voss",
    name: "Camila Voss",
    category: "feminino",
    coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90",
    ],
    height: "1,80m",
    bust: "80cm",
    waist: "60cm",
    hips: "87cm",
    shoes: "39",
    eyes: "Azuis",
    hair: "Loiro platinado",
    nationality: "Brasileira",
    age: 21,
  },
  {
    id: "4",
    slug: "rafael-duarte",
    name: "Rafael Duarte",
    category: "masculino",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=90",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=90",
    ],
    height: "1,88m",
    waist: "81cm",
    shoes: "43",
    eyes: "Castanhos",
    hair: "Preto",
    nationality: "Brasileiro",
    age: 25,
    featured: true,
  },
  {
    id: "5",
    slug: "lucas-ferreira",
    name: "Lucas Ferreira",
    category: "masculino",
    coverImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=90",
    ],
    height: "1,85m",
    waist: "79cm",
    shoes: "42",
    eyes: "Verdes",
    hair: "Castanho",
    nationality: "Brasileiro",
    age: 23,
  },
  {
    id: "6",
    slug: "ana-lima",
    name: "Ana Lima",
    category: "desenvolvimento",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=90",
    ],
    height: "1,74m",
    bust: "81cm",
    waist: "62cm",
    hips: "88cm",
    shoes: "37",
    eyes: "Castanhos",
    hair: "Preto",
    nationality: "Brasileira",
    age: 19,
  },
  {
    id: "7",
    slug: "pedro-alves",
    name: "Pedro Alves",
    category: "desenvolvimento",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=90",
    images: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=90",
    ],
    height: "1,86m",
    waist: "80cm",
    shoes: "42",
    eyes: "Azuis",
    hair: "Loiro",
    nationality: "Brasileiro",
    age: 18,
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}

export function getModelsByCategory(category: ModelCategory): Model[] {
  return models.filter((m) => m.category === category);
}

export function getFeaturedModels(): Model[] {
  return models.filter((m) => m.featured);
}
