import type { SchemaTypeDefinition } from "sanity";
import { warehouse } from "./warehouse";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [warehouse],
};
