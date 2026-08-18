import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("AgroStock")
    .items([
      S.listItem()
        .title("En attente de validation")
        .child(S.documentList().title("En attente de validation").filter('_type == "warehouse" && reviewStatus == "pending"')),
      S.listItem()
        .title("Publiés")
        .child(S.documentList().title("Publiés").filter('_type == "warehouse" && reviewStatus == "published"')),
      S.listItem()
        .title("Refusés")
        .child(S.documentList().title("Refusés").filter('_type == "warehouse" && reviewStatus == "rejected"')),
      S.divider(),
      S.listItem()
        .title("Tous les warehouses")
        .child(S.documentTypeList("warehouse").title("Tous les warehouses")),
    ]);
