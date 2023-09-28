$(document).ready(function() {
    // Define the URL of your JSON API
    const apiUrl = 'https://dummyjson.com/products/1';

    // Fetch data from the API
    $.getJSON(apiUrl, function(data) {
        // Check if the data was fetched successfully
        if (data && data.length > 0) {
            // Loop through each product and display it
            data.forEach(function(product) {
                const productContainer = $('#product-container');
                const productDiv = $('<div>').addClass('product');
                const productName = $('<h2>').text(product.name);
                const productPrice = $('<p>').text('Price: $' + product.price);
                const productDescription = $('<p>').text(product.description);

                // Append product details to the product container
                productDiv.append(productName, productPrice, productDescription);
                productContainer.append(productDiv);
            });
        } else {
            // Display an error message if the data couldn't be fetched
            const errorMessage = $('<p>').text('Failed to fetch product data.');
            $('#product-container').append(errorMessage);
        }
    });
});
