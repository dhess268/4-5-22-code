// Only time for 1 simple problem today it took ~10 mins



// Finds multiples of an integer passed as an argument below a given limit(positive integers only)
function findMultiples(integer, limit) {
    let arr = []
    for(i = 1; i <= limit; i += 1){
      if(i % integer === 0){
        arr.push(i)
      }
    }
    return arr
    
  }
  