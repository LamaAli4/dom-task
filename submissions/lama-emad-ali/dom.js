// Task 1
//solution:
// 1- Starting from document.body, write code that logs (in order):
const body = document.body;
console.log(body);

//- The tag name of the last element child of, using only navigation properties (no query selectors).
console.log(`Last element child of body: ${body.lastElementChild.tagName}`);

//- The number of element children in (not text nodes).
console.log(`Number of element children in body: ${body.children.length}`);

//- The difference in length between childNodes and children of.
const childNodesLength = document.body.childNodes.length;
const childrenLength = document.body.children.length;
const difference = childNodesLength - childrenLength;

console.log(
  `body childNodes length: ${childNodesLength}, body children length: ${childrenLength}, difference: ${difference}`
);

// Explain why they differ?
// childNodes includes all node types
// children includes only element nodes.
// The difference comes from whitespace text nodes between elements in the HTML.

// 2- Determine:
// What is the nodeType and nodeName of the first node in document.body.childNodes?
const { nodeType, nodeName } = document.body.childNodes[0];
console.log(`node type: ${nodeType}, node name: ${nodeName}`); // 3  #text

// Is the first paragraph a sibling of the second, or a descendant?
const firstP = document.querySelector("p");
const secondP = firstP.nextElementSibling;
console.log(`Is siblings?: ${firstP.parentElement === secondP.parentElement}`);

//Twist: Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
[...document.body.childNodes].forEach((node) => {
  if (node.nodeType === 3) {
    console.log("text Node:", node);
  }
});

// Task 2: Synthetic DOM Injection
/*
<div class="card" data-role="admin">
  <h2>Access Panel</h2>
  <p>Authenticated</p>
</div>
*/
const container = document.createElement("div");
const title = document.createElement("h2");
const message = document.createElement("p");

container.classList.add("card");
container.dataset.role = "admin";

title.textContent = "Access Panel";
message.textContent = "Authenticated";

container.appendChild(title);
container.appendChild(message);
document.body.appendChild(container);

// Log the value of the data-role as a JS property, not via .getAttribute.
console.log(`role: ${container.dataset.role}`);

// Change the paragraph text to "Welcome back, Admin" using a property, not a method.
message.textContent = "Welcome back, Admin";

// Add two classes to the div: "authenticated" and "highlight" using classList.
container.classList.add("authenticated", "highlight");

// Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.
if (container.classList.contains("card")) {
  container.classList.remove("card");
}
console.log(container.className);
