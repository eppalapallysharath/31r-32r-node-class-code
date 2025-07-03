const recipes = ["chicken", "egg puff", "panner"];

function getRecipes() {
  return "getting my recipes";
}
// module.exports = recipes;
// module.exports = getRecipes;

// module.exports = { dataRecipes: recipes, getRecs: getRecipes }; //default exports
// exports.name = function () {
//   return "tom";
// };

// exports.func = function () {
//   return "hello";
// };

// ejs code
function name(params) {
  return "tom";
}

export const user = () => {
  return "iam user tony";
};

//wrong way performing module export in  ejs
// exports.a = () => {
//   return "wow";
// };

export default name;
