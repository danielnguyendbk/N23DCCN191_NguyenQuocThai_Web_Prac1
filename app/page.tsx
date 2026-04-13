async function getPosts() {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
}
export default async function HomePage() {
const posts = await getPosts();
// ... render ...
}