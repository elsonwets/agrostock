export type Warehouse = {
  id: number;
  name: string;
  location: string;
  neighborhood: string;
  type: "Location" | "Vente";
  category: string;
  area: number;
  price: number;
  priceLabel: string;
  image: string;
  phone: string;
  featured?: boolean;
  tags: string[];
  description: string;
  coordinates: [number, number];
  contactName: string;
};

export const warehouses: Warehouse[] = [
  { id: 1, name: "Dépôt logistique de Safim", location: "Safim", neighborhood: "Route de Bafatá", type: "Location", category: "Entrepôt sec", area: 850, price: 1200000, priceLabel: "/ mois", image: "/warehouse-interior.svg", phone: "245955123456", featured: true, tags: ["Accès camion", "Sécurisé", "Électricité"], description: "Grand dépôt sec adapté aux marchandises, noix de cajou et matériaux. Accès facile depuis la route principale avec espace de manœuvre pour poids lourds.", coordinates: [11.957, -15.649], contactName: "Mamadú Djaló" },
  { id: 2, name: "Hangar commercial Antula", location: "Bissau", neighborhood: "Antula", type: "Vente", category: "Hangar", area: 620, price: 85000000, priceLabel: "prix total", image: "/warehouse-exterior.svg", phone: "245966234567", featured: true, tags: ["Bureau", "Cour privée", "Titre foncier"], description: "Hangar commercial avec bureau indépendant et cour clôturée. Convient à la distribution, au commerce de gros ou à un atelier.", coordinates: [11.891, -15.57], contactName: "Saliu Mané" },
  { id: 3, name: "Chambre froide Bandim", location: "Bissau", neighborhood: "Bandim", type: "Location", category: "Froid", area: 240, price: 780000, priceLabel: "/ mois", image: "/warehouse-interior.svg", phone: "245955345678", tags: ["Froid positif", "Générateur", "Gardien"], description: "Espace frigorifique opérationnel proche du marché de Bandim, idéal pour produits frais, boissons et denrées alimentaires.", coordinates: [11.856, -15.59], contactName: "Fatumata Cá" },
  { id: 4, name: "Magasin de stockage Gabú", location: "Gabú", neighborhood: "Zone du marché", type: "Location", category: "Magasin", area: 380, price: 425000, priceLabel: "/ mois", image: "/warehouse-exterior.svg", phone: "245966456789", tags: ["Centre-ville", "Quai", "Ventilé"], description: "Magasin ventilé au cœur de Gabú, avec quai de déchargement et proximité immédiate des activités commerciales.", coordinates: [12.283, -14.217], contactName: "Braima Baldé" },
  { id: 5, name: "Entrepôt industriel Bafatá", location: "Bafatá", neighborhood: "Zone industrielle", type: "Vente", category: "Industriel", area: 1400, price: 132000000, priceLabel: "prix total", image: "/warehouse-interior.svg", phone: "245955567890", tags: ["Grande cour", "Triphasé", "2 accès"], description: "Ensemble industriel de grande capacité avec deux accès, alimentation triphasée et vaste cour de chargement.", coordinates: [12.167, -14.667], contactName: "Umaro Embaló" },
  { id: 6, name: "Dépôt agricole Canchungo", location: "Canchungo", neighborhood: "Route de Cacheu", type: "Location", category: "Agricole", area: 510, price: 590000, priceLabel: "/ mois", image: "/warehouse-exterior.svg", phone: "245966678901", tags: ["Aéré", "Accès poids lourd", "Clôturé"], description: "Dépôt agricole aéré et clôturé, adapté au stockage saisonnier de récoltes et accessible aux véhicules lourds.", coordinates: [12.067, -16.033], contactName: "João Gomes" }
];
