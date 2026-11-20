"use client";

import { useState } from "react";
import type { Recipe } from "@/app/data/recipes";
import RecipeCard from "@/app/components/RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
    const [query, setQuery] = useState("");

    const normalizedQuery = query.trim().toLowerCase();

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.title.toLowerCase().includes(normalizedQuery) ||
            recipe.cuisine.toLowerCase().includes(normalizedQuery)
    );

    return (
        <div>
            <div className="mb-6">
                <label htmlFor="recipe-search" className="sr-only">
                    Search recipes
                </label>
                <input
                    id="recipe-search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by recipe title or cuisine (e.g. Pasta, Indian)..."
                    className="w-full max-w-md rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
            </div>

            {filteredRecipes.length === 0 ? (
                <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-8 text-center">
                    <p className="text-neutral-600">
                        No recipes match{" "}
                        <span className="font-semibold text-neutral-900">"{query}"</span>.
                        Try another title or cuisine.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
}