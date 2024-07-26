// Array of products
const products = [
    { id: 1, title: "React.js Course" },
    { id: 2, title: "Node.js Course" },
    { id: 3, title: "Next.js Course" },
    { id: 4, title: "Vue.js Course" },
];

// Initialize filters object with an empty title
let filters = { title: "" };

// Select the search input element using its ID
const searchInput = document.querySelector("#search-value");

// Select the element where courses will be displayed
const courses = document.querySelector(".courses");

// Function to debounce input events
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

// Function to render products based on filters
const renderProducts = (_products, _filters) => {
    // Filter products based on title filter (case insensitive and trimmed)
    const filteredProducts = _products.filter(product => {
        const searchTerm = _filters.title.toLowerCase().trim();
        return product.title.toLowerCase().includes(searchTerm);
    });

    // Clear previous content in the courses element
    courses.innerHTML = "";

    // Iterate over filtered products and create <p> elements for each
    filteredProducts.forEach(item => {
        const p = document.createElement("p");
        p.classList.add("course-title"); // Add class 'course-title' to <p> element
        p.textContent = item.title; // Set text content of <p> element to course title
        courses.appendChild(p); // Append <p> element to courses container
    });
};

// Event listener for input events (debounced)
searchInput.addEventListener("input", debounce((e) => {
    // Update the title filter with trimmed input value
    filters.title = e.target.value;
    // Call the renderProducts function with current products and filters
    renderProducts(products, filters);
}, 300)); // Debounce delay set to 300ms

// Initial call to renderProducts to display all products initially
renderProducts(products, filters);
