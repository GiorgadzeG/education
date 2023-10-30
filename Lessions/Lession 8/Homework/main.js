function expoRecursive(base, power, callback) {
    if (power === 0) {
      return 1;
    } else if (power < 0) {
      return 1 / expoRecursive(base, -power, callback);
    } else if (power % 2 === 0) {
      const result = expoRecursive(base, power / 2, callback);
      const squaredResult = result * result;
  
      if (callback) {
        callback(base, power, squaredResult);
      }
  
      return squaredResult;
    } else {
      const halfPower = (power - 1) / 2;
      const result = expoRecursive(base, halfPower, callback);
      const squaredResult = result * result * base;
  
      if (callback) {
        callback(base, power, squaredResult);
      }
  
      return squaredResult;
    }
  }
  
  function exampleCallback(base, power, result) {
    console.log(`${base}^${power} = ${result}`);
  }
  
  const base = 5;
  const power = 3;
  const result = expoRecursive(base, power, exampleCallback);
  






  function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const copyArray = [];
      for (let i = 0; i < obj.length; i++) {
        copyArray[i] = deepCopy(obj[i]);
      }
      return copyArray;
    }
  
    const copyObject = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObject[key] = deepCopy(obj[key]);
      }
    }
  
    return copyObject;
  }
  
  
  const originalObject = {
    name: "Giorgi",
    age: 30,
    address: {
      city: "Tbilisi",
    },
  };
  
  const copiedObject = deepCopy(originalObject);
  
  console.log(originalObject); 
  console.log(copiedObject); 
  