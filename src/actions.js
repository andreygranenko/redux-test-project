export const inc = () => ({ type: 'INCREMENT' });
export const dec = () => ({type: 'DECREMENT'});
export const rnd = () => ({type: 'RANDOM', payload: Math.floor(Math.random() * 10)})

console.log('testing stuff');