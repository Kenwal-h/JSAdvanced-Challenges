//function to display a star for each full rating and a full-stop for each half rating.

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}

console.log(showRating(3.5))

//function to sort by lowest to highest price given an array

function sortLowToHigh(price) {
    return price.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 5, 10, 4]))

//function to sort by highest to lowest price given an array of objects

function sortHighToLow(objects) {
    return objects.sort((a, b) => b.price - a.price)
}

console.log(sortHighToLow([{id: 1, price:50,}, 
    {id: 2, price: 30}, 
    {id: 3, price: 60}, 
    {id: 4, price: 10}
])
);

// Async/Await function to call the API ("https://jsonplaceholder.typicode.com/posts") and return all posts by a given userId

async function fetchPosts(userId) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json();
    const filteredPostsById = posts.filter(element => element.userId === userId)
    console.log(filteredPostsById)
}

fetchPosts(5);


// Async/Await function to call the API ("https://jsonplaceholder.typicode.com/todos") and return the first 6 incomplete todo's from the result

async function firstSixIncomplete() {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await todos.json();
    const incomplete = result.filter(element => !element.completed).slice(0, 6);
    console.log(incomplete)
}
firstSixIncomplete();