import { defineField, defineType } from "sanity";

export const EQUIPMENT_OPTIONS = [
  "Accès camion",
  "Accès poids lourd",
  "Sécurisé",
  "Gardien",
  "Électricité",
  "Triphasé",
  "Générateur",
  "Froid positif",
  "Bureau",
  "Cour privée",
  "Grande cour",
  "Titre foncier",
  "Ventilé",
  "Aéré",
  "Quai",
  "Clôturé",
  "Centre-ville",
  "2 accès",
];

export const CITY_OPTIONS = ["Bissau", "Safim", "Bafatá", "Gabú", "Canchungo", "Bissorã", "Catió", "Buba", "Farim"];

export const CATEGORY_OPTIONS = ["Entrepôt sec", "Hangar", "Froid", "Magasin", "Industriel", "Agricole"];

export const warehouse = defineType({
  name: "warehouse",
  title: "Warehouse",
  type: "document",
  groups: [
    { name: "info", title: "Informations" },
    { name: "location", title: "Localisation" },
    { name: "review", title: "Validation" },
  ],
  fields: [
    defineField({ name: "name", title: "Nom du warehouse", type: "string", group: "info", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "info", options: { source: "name", maxLength: 96 } }),
    defineField({
      name: "owner",
      title: "Propriétaire",
      type: "object",
      group: "info",
      fields: [
        defineField({ name: "name", title: "Nom", type: "string", validation: (r) => r.required() }),
        defineField({ name: "phone", title: "Téléphone", type: "string" }),
      ],
    }),
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      group: "info",
      options: { list: [{ title: "Disponible (à louer / à vendre)", value: "disponible" }, { title: "Occupé (déjà utilisé par une société)", value: "occupee" }], layout: "radio" },
      initialValue: "disponible",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "dealKind",
      title: "Transaction",
      type: "string",
      group: "info",
      options: { list: [{ title: "À louer", value: "Location" }, { title: "À vendre", value: "Vente" }] },
      hidden: ({ document }) => document?.status !== "disponible",
      validation: (r) => r.custom((value, ctx) => (ctx.document?.status === "disponible" && !value ? "Requis pour un espace disponible" : true)),
    }),
    defineField({ name: "price", title: "Prix", type: "number", group: "info", hidden: ({ document }) => document?.status !== "disponible" }),
    defineField({ name: "priceLabel", title: "Libellé du prix", type: "string", group: "info", description: "ex: / mois, prix total", hidden: ({ document }) => document?.status !== "disponible" }),
    defineField({
      name: "companies",
      title: "Entreprise(s) sur place",
      type: "array",
      group: "info",
      of: [{ type: "string" }],
      description: "Entreprises qui travaillent déjà dans cet espace (occupation actuelle)",
    }),
    defineField({ name: "category", title: "Type d'espace", type: "string", group: "info", options: { list: CATEGORY_OPTIONS } }),
    defineField({ name: "area", title: "Superficie (m²)", type: "number", group: "info" }),
    defineField({
      name: "equipment",
      title: "Équipements et accès",
      type: "array",
      group: "info",
      of: [{ type: "string" }],
      options: { list: EQUIPMENT_OPTIONS },
    }),
    defineField({ name: "description", title: "Description", type: "text", group: "info" }),
    defineField({ name: "images", title: "Photos", type: "array", group: "info", of: [{ type: "image", options: { hotspot: true } }], validation: (r) => r.min(1) }),
    defineField({ name: "featured", title: "Mis en avant", type: "boolean", group: "info", initialValue: false }),

    defineField({ name: "city", title: "Ville", type: "string", group: "location", options: { list: CITY_OPTIONS } }),
    defineField({ name: "neighborhood", title: "Quartier", type: "string", group: "location" }),
    defineField({ name: "coordinates", title: "Position sur la carte", type: "geopoint", group: "location" }),

    defineField({
      name: "reviewStatus",
      title: "Statut de validation",
      type: "string",
      group: "review",
      options: { list: [{ title: "En attente de validation", value: "pending" }, { title: "Publié", value: "published" }, { title: "Refusé", value: "rejected" }], layout: "radio" },
      initialValue: "published",
      validation: (r) => r.required(),
    }),
    defineField({ name: "submittedByOwner", title: "Soumis par le propriétaire (formulaire public)", type: "boolean", group: "review", initialValue: false, readOnly: true }),
    defineField({
      name: "commissionAccepted",
      title: "Commission AgroStock acceptée",
      type: "boolean",
      group: "review",
      description: "50% du 1er mois pour une location, 5% du prix pour une vente",
      initialValue: false,
      hidden: ({ document }) => !document?.submittedByOwner,
    }),
    defineField({ name: "submittedAt", title: "Soumis le", type: "datetime", group: "review", readOnly: true }),
  ],
  preview: {
    select: { title: "name", subtitle: "neighborhood", city: "city", media: "images.0", status: "reviewStatus" },
    prepare({ title, subtitle, city, media, status }) {
      return { title, subtitle: `${subtitle ? subtitle + ", " : ""}${city || ""}${status === "pending" ? " · à valider" : status === "rejected" ? " · refusé" : ""}`, media };
    },
  },
});
