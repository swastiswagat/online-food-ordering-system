var reviews = [
    {
        name: "Aryan Samal",
        rating: 5,
        review: "This is a great site! I highly recommend it.",
        image: "aryan.jpg"
    },
    {
        name: "Beda Prakash",
        rating: 4,
        review: "I really like this taste of the food. It's easy to use and works well.",
        image: "beda.jpg"
    },
    {
        name: "Jagdish",
        rating: 5,
        review: "This is the best product I've ever used. It's amazing, no 1 site!",
        image: "likun.jpg"
    },
    {
        name: "Shakti",
        rating: 4,
        review: "what a nice site, clean ui with good products in affordable price.",
        image: "ch.jpg"
    
    },
    {
        name: "Bishnu",
        rating: 5,
        review: "I really like this product. It's easy to use and works well.",
        image: "bishnu.jpg"
    
    },
    {
        name: "Mukti",
        rating: 4,
        review: "I really like this product. It's easy to use and works well.",
        image: "mukti.jpg"
    
    },
];

function displayReviews() {
    var reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    for (var i = 0; i < reviews.length; i++) {
        var review = document.createElement("div");
        review.classList.add("review");

        var img = document.createElement("img");
        img.src = reviews[i].image;
        review.appendChild(img);

        var name = document.createElement("h3");
        name.textContent = reviews[i].name;
        review.appendChild(name);

        var rating = document.createElement("p");
        rating.textContent = "Rating: " + reviews[i].rating + " stars";
        review.appendChild(rating);

        var reviewText = document.createElement("p");
        reviewText.textContent = reviews[i].review;
        review.appendChild(reviewText);

        reviewContainer.appendChild(review);
    }
}
document.getElementById("load-more-reviews").addEventListener("click", function() {
    reviews.push({
        name: "New User",
        rating: 5,
        review: "This is a great product! I highly recommend it.",
        image: "https://example.com/image4.jpg"
    });
    displayReviews();
});
displayReviews();