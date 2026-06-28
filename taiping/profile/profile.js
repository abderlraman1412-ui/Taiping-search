// 1. حماية الصفحة: منع الدخول بدون تسجيل
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "/index.html"; 
}

// 2. جلب البيانات المخزنة وعرضها
const userDataString = localStorage.getItem('registeredUser');

if (userDataString) {
    const userData = JSON.parse(userDataString);
    
    if(document.getElementById("profile-name")) document.getElementById("profile-name").textContent = userData.name;
    if(document.getElementById("profile-email")) document.getElementById("profile-email").textContent = userData.email;
    if(document.getElementById("profile-phone")) document.getElementById("profile-phone").textContent = userData.phone;
    if(document.getElementById("profile-gender")) document.getElementById("profile-gender").textContent = userData.gender;
    if(document.getElementById("profile-born")) document.getElementById("profile-born").textContent = userData.birthdate;
}

// 3. منطق زر تسجيل الخروج
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.setItem("isLoggedIn", "false");
        alert("تم تسجيل الخروج بنجاح.");
        window.location.href = "/index.html";
    });
}