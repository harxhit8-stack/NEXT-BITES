export type Recipe = {
    id: string;
    title: string;
    cuisine: string;
    minutes: number;
    difficulty: "Easy" | "Medium" | "Hard";
    description: string;
    ingredients: string[];
    steps: string[];
};

export const recipes: Recipe[] = [
    {
        id: "garlic-butter-pasta",
        title: "Garlic Butter Pasta",
        cuisine: "Italian",
        minutes: 20,
        difficulty: "Easy",
        description: "Silky spaghetti tossed in roasted garlic, butter, parmesan, and fresh parsley.",
        ingredients: [
            "250g spaghetti",
            "4 tbsp unsalted butter",
            "5 cloves garlic, thinly sliced",
            "1/2 cup grated parmesan",
            "2 tbsp fresh parsley, chopped",
            "Salt and black pepper to taste",
        ],
        steps: [
            "Boil spaghetti in salted water until al dente, reserving 1/2 cup of pasta water.",
            "Melt butter in a large skillet over medium-low heat and sauté garlic until fragrant.",
            "Toss the cooked pasta into the skillet with a splash of pasta water.",
            "Remove from heat, stir in parmesan and parsley, and season to taste.",
        ],
    },
    {
        id: "chicken-tikka-bowl",
        title: "Chicken Tikka Rice Bowl",
        cuisine: "Indian",
        minutes: 35,
        difficulty: "Medium",
        description: "Spiced yogurt-marinated chicken served over basmati rice with mint chutney.",
        ingredients: [
            "400g boneless chicken thighs, cubed",
            "1/2 cup plain yogurt",
            "2 tsp garam masala",
            "1 tsp smoked paprika",
            "2 cups cooked basmati rice",
            "Fresh cilantro and lime wedges",
        ],
        steps: [
            "Mix yogurt, garam masala, paprika, and salt in a bowl, then coat the chicken.",
            "Sear the chicken in a hot oiled skillet for 6–8 minutes until charred and cooked through.",
            "Divide warm basmati rice into bowls and top with the chicken.",
            "Garnish with fresh cilantro and a squeeze of lime.",
        ],
    },
    {
        id: "crispy-tofu-tacos",
        title: "Crispy Tofu Street Tacos",
        cuisine: "Mexican",
        minutes: 25,
        difficulty: "Easy",
        description: "Pan-seared smoky tofu topped with pickled red onions, avocado, and lime crema.",
        ingredients: [
            "300g extra-firm tofu, pressed and cubed",
            "1 tbsp olive oil",
            "1 tsp chili powder and 1/2 tsp cumin",
            "8 small corn tortillas",
            "1 ripe avocado, sliced",
            "Pickled red onions",
        ],
        steps: [
            "Toss tofu cubes with olive oil, chili powder, cumin, and salt.",
            "Pan-fry over medium-high heat until golden and crisp on all sides.",
            "Warm the corn tortillas in a dry skillet for 30 seconds per side.",
            "Fill tortillas with crispy tofu, avocado slices, and pickled red onions.",
        ],
    },
    {
        id: "miso-ginger-ramen",
        title: "Miso Ginger Ramen",
        cuisine: "Japanese",
        minutes: 30,
        difficulty: "Medium",
        description: "Rich miso broth infused with fresh ginger, soft-boiled egg, and scallions.",
        ingredients: [
            "2 packs ramen noodles",
            "4 cups vegetable or chicken broth",
            "3 tbsp white or red miso paste",
            "1 tbsp fresh ginger, grated",
            "2 soft-boiled eggs, halved",
            "3 scallions, thinly sliced",
        ],
        steps: [
            "Simmer the broth with grated ginger for 10 minutes.",
            "Reduce heat to low and whisk in the miso paste until fully dissolved.",
            "Cook ramen noodles separately according to package instructions, then drain.",
            "Place noodles in bowls, ladle the hot broth over top, and finish with eggs and scallions.",
        ],
    },
];

export function getRecipe(id: string): Recipe | undefined {
    return recipes.find((r) => r.id === id);
}