var Q1 =  [ 
    { 
        name: "kashif", 
        rollNumber: "EP123", 
        marks: { 
            OS: 75, 
            AI: 79, 
            DLD: 85 
        }  
    }, 
    { 
        name: "Raza", 
        rollNumber: "EP058", 
        marks: { 
            OS: 89, 
            AI: 68, 
            DLD: 71 
        }  
    }, 
    { 
        name: "Zubair", 
        rollNumber: "EP102", 
        marks: { 
            OS: 57, 
            AI: 45, 
            DLD: 60 
        }  
    }, 
]
Q1.forEach(function(CurrentElement){
    console.log(`-----------------------`);
    console.log(`Name - ${CurrentElement.name}`);
    console.log(`Roll Number - ${CurrentElement.rollNumber}`);
    console.log(`Marks :`);
    console.log(`OS - ${CurrentElement.marks.OS}`);
    console.log(`AI - ${CurrentElement.marks.AI}`);
    console.log(`DLD - ${CurrentElement.marks.DLD}`);
    

});


//Q2

var Q2 =   [ 
    { 
        name: "Kashif", 
        age: 23, 
        experience: 5, 
        credit: 20000 
    }, 
    { 
        name: "Raza", 
        age: 18, 
        experience: 1.5, 
        credit: 12000 
    }, 
    { 
        name: "zubair", 
        age: 37, 
        experience: 7, 
        credit: 45000 
    }, 
     
] 
console.log("---------------Q2-----------------")
var newSalary = Q2.map(function(CurrentElement){
    if(CurrentElement.experience > 4){
        return `name: ${CurrentElement.name}, age: ${CurrentElement.age}, experience: ${CurrentElement.experience}, credit: ${CurrentElement.credit + 10000}`
    }
    else{
        return `name: ${CurrentElement.name}, age: ${CurrentElement.age}, experience: ${CurrentElement.experience}, credit: ${CurrentElement.credit + 10000}`
    }
});

console.log(newSalary)

//Q3
var Q3 =  [ 
    { 
        name: "kashif", 
        rollNumber: "EP123", 
        marks: { 
            OS: 75, 
            AI: 79, 
            DLD: 85 
        }  
    }, 
    { 
        name: "Raza", 
        rollNumber: "EP058", 
        marks: { 
            OS: 89, 
            AI: 68, 
            DLD: 71 
        }  
    }, 
    { 
        name: "Zubair", 
        rollNumber: "EP102", 
        marks: { 
            OS: 57, 
            AI: 45, 
            DLD: 60 
        }  
    }, 
] 

var AIStudents = Q3.filter(function(CurrentElement){
    return CurrentElement.marks.AI > 60;
});
console.log("-----------------------Q3-----------------")
AIStudents.forEach(function(CurrentElement){
    console.log(`-----------------------`);
    console.log(`Name - ${CurrentElement.name}`);
    console.log(`Roll Number - ${CurrentElement.rollNumber}`);
    console.log(`Marks :`);
    console.log(`OS - ${CurrentElement.marks.OS}`);
    console.log(`AI - ${CurrentElement.marks.AI}`);
    console.log(`DLD - ${CurrentElement.marks.DLD}`);
    

});

//Q4
console.log("---------------Q4------------")
var Q4 =  [ 
    { 
        item: "laptop", 
        quantity: 73 
    },  
    { 
        item: "mobile", 
        quantity: 209 
    },  
    { 
        item: "wallet", 
        quantity: 790 
    },  
    { 
        item: "mac", 
        quantity: 0 
    },  
    { 
        item: "handfree", 
        quantity: 1084 
    },  
] 

var shipment = Q4.every(function(CurrentElement){
    return customElements.quantity > 0;
});
if (shipment == true){
    console.log("Shipment is allowed");
}
else{
    console.log("Shipment is not allowed");
}

//Q4

console.log("--------------Q5--------------")
var Q5 =  [ 
    { 
        item: "bag", 
        quantity: 2, 
        price: 2000 
    }, 
    { 
        item: "data cable", 
        quantity: 4, 
        price: 500 
    }, 
    { 
        item: "shoes", 
        quantity: 1, 
        price: 4000 
    }, 
] 

var sum = Q5.reduce(function(Price , CurrentElement){
    return Price + CurrentElement.price;
},0);

console.log("--------------------------------");
console.log(`Total Amount : ${sum}`);
console.log("--------------------------------");