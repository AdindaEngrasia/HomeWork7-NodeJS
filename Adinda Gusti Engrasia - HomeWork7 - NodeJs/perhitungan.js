// Membuat Module Node.js untuk Menghitung Luas dan Keliling Persegi dan Persegi Panjang

module.exports = {
  calculateSquareArea: (side) => side * side,
  calculateSquarePerimeter: (side) => 4 * side,
  calculateRectangleArea: (length, width) => length * width,
  calculateRectanglePerimeter: (length, width) => 2 * (length + width),
};
