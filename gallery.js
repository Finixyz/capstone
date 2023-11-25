document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
  
    let cart = [];
  
    // Function to add products to the product container
    function addProduct(id, name, price) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('width-25');
      productDiv.innerHTML = `
        <div class="product-section">
          <!-- Your existing product HTML goes here -->
          <p class="product-name">${name}</p>
          <p class="product-price">$${price.toFixed(2)}</p>
          <button class="add-to-cart" data-id="${id}">Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(productDiv);
  
      // Add event listener for the "Add to Cart" button
      const addToCartButton = productDiv.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', () => {
        addToCart(id, name, price);
        updateCart();
      });
    }
  
    // Function to add items to the cart
    function addToCart(id, name, price) {
      const existingItem = cart.find(item => item.id === id);
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }
    }
  
    // Function to update the cart display
    function updateCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
      });
  
      cartTotal.innerText = total.toFixed(2);
    }
  
    // Checkout button event listener
    checkoutButton.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out.');
      } else {
        alert('Checkout successful! Thank you for your purchase.');
        // Clear the cart
        cart = [];
        updateCart();
      }
    });
  
    // Add sample products
    addProduct(1, 'New iPhone 11 Max Pro 64 GB', 549.00);
    addProduct(2, 'Samsung Galaxy S21', 699.00);
    // Add more products as needed...
  });
  