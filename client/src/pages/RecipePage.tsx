import { motion } from 'framer-motion';
import { useState } from 'react';
import {recipes} from "../../constants.ts"
import { useNavigate } from 'react-router-dom';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  prep_time: string;
  cook_time: string;
  difficulty: string;
  serving_size: number;
  image_url: string;
}

// Move itemVariants outside both components so it can be shared
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const RecipePage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Filter recipes based on cuisine and search query
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  const cuisines = ['All', ...new Set(recipes.map(recipe => recipe.cuisine))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Header Section */}
      <div className="pt-24 pb-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Recipes</h1>
          <p className="text-lg text-white/80">Explore our collection of delicious recipes</p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mt-8 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCuisine === cuisine
                      ? 'bg-white text-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recipe Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        />
        <img
          src={recipe.image_url}
          alt={recipe.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Recipe+Image';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white">{recipe.name}</h3>
          <p className="text-white/80">{recipe.cuisine} Cuisine</p>
        </div>
      </div>

      {/* Recipe Details */}
      <div className="p-4 text-white">
        <div className="flex justify-between mb-4">
          <div className="text-sm">
            <span className="block">Prep: {recipe.prep_time}</span>
            <span className="block">Cook: {recipe.cook_time}</span>
          </div>
          <div className="text-right text-sm">
            <span className="block">Difficulty: {recipe.difficulty}</span>
            <span className="block">Serves: {recipe.serving_size}</span>
          </div>
        </div>

        {/* Ingredients Preview */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Main Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 rounded-full text-sm"
              >
                {ingredient}
              </span>
            ))}
            {recipe.ingredients.length > 4 && (
              <span className="px-2 py-1 bg-white/10 rounded-full text-sm">
                +{recipe.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Recipe Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          View Recipe
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RecipePage; 