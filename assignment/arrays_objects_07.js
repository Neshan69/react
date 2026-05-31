const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

const updatedCar = { ...car, color: 'red' };

console.log(updatedCar);
