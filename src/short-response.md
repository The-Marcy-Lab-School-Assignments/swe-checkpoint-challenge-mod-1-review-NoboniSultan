# Short Responses

For this assessment, aim to write a response with the following qualities:
- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

In JavaScript a method or statement returns an `undefined` value if the variable does not have any assigned value. In the aforementioned code, the `if` `else` statement does not return any specific values. 

**Part B:**

#### Part B
In order to fix the code I would add a `return` statement after each conditional statement. 

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
    return "Your grade is: " + letter;
  } else if (score >= 80) {
    let letter = "B";
    return "Your grade is: " + letter;
  } else if (score >= 70) {
    let letter = "C";
    return "Your grade is: " + letter;
  } else {
    let letter = "F";
    return "Your grade is: " + letter;
  }
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

In the console, `75` will be logged because in JavaScript, objects are assigned by reference, not by value. The line `const newSettings = originalSettings;` does not create a new object. It copies the reference to the same object. So, `originalSettings` and `newSettings` both point to the same object in memory. Therefore, `newSettings.volume = 75;` modifies the same object that `originalSettings` refers to. As a result, `console.log(originalSettings.volume);` also logs `75`.


**Part B:**

To prevent changes in `newSettings` from affecting `originalSettings`,
we have to create a copy of the object, not a reference. For example: 

**Corrected Code:**

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; 
newSettings.volume = 75;

console.log(originalSettings.volume); // 50
```
In my example I have used the `(...)` spread operator to create a shallow copy of the `originalSettings` object which prevents `newSettings` from mutating `originalSettings.`

---

## Prompt 3

Given this array of products and the code using `filter`:
```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock
});
```

Walk through what happens in the first iteration of filter:
- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

The value of  `product` is each individual element of the array. The value of the `inStock` key in each object gets returned from the callback. 
