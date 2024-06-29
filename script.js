


const products = [
    {
        id: 1,
        title: "React.js Course",
    },
    {
        id: 2,
        title: "Node.js Course",
    },
    {
        id: 3,
        title: "Next.js Course",
    },
    {
        id: 4,
        title: "Vue.js Course",
    },
];

// Initialize filters object with an empty title
const filters = {
    title: "",
};

// Select the search input element using its ID
const searchInput = document.querySelector("#search-value");

// Select the element where courses will be displayed
const courses = document.querySelector(".courses");

// Add an event listener to the search input for input events
searchInput.addEventListener("input", (e) => {
    // Log the value of the input event
    console.log(e.target.value);
    // Update the title filter with trimmed input value
    filters.title = e.target.value.trim();
    // Call the renderProducts function with current products and filters
    renderProducts(products, filters);
});

// Function to render products based on filters
function renderProducts(_products, _filters) {
    // Filter products based on title filter (case insensitive and trimmed)
    const filteredProducts = _products.filter(product => {
        return product.title.toLowerCase().includes(_filters.title.toLowerCase().trim());
    });

    // Clear previous content in the courses element
    courses.innerHTML = ""; 

    // Log filtered products to console for debugging
    console.log(filteredProducts); 
    
    // Iterate over filtered products and create <p> elements for each
    filteredProducts.forEach(item => {
        const p = document.createElement("p"); 
        p.classList.add("course-title"); // Add class 'course-title' to <p> element
        p.textContent = item.title; // Set text content of <p> element to course title
        courses.append(p); // Append <p> element to courses container
    });
}

// Initial call to renderProducts to display all products initially
renderProducts(products, filters); 
