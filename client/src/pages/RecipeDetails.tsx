import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes } from '../../constants';
import { IoArrowBack, IoTime, IoPeople, IoRestaurant } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
      >
        <IoArrowBack className="text-xl" />
        <span>Back</span>
      </motion.button>

      <div className="container mx-auto pt-24 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
              src={recipe.image_url}
              alt={recipe.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Recipe+Image';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-4 inline-block">
                  {recipe.cuisine} Cuisine
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{recipe.name}</h1>
              </motion.div>
            </div>
          </div>

          {/* Recipe Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center"
            >
              <FaRegClock className="text-2xl mx-auto mb-2" />
              <p className="text-sm opacity-80">Prep Time</p>
              <p className="font-semibold">{recipe.prep_time}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center"
            >
              <IoTime className="text-2xl mx-auto mb-2" />
              <p className="text-sm opacity-80">Cook Time</p>
              <p className="font-semibold">{recipe.cook_time}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center"
            >
              <IoRestaurant className="text-2xl mx-auto mb-2" />
              <p className="text-sm opacity-80">Difficulty</p>
              <p className="font-semibold">{recipe.difficulty}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-center"
            >
              <IoPeople className="text-2xl mx-auto mb-2" />
              <p className="text-sm opacity-80">Servings</p>
              <p className="font-semibold">{recipe.serving_size}</p>
            </motion.div>
          </div>

          {/* Ingredients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recipe.ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="h-2 w-2 bg-white rounded-full" />
                  <span>{ingredient}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Instructions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Instructions</h2>
            <div className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 text-white"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p>{instruction}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeDetails; 