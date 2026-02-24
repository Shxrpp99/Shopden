const products = [
    { // Sample product data
        id: 1,
        name: "Eco-Friendly Paper Bag",
        price: "Rs 50.00",
        image: "Images/pro1.jpg",
        description: "A durable, eco-friendly paper bag made from recycled materials. Perfect for everyday use."
    },
    { // Sample product data
        id: 2,
        name: "Reusable Straw Set",
        price: "Rs 250.00",
        image: "Images/pro2.webp",
        description: "Reusable straw set made from eco-friendly materials. Available in various colors."
    },
    { // Sample product data
        id: 3,
        name: "Bamboo Toothbrush",
        price: "Rs 175.00",
        image: "Images/pro3.webp",
        description: "Toothbrush made from bamboo. Eco-friendly and stylish."
    },
    { // Sample product data
        id: 4,
        name: "Compostable Phone Case",
        price: "Rs 600.00",
        image: "Images/pro4.webp",
        description: "Phone case made from compostable materials. Good for the environment."
    }
];

document.addEventListener('DOMContentLoaded', () => {  // Ensure the DOM is fully loaded
    const viewDetailsButtons = document.querySelectorAll('.view-details'); // Select all "View Details" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Select all "Add to Cart" buttons
    const modal = document.getElementById('product-modal'); // Modal element
    const closeBtn = document.querySelector('.close'); // Close button in the modal
    const modalTitle = document.getElementById('modal-title'); // Modal title element
    const modalImage = document.getElementById('modal-image'); // Modal image element
    const modalDescription = document.getElementById('modal-description'); // Modal description element
    const modalPrice = document.getElementById('modal-price'); // Modal price element 
    const modalAddToCart = document.getElementById('modal-add-to-cart'); // Modal "Add to Cart" button

    viewDetailsButtons.forEach(button => { // Add click event to each "View Details" button
        button.addEventListener('click', (e) => { // On button click
            const productId = e.target.closest('.product').dataset.id; // Get product ID from data attribute
            const product = products.find(p => p.id == productId); // Find product by ID
            if (product) { // If product exists
                modalTitle.textContent = product.name; // Set modal title
                modalImage.src = product.image;   // Set modal image
                modalDescription.textContent = product.description; // Set modal description
                modalPrice.textContent = product.price; // Set modal price 
                modalAddToCart.dataset.id = productId; // Set product ID for modal "Add to Cart" button
                modal.style.display = 'block'; // Show the modal
            }
        });
    });

    closeBtn.addEventListener('click', () => { // Close modal on close button click
        modal.style.display = 'none'; 
    });

    window.addEventListener('click', (e) => { // Close modal when clicking outside of it
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    addToCartButtons.forEach(button => { // Add click event to each "Add to Cart" button
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.target.closest('.product').dataset.id;
            const product = products.find(p => p.id == productId);
            if (product) {
                addToCart(product);
            }
        });
    });

    modalAddToCart.addEventListener('click', (e) => {  // Add to cart from modal
        e.preventDefault();
        const productId = modalAddToCart.dataset.id;
        const product = products.find(p => p.id == productId);
        if (product) {
            addToCart(product);
            modal.style.display = 'none';
        }
    });

function addToCart(product) { // Function to add product to cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}
});

// Form Validation for Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form from submitting
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '') {
                alert('Please enter your name.');
                return;
            }
            
            if (email === '' || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            if (message === '') {
                alert('Please enter a message.');
                return;
            }
            
            // If all checks pass
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        });
    }
});