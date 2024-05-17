// In src/images.js
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../public/workpics', false, /\.(jpg)$/));

export default images;