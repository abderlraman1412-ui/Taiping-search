// 1. تحقق استباقي: لو مسجل دخول، انقله فوراً لصفحة الموقع الرئيسية
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "/welcome.html"; 
}

const form = document.querySelector(".inputs");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const telInput = document.getElementById("tel");
const bornInput = document.getElementById("born");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameValue = nameInput ? nameInput.value.trim() : "";
        const emailValue = emailInput ? emailInput.value.trim() : "";
        const passwordValue = passwordInput ? passwordInput.value : "";
        const telValue = telInput ? telInput.value.trim() : "";
        const bornValue = bornInput ? bornInput.value : "";

        let genderValue = "";
        if (maleRadio && maleRadio.checked) genderValue = "Male";
        else if (femaleRadio && femaleRadio.checked) genderValue = "Female";

        // التحقق من الحقول الفارغة
        if (!nameValue || !emailValue || !passwordValue || !telValue || !bornValue || !genderValue) {
            alert("الرجاء إدخال جميع البيانات واختيار الجنس");
            return;
        }

        const userData = {
            name: nameValue,
            email: emailValue,
            phone: telValue,
            gender: genderValue,
            birthdate: bornValue
        };
        
        // حفظ البيانات وتفعيل الجلسة في الـ localStorage
        localStorage.setItem('registeredUser', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');

        alert("تم تسجيل الدخول بنجاح! 🎉");
        
        // الانتقال الآمن والنسبي الصحيح لصفحة taiping.html
        window.location.href = "/welcome.html";
    });
}