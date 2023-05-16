function esEntero(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
      return false;
    }
  
    return (numero % 1 === 0);
  }
  
  
  function mayorArray(arr) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!esEntero(arr[i])) {
          throw new Error('El array debe contener solo números enteros');
        }
      }
  
      let mayor = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
          mayor = arr[i];
        }
      }
  
      let index = 0;
      while (index < arr.length) {
        console.log(arr[index]);
        index++;
      }
  
      let countImpares = 0;
      let j = 0;
      do {
        if (arr[j] % 2 !== 0) {
          countImpares++;
        }
        j++;
      } while (j < arr.length);
  
      console.log(`La cantidad de números impares en el array es: ${countImpares}`);
      return mayor;
    }
  }
  
  let numeros = [ 0,7,9,12,5];
  let mayorNumero = mayorArray(numeros);
  console.log("El número mayor del array es: " + mayorNumero);
  
  

