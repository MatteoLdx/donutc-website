function toggleDarkMode() {
    let root = document.documentElement;
    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
    } else {
        root.classList.add("dark");
    }
};