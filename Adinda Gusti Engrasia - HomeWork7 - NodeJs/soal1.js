// Buat file soal1.js untuk menggunakan modul tersebut dan menghitung luas dan keliling dari persegi dan persegi panjang
// Menggunakan Module

const shapes = require('./perhitungan.js'); // Mengimpor Module perhitungan.js

const squareSide = 10;
const rectangleLength = 20;
const rectangleWidth = 30;

const squareArea = shapes.calculateSquareArea(squareSide);
const squarePerimeter = shapes.calculateSquarePerimeter(squareSide);
const rectangleArea = shapes.calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = shapes.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

console.log('Luas Persegi:', squareArea);
console.log('Keliling Persegi:', squarePerimeter);
console.log('Luas Persegi Panjang:', rectangleArea);
console.log('Keliling Persegi Panjang:', rectanglePerimeter);
