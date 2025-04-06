 // Check if this is a page refresh
 if (sessionStorage.getItem("refreshed")) {
    // Redirect to index.html if the page is refreshed
    localStorage.clear();
    window.location.href = "../index.html";

} else {
    // Set a sessionStorage flag on first page load
    sessionStorage.setItem("refreshed", "true");
}