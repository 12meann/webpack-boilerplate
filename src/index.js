import "./main.scss";

let test = () => console.log("webpack boilerplate  from index.js");
//shows support for async/await es6 syntax
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

fetchPosts().then(posts => console.log(posts));

test();
