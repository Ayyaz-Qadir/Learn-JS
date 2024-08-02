/******* For Loop with Break & Continue ******/

// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`outer loop value: ${j} & inner loop ${i}`);
    }   
}


for (let i = 1; i <= 10; i++) {
    // console.log(`\nTable of ${i} \n`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + ' * ' +  j + ' = ' + i*j );
    }
}

let myArray = ["A", "B", "C", "D" ] 

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break & continue

// for (let index = 1; index <= 8; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break // if want to break the contol flow then we use the break
//     }
//     console.log(`Value of index is ${index}`);    
// }

for (let index = 1; index <= 8; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue; // it will show if value & remaning values will not show & take next value of loop
    }
    console.log(`Value of index is ${index}`);    
}