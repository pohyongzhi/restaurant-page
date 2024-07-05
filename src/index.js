export function home() {
    const content = document.querySelector("#content");

    // Create left side
    const contentDescGroup = document.createElement("div");
    contentDescGroup.id = "content-desc-group";

    const h1h2Group = document.createElement("div");
    h1h2Group.id = "h1-h2-group";

    const contentH1 = document.createElement("h1");
    contentH1.id = "content-h1";
    contentH1.innerHTML = "The #1 Restaurant In Singapore";

    const contentH2 = document.createElement("h2");
    contentH2.id = "content-h2";
    contentH2.innerHTML = "Where every flavor tells a story.";

    const reservationBtn = document.createElement("button");
    reservationBtn.id = "reservation-btn";
    reservationBtn.innerHTML = "Reservations";

    h1h2Group.append(contentH1);
    h1h2Group.append(contentH2);
    contentDescGroup.append(h1h2Group);
    contentDescGroup.append(reservationBtn);

    // Create right side
    const contentImg = document.createElement("img");
    contentImg.id = "content-img";
    contentImg.src = "assets/noodle.jpg";
    contentImg.alt = "Image of Pasta";

    content.append(contentDescGroup);
    content.append(contentImg);
}

export function menu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.id = "menu";

    // Appetizers
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";

    const menuTitle1 = document.createElement("h2");
    menuTitle1.className = "menu-title";
    menuTitle1.innerHTML = "Appetizers";

    const span1_1 = document.createElement("span");
    span1_1.innerHTML =
        "Amuse-Bouche: Truffle-infused mushroom crostini with a balsamic reduction";

    const span2_1 = document.createElement("span");
    span2_1.innerHTML =
        "Soup: Lobster bisque with a hint of cognac, garnished with fresh chives";

    menuItem1.append(menuTitle1);
    menuItem1.append(span1_1);
    menuItem1.append(span2_1);
    menu.append(menuItem1);

    // Main Course
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";

    const menuTitle2 = document.createElement("h2");
    menuTitle2.innerHTML = "Main Course";

    const span1_2 = document.createElement("span");
    span1_2.innerHTML =
        "Seafood: Pan-seared scallops with a lemon butter sauce,served with a side of asparagus risotto";

    const span2_2 = document.createElement("span");
    span2_2.innerHTML =
        "Poultry: Roasted duck breast with a cherry port reduction, accompanied by wild rice and sautéed Brussels sprouts";

    menuItem2.append(menuTitle2);
    menuItem2.append(span1_2);
    menuItem2.append(span2_2);
    menu.append(menuItem2);

    // Desserts
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";

    const menuTitle3 = document.createElement("h2");
    menuTitle3.innerHTML = "Desserts";

    const span1_3 = document.createElement("span");
    span1_3.innerHTML =
        "Dessert: Crème brûlée with a crisp caramelized sugar crust";

    const span2_3 = document.createElement("span");
    span2_3.innerHTML =
        "Chocolate: Molten chocolate lava cake with vanilla bean ice cream";

    menuItem3.append(menuTitle3);
    menuItem3.append(span1_3);
    menuItem3.append(span2_3);
    menu.append(menuItem3);

    // Petit Fours and Coffee
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";

    const menuTitle4 = document.createElement("h2");
    menuTitle4.innerHTML = "Petit Fours and Coffee";

    const span1_4 = document.createElement("span");
    span1_4.innerHTML =
        "Assortment of petit fours, including macarons,truffles, and fruit tarts, served with freshly brewed espresso or a selection of fine teas";

    menuItem4.append(menuTitle4);
    menuItem4.append(span1_4);
    menu.append(menuItem4);

    content.append(menu);
}

export function about() {
    const content = document.querySelector("#content");

    const about = document.createElement("div");
    about.id = "about";

    const h2 = document.createElement("h2");
    h2.innerHTML = "OUR STORY";

    const p1 = document.createElement("p");
    p1.innerHTML =
        "In 2010, Michel and André's shared vision came to life with the opening of resident. Nestled in a historic building, the restaurant exudes an ambiance of understated luxury, with its opulent décor, crystal chandeliers, and impeccable service. Every detail, from the elegant table settings to the soothing melodies of live piano music, is designed to transport our guests to an era of timeless grace and indulgence.";

    const p2 = document.createElement("p");
    p2.innerHTML =
        "Our team of dedicated professionals, from our talented chefs to our attentive waitstaff, is devoted to providing an unforgettable dining experience. We take pride in crafting each dish with precision and care, ensuring that every bite is a symphony of flavors.";

    about.append(h2);
    about.append(p1);
    about.append(p2);

    content.append(about);
}

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    home();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
});

aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    about();
});

home();
