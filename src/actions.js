export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({type: 'DECREMENT'});
export const random = (value) => ({type: 'RANDOM', payload: value})