// data = {
//   one: 'contact',
//   many: 'contacts'
// }
export const pluralize = (count, { one, many }) => {
  return `${count} ${count > 1 ? many : one}`;
};

export const clearStage = (element) => {
  element.innerHTML = '';
};
