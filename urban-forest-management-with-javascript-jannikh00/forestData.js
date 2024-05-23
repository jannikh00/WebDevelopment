let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];

// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
console.log("\nTask 1:");
parks[1].name = "Riverside Greenspace";
console.log("Changed Name of Park: " + parks[1].name);

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
console.log("\nTask 2:");
parks[0].trees[0].species = "Sugar Maple";
console.log("Changed name of one tree species in Central Park: " + parks[0].trees[0].species);

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
console.log("\nTask 3:");
console.log("Since this tree already existed in Central Park, I added it to Hilltop Park.");
parks[2].trees[1] = { species: "Birch", age: 7, health: "Good", height: 18 };
console.log("Added tree to Hilltop Park: " + parks[2].trees[1].species + ", " + parks[2].trees[1].age + ", " + parks[2].trees[1].health + ", " + parks[2].trees[1].height);

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
console.log("\nTask 4:");
let centralParkTrees = "";
let len_centralParkTrees = parks[0].trees.length;
for (let i = 0; i < len_centralParkTrees; i++) {
    if (i == len_centralParkTrees - 1) {
        centralParkTrees += parks[0].trees[i].species;
    }
    else {
        centralParkTrees += parks[0].trees[i].species + ", ";
    }
}
console.log("List of Central Park Trees: " + centralParkTrees);

// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
console.log("\nTask 5:");
let treesLenArray = [];
let len_parks = parks.length;
for (let i = 0; i < len_parks; i++) {
    len_current = parks[i].trees.length;
    for (let j = 0; j < len_current; j++) {
        treesLenArray.push(parks[i].trees[j].height);
    }
}
let average = 0;
let len_treesLenArray = treesLenArray.length;
for (let k = 0; k < len_treesLenArray; k++) {
    average += treesLenArray[k];
}
average = average / len_treesLenArray;
console.log("Average age of all trees in parks array: " + average);

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
console.log("\nTask 6:");
let tallestTreeCheck =
{
    species: "",
    height: 0
};
for (let i = 0; i < len_parks; i++) {
    len_current = parks[i].trees.length;
    for (let j = 0; j < len_current; j++) {
        if (parks[i].trees[j].height > tallestTreeCheck.height) {
            tallestTreeCheck.species = parks[i].trees[j].species;
            tallestTreeCheck.height = parks[i].trees[j].height;
        }
    }
}
tallestTree = tallestTreeCheck.species;
console.log("Name of the tallest tree: " + tallestTree);
console.log("Height of the tallest tree: " + tallestTreeCheck.height);

// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
console.log("\nTask 7:");
delete parks[0].facilities[0] // Removing "playground" knowing it leaves an undefined hole in the array
console.log("Updated facilities array from Central Park: " + parks[0].facilities);

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
console.log("\nTask 8:");
let parksJSON = JSON.stringify(parks);
console.log("Parks array as JSON object: \n" + parksJSON);

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
console.log("\nTask 9:");
console.log("Using console.log to display name and facilities for the Central Park item: ");
console.log(parks[0].name);
console.log(parks[0].facilities);

// Task 10: Using console.log, display the species of the third item in the parks array.
console.log("\nTask 10:");
console.log("Using console.log to display the species for the Hilltop Park item: ");
for (let i = 0; i < parks[2].trees.length; i++) {
    console.log("Species " + [i + 1] + " - " + parks[2].trees[i].species)
}
