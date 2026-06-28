document.getElementById("search").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const query = this.value.trim();

        if (query !== "") {
            window.location.href = "results/results.html?q=" + encodeURIComponent(query);
        }
    }
});