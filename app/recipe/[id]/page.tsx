import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "@/app/data/recipes";

export const instant = false;

export default async function RecipeDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const recipe = getRecipe(id);

    if (!recipe) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-2xl">
            <Link
                href="/"
                className="mb-6 inline-block text-sm font-medium text-orange-600 hover:text-orange-700"
            >
                &larr; Back to all recipes
            </Link>

            <div className="mb-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-800">
                        {recipe.cuisine}
                    </span>
                    <span>{recipe.minutes} min</span>
                    <span>Difficulty: {recipe.difficulty}</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                    {recipe.title}
                </h1>
                <p className="mt-3 text-neutral-600">{recipe.description}</p>
            </div>

            <div className="grid gap-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <section>
                    <h2 className="mb-3 text-xl font-semibold text-neutral-900">
                        Ingredients
                    </h2>
                    <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-xl font-semibold text-neutral-900">
                        Steps
                    </h2>
                    <ol className="list-decimal space-y-3 pl-5 text-neutral-700">
                        {recipe.steps.map((step, index) => (
                            <li key={index} className="leading-relaxed">
                                {step}
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </article>
    );
}