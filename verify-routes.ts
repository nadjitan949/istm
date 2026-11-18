import { navigation } from "./src/data/navigation";
import fs from "fs";
import path from "path";

const PAGES_DIR = path.join(process.cwd(), "app");

function routeExists(route: string): boolean {
  // Convert route to file path
  const filePath = path.join(PAGES_DIR, route.replace(/\/$/, ""), "page.tsx");
  return fs.existsSync(filePath);
}

function checkRoutes(items: typeof navigation, errors: string[]): void {
  for (const item of items) {
    if (!routeExists(item.href)) {
      errors.push(`❌ Route manquante: ${item.href}`);
    } else {
      console.log(`✅ ${item.href}`);
    }
    if (item.children) {
      checkRoutes(item.children, errors);
    }
  }
}

const errors: string[] = [];
console.log("🔍 Vérification des routes...\n");
checkRoutes(navigation, errors);

console.log("\n");
if (errors.length > 0) {
  console.log("❌ Erreurs trouvées:");
  errors.forEach((e) => console.log(e));
  process.exit(1);
} else {
  console.log("✅ Toutes les routes sont valides !");
}