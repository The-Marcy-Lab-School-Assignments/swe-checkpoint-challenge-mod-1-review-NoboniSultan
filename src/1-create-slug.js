// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const bannedCharacters = ["!", "#", "?"];
  for (const char of bannedCharacters) {
    if (title.includes(char)) {
      return null;
    }
  }
  return title.toLowerCase().split(" ").join("-");
};
console.log(createSlug("Hello World")); // "hello-world"
console.log(createSlug("My First Blog Post")); // "my-first-blog-post"
console.log(createSlug("JavaScript Is AWESOME")); // "javascript-is-awesome"
console.log(createSlug("JavaScript Is #AWESOME!?")); // null

module.exports = {
  createSlug,
};

