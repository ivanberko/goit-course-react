export const getRandomColor = () => {
  let color = "#" + Math.random().toString(16).substr(-6);
  return color;
};