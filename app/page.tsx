import { recipes } from "@/app/data/recipes";
import RecipeGrid from "@/app/components/RecipeGrid";

export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Featured Recipes
        </h1>
        <p className="mt-2 text-neutral-600">
          Simple, flavorful meals you can make any night of the week.
        </p>
      </div>

      <RecipeGrid recipes={recipes} />
    </section>
  );
} 