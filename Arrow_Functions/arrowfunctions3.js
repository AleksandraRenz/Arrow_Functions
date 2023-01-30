/*Q3 Convert the following JavaScript 
function declaration to arrow function syntax:

function counterFunc(counter) {
    if (counter > 100) {
      counter = 0;
    } else {
      counter++;
    }
    
    return counter;
  }
*/

  let counterFunc = counter => 
  {
    if (counter > 100) {
      counter = 0;
    } else {
      counter++;
    }
    
    return counter;
  }

  console.log(counterFunc(120))
  console.log(counterFunc(20))