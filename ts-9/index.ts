type RecipeType = 'regular' | 'vegetarian';

abstract class Recipes {
    protected name: string;
    protected type: RecipeType;

    constructor(name: string, type: RecipeType) {
    this.name = name;
    this.type = type;
    }

    abstract showIngredients(): void;
    abstract showRecipe(): void;
}

class Salad extends Recipes {
    private ingredients: string;
    private recipe: string;

    constructor(name: string, type: RecipeType, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
    }

    showIngredients(): void {
    console.log(`Ingredients for ${this.name}: ${this.ingredients}`);
    }

    showRecipe(): void {
    console.log(`Recipe for ${this.name}: ${this.recipe}`);
    }
}

class Pizza extends Recipes {
    private ingredients: string;
    private recipe: string;

    constructor(name: string, type: RecipeType, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
    }

    showIngredients(): void {
    console.log(`Ingredients for ${this.name}: ${this.ingredients}`);
    }

    showRecipe(): void {
    console.log(`Recipe for ${this.name}: ${this.recipe}`);
    }
}

class Porridge extends Recipes {
    private ingredients: string;
    private recipe: string;

    constructor(name: string, type: RecipeType, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
    }

    showIngredients(): void {
    console.log(`Ingredients for ${this.name}: ${this.ingredients}`);
    }

    showRecipe(): void {
    console.log(`Recipe for ${this.name}: ${this.recipe}`);
    }
}

const salad: Recipes = new Salad('Caesar Salad', 'vegetarian', 'Cesar Ingredients', 'Cesar Recipe');
salad.showIngredients();
salad.showRecipe();
const pizza = new Pizza('Margherita Pizza', 'regular', 'Margherita Ingredients', 'Margherita Recipe');
pizza.showIngredients();
pizza.showRecipe();
const porridge = new Porridge('Oatmeal Porridge', 'vegetarian', 'Oatmeal Ingredients', 'Oatmeal Recipe');
porridge.showIngredients();
porridge.showRecipe();