function addition(a, b){
    console.log(a+b)
  }
  
  addition(2, 4)
  
  function salutation(nom){
    console.log("Bonjour "+ nom)
  }
    
  salutation("Warren")
  
  function estPair(nombre){
    if (nombre % 2 === 0){
      console.log("true")
    }else{
      console.log ("false")
    }
      }
  estPair(4)
  
  
  function aireRectangle(a, b) {
    console.log(a*b)
  }
  
  aireRectangle(3, 5)
  
  
  
  
  
   function maxDeuxNombres(a, b) {
     if(a > b){
       return a
     }else{
       return b
     }
   }
  console.log(maxDeuxNombres(23, 10))
              
   function difference(a, b) {
     if(a > b){
       return a - b
     }else{
       return b - a
     }
   }
  
  console.log(difference(3, 12));
  
  function estMajeur(age){
    if (age >= 18){
      return true
    }else{
      return false
    }
      }
  console.log(estMajeur(20))
  console.log(estMajeur(16))
  
  