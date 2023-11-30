// console.log(2 == "2") //  checks only data

// console.log(2 === "2") // check data and datatype


// ;
// const response = await axios.get("/products")

// { data: { message: "Porducts fetched successfully.", products : products } }

// console.log(response.data.message)


// const { data } = await axios.get("/products")
// console.log(data.message)

const myObject = { myname: "irise", myAge: 5 };

console.log(myObject.myname)

const { myname, myAge } = myObject;

console.log(myname)
console.log(myAge)


