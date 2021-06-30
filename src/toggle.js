const profileMenuButton = document.getElementById("profileMenuButton");
    const profileMenu = document.getElementById("profileMenu");

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileSideNav = document.getElementById("mobileSideNav");

    const shippingRatesButton = document.getElementById("shippingRatesButton");
    const individualShippingRatesLinks = document.getElementById("individualShippingRatesLinks");

    profileMenuButton.addEventListener("click", () => {
        profileMenu.hidden = !profileMenu.hidden;
    });

    mobileMenuButton.addEventListener("click", () => {
        mobileSideNav.hidden = !mobileSideNav.hidden;
    });

    shippingRatesButton.addEventListener("click", () => {
        individualShippingRatesLinks.hidden = !individualShippingRatesLinks.hidden;
    });