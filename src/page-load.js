import americano from "./images/menu-items/americano.jpg";
import cappuccino from "./images/menu-items/cappuccino.jpg";
import expresso from "./images/menu-items/expresso.jpg";
import iceCoffee from "./images/menu-items/ice-coffee.jpg";
import latte from "./images/menu-items/latte.jpg";
import takeAway from "./images/menu-items/take-away.jpg";

import imageOne from "./images/image-1.jpg";

import pfp from "./images/pfp.png";

const images = [americano, cappuccino, expresso, iceCoffee, latte, takeAway];

const foodDescriptions = [
    "<b>Americano</b>: A strong coffee made by diluting espresso with hot water.",
    "<b>Cappuccino</b>: A coffee drink made with equal parts espresso, steamed milk, and milk foam.",
    "<b>Espresso</b>: A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
    "<b>Iced Coffee</b>: A chilled coffee drink served with ice and often sweetened or mixed with milk.",
    "<b>Latte</b>: A creamy coffee made with a shot of espresso and steamed milk, topped with a small amount of foam.",
    "<b>Takeaway</b>: Food or drinks purchased to be consumed off the premises of the vendor."
];

const foodPrices = [
    "<b>$9.99</b>",
    "<b>$5.49</b>",
    "<b>$2.99</b>",
    "<b>$4.75</b>",
    "<b>$3.89</b>",
    "<b>$6.25</b>"
];
const content = document.querySelector("#content");

export function pageLoad() {
    content.style.backgroundColor = "rgba(183, 159, 144, 0.6)";

    transition();
    setupHome();
    
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", function() {
        content.innerHTML = "";
        transition();
        setupHome();
    });

    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", function() {
        content.innerHTML = "";
        transition();
        setupMenu();
    });

    const aboutButton = document.querySelector("#about");
    aboutButton.addEventListener("click", function() {
        content.innerHTML = "";
        transition();
        setupAbout();
    });

}

function transition() {
    content.classList.remove("zoom-animation"); // Remove it first to reapply
    void content.offsetWidth; // Trigger reflow to restart the animation
    content.classList.add("zoom-animation");
}

function setupAbout() {
    const description = document.createElement("p");
    description.style.fontSize = "1.5rem";
    description.innerHTML = `
    <h1>About Scarfe</h1>

    <p>At <strong>Scarfe</strong>, we blend the art of coffee-making with a <strong>cozy, welcoming atmosphere</strong>. Whether you're enjoying a rich <strong>Espresso</strong>, a smooth <strong>Latte</strong>, or a refreshing <strong>Iced Coffee</strong>, every cup is crafted with care using the finest ingredients.</p>

    <p><strong>Scarfe</strong> is more than just a café—it's a <strong>community hub</strong> where people gather to relax, connect, and enjoy good coffee. Whether you’re stopping by for a quick <strong>Takeaway</strong> or spending time with friends, Scarfe is the perfect spot to unwind and enjoy memorable coffee moments.</p>`;

    const infoContainer = document.createElement("div");

    infoContainer.classList.add("info-container");

    infoContainer.style.display = "flex";
    infoContainer.style.alignItems = "center";
    infoContainer.style.justifyContent = "space-evenly";
    infoContainer.style.margin = "1rem";
    infoContainer.style.border = "2px solid #130C07";
    infoContainer.style.padding = "1rem";
    infoContainer.style.borderRadius = "14rem";
    
    const pfpImage = document.createElement("img");
    pfpImage.src = pfp;
    pfpImage.style.height = "15rem";
    pfpImage.style.borderRadius = "50%";
    pfpImage.style.boxShadow = "1px 1px 10px 0px rgba(0, 0, 0, 0.119)";

    const myName = document.createElement("p");
    myName.classList.add("my-name");
    myName.textContent = "Scartissue";
    myName.style.fontSize = "10rem";

    infoContainer.append(pfpImage);
    infoContainer.append(myName);

    content.appendChild(description);
    content.appendChild(infoContainer);
}

function setupHome() {
    
    const homeGridContainer = document.createElement("div");
    homeGridContainer.style.height = "100%";
    homeGridContainer.style.display = "grid";
    homeGridContainer.classList.add("home-grid-container");
    homeGridContainer.style.gridTemplateAreas = `'text-1 image'
                                                'text-2 image'`; 

    const titleContainer = document.createElement("div");
    titleContainer.style.display = "flex";
    titleContainer.style.height = "10svh";
    titleContainer.style.alignItems = "center";
    titleContainer.style.flexDirection = "column";

    const title = document.createElement("p");
    title.textContent = "Scarfe: ";
    title.style.fontSize = "5rem";
    titleContainer.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "The best place to eat and drink";
    description.style.fontSize = "2rem";
    titleContainer.appendChild(description);



    const image = document.createElement("img");
    image.src = imageOne;
    image.style.height = "auto";
    image.style.width = "95%";
    image.style.margin = "1rem";


    const scarfeDescription = document.createElement("p");
    scarfeDescription.textContent = "Scarfe is a cozy and inviting spot for coffee lovers, offering a wide selection of expertly brewed drinks like Americano, Cappuccino, Espresso, and Iced Coffee. At Scarfe, we believe in combining the art of coffee-making with a warm, welcoming atmosphere. Whether you're looking to enjoy a creamy Latte or grab a quick Takeaway, we’ve got you covered with quality drinks and affordable prices, like $9.99 for our rich Americano or $5.49 for a perfectly foamed Cappuccino. Scarfe Café is where great coffee meets comfort, making it the perfect place to unwind or catch up with friends.";
    scarfeDescription.style.fontSize = "1.5rem";
    scarfeDescription.style.fontSize = "1.7rem";

    titleContainer.style.gridArea = "text-1";
    scarfeDescription.style.gridArea = "text-2";
    image.style.gridArea = "image";

    homeGridContainer.style.gridGap = "1rem";
    
    homeGridContainer.appendChild(titleContainer);
    homeGridContainer.appendChild(image);
    homeGridContainer.appendChild(scarfeDescription);

    content.appendChild(homeGridContainer);

}

let menuGridContainer;

function setupMenu() {

    menuGridContainer = document.createElement("div");
    menuGridContainer.classList.add("menu-grid-container");
    menuGridContainer.style.display = "grid";
    menuGridContainer.style.gridTemplateColumns = "1fr 4fr 1fr 4fr";
    menuGridContainer.style.gridRowGap = "1rem";

    for (let i = 0; i < images.length; i++) {
        setupGrid(images[i], foodDescriptions[i], foodPrices[i]);
    }

    content.appendChild(menuGridContainer);

}

function setupGrid(img, description, price) {
    const foodImage = document.createElement("img");
    foodImage.src = img;
    foodImage.style.height = "23svh";
    foodImage.style.width = "auto";

    const descriptionContainer = document.createElement("div");
    descriptionContainer.style.height = "22svh";
    descriptionContainer.style.display = "flex";
    descriptionContainer.style.justifyContent = "center";
    descriptionContainer.style.alignItems = "flex-start";
    descriptionContainer.style.flexDirection = "column";
    descriptionContainer.style.margin = "0rem 1rem";

    const descriptionPrice = document.createElement("p");
    descriptionPrice.style.fontSize = "2rem";
    descriptionPrice.innerHTML = price;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerHTML = description;
    descriptionParagraph.style.fontSize = "1.4rem";

    descriptionContainer.appendChild(descriptionPrice);
    descriptionContainer.appendChild(descriptionParagraph);

    menuGridContainer.appendChild(foodImage);
    menuGridContainer.appendChild(descriptionContainer);
}