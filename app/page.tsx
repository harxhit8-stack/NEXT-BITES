import { recipes } from "@/app/data/recipes";
import RecipeCard from "@/app/components/RecipeCard";

export default function HomePage() {
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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}