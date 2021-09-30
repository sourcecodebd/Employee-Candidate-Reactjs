const pressOnBar = () => {
    let toggleBar = document.getElementById('toggle-bar');
    let mobileNav = document.querySelector('.mobile-nav');
    toggleBar.classList.toggle('spin');
    mobileNav.classList.toggle('show-mobile-nav');
}

export { pressOnBar }