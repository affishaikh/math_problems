const extractInputIntoArray = function() {
  const fs = require('fs');
  let gridInStringFormat = fs.readFileSync('./largestProductInAGridInputData','utf8');
  let result = gridInStringFormat.split('\n');
  result.pop();
  result = result.map(elements => elements.split(' '));
  return result;
}

const findLargestProduct = function() {
  let grid = extractInputIntoArray();
  let largestProduct = 0;
  //Horizontal Product finder
  for(let row = 0; row <= 19; row++) {
    for(let column = 0; column <= 16; column++) {
      let product = grid[row][column]*grid[row][column+1];
      product = product * grid[row][column+2];
      product = product * grid[row][column+3];
      if(product > largestProduct) {
        largestProduct = product;
      }
    }
  }
  
  //Vertical Product finder
  for(let column = 0; column <= 19; column++) {
    for(let row = 0; row <= 16; row++) {
      let product = grid[row][column]*grid[row+1][column];
      product = product * grid[row+2][column];
      product = product * grid[row+3][column];
      if(product > largestProduct) {
        largestProduct = product;
      }
    }
  }

  //Diagonal Product finder
  for(let row = 3; row <= 19; row++) {
    for(let column = 0; column <= 16; column++) {
      let product = grid[row][column]*grid[row-1][column+1];
      product = product * grid[row-2][column+2];
      product = product * grid[row-3][column+3];
      if(product > largestProduct) {
        largestProduct = product;
      }
    }
  }

  //Diagonal Product finder
  for(let row = 0; row <= 16; row++) {
    for(let column = 0; column <= 16; column++) {
      let product = grid[row][column]*grid[row+1][column+1];
      product = product * grid[row+2][column+2];
      product = product * grid[row+3][column+3];
      if(product > largestProduct) {
        largestProduct = product;
      }
    }
  }
  console.log(largestProduct);
}

findLargestProduct();
