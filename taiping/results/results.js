const params = new URLSearchParams(window.location.search);
const query = params.get("q");

document.getElementById("searchBox").value = query;

const resultsDiv = document.getElementById("results");

// حماية صفحة النتائج: لو مش مسجل دخول، اطرده لصفحة الـ index
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "/index.html"; 
}

// ... باقي كود الـ fetch والبحث الخاص بك يكمل هنا بالأسفل بشكل طبيعي ...

// 🔥 البحث الحقيقي باستخدام Serper
fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
        "X-API-KEY": "5603a9e73c675834b35aacd4d64456f0bf5ef85e",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        q: query
    })
})
.then(res => res.json())
.then(data => {

    resultsDiv.innerHTML = "";

    data.organic.forEach(item => {

        const div = document.createElement("div");
        div.className = "result";

        div.innerHTML = `
    <div class="url">${item.link}</div>
    <a href="${item.link}" target="_blank">${item.title}</a>
    <p>${item.snippet}</p>
`;

        resultsDiv.appendChild(div);
    });

})
.catch(err => {
    resultsDiv.innerHTML = "في مشكلة في البحث 😢";
    console.error(err);
});
function highlight(text, word) {
    return text.replace(new RegExp(word, "gi"), match => 
        `<span style="color:#00b4ff">${match}</span>`
    );
}
document.getElementById("searchBox").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const newQuery = this.value.trim();

        if (newQuery !== "") {
            window.location.href = "results.html?q=" + encodeURIComponent(newQuery);
        }
    }
});