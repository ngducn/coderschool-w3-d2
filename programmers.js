const programmers = [
    "Dennis Ritchie",
    "Brian Kernighan",
    "Ken Thompson",
    "Linus Torvalds",
    "Bjarne Stroustrup",
    "Tim Berners-Lee",
    "Donald Knuth",
    "Alan Turing",
    "Mark Zuckerberg",
    "Bill Gates",
    "Larry Page",
    "Elon Musk",
    "Jack Dorsey",
    "Satoshi Nakamoto",
    "Ada Lovelace",
    "Grace Hopper",
    "Dan Ambramov",
    "Jordan Walke",
    "Ryan Dahl",
    "David Heinemeier Hansson",
    "Guido van Rossum",
    "Yukihiro Matsumoto",
    "Sergey Brin",
    "Lyndsey Scott",
    "Abhinav Asthana",
    "Abhijit Kane",
    "Ankit Sobti",
    "Loi Tran",
    "Charles Lee",
    "Tuan Nguyen",
    "Tan Vo",
  ];
  
  
  function threePointOne() {
    // 3.1
    function printFirstName(element) {
      console.log("printFirstName", element);
      return element.split(" ")[0];
    }
  
    // Produces new array.
    const newProgrammers = programmers.map(printFirstName);
  
    document.getElementById("3.1").innerHTML = newProgrammers.join(", ");
  }
  
  threePointOne()
  
  
  function threePointTwo() {
    function lastName(element) {
      return element.split(" ").slice(-1)[0];
    }
  
    // Produces new array.
    const newProgrammers = programmers.map(lastName);
  
    document.getElementById("3.2").innerHTML = newProgrammers.join(", ");
  }
  
  threePointTwo()
  
  function threePointThree() {
    function firstNameLength(element) {
        let str = element.split(" ")[0]
        return str.length;
    }
  

    // Produces new array.
    const newProgrammers = programmers.map(firstNameLength);
  
    document.getElementById("3.3").innerHTML = newProgrammers.join(", ");
  }
  
  threePointThree()

  function threePointFour() {
    function lastNameLength(element) {
        let str = element.split(" ").slice(-1)[0]
        return str.length;
    }
  

    // Produces new array.
    const newProgrammers = programmers.map(lastNameLength);
  
    document.getElementById("3.4").innerHTML = newProgrammers.join(", ");
  }
  
  threePointFour()
  
  function threePointFive() {
    function nameLength(element) {
        let str = element
        return str.length;
    }

    // Produces new array.
    const newProgrammers = programmers.map(nameLength);
  
    document.getElementById("3.5").innerHTML = newProgrammers.join(", ");
  }
  
  threePointFive()

  function threePointSix() {
    function firstName(element) {
        return element.split(" ")[0];
      }

    // Produces new array.
    const newProgrammers = programmers.map(firstName);
  
    document.getElementById("3.6").innerHTML = newProgrammers.sort().join(", ");
  }
  
  threePointSix()

  function threePointSeven() {
    function lastName(element) {
        return element.split(" ").slice(-1)[0];
      }

    // Produces new array.
    const newProgrammers = programmers.map(lastName);
  
    document.getElementById("3.7").innerHTML = newProgrammers.sort().join(", ");
  }
  
  threePointSeven()

  function threePointEight() {
    function firstName(element) {
        return element.split(" ")[0];
      }

    // Produces new array.
    const newProgrammers = programmers.map(firstName);
  
    document.getElementById("3.8").innerHTML = newProgrammers.sort(function(a, b){return a.length - b.length}).join(", ");
  }
  
  threePointEight()

  function threePointNine() {
    function lastName(element) {
        return element.split(" ").slice(-1)[0];
    }

    // Produces new array.
    const newProgrammers = programmers.map(lastName);
  
    document.getElementById("3.9").innerHTML = newProgrammers.sort(function(a, b){return a.length - b.length}).join(", ");
  }
  
  threePointNine()

  function threePointTen() {
    function firstName(element) {
        return element.split(" ")[0];
    }

    // Produces new array.
    const newProgrammers = programmers.map(firstName);
    const result = newProgrammers.filter(name => name[0] === "L")
  
    document.getElementById("3.10").innerHTML = result.join(", ");
  }
  
  threePointTen()

  function threePointEleven() {
    function lastName(element) {
        return element.split(" ").slice(-1)[0];
    }

    // Produces new array.
    const newProgrammers = programmers.map(lastName);
    const result = newProgrammers.filter(name => name[0] === "T")
  
    document.getElementById("3.11").innerHTML = result.join(", ");
  }
  
  threePointEleven()