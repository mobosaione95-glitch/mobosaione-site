const WEB_APP_URL = "YOUR_WEB_APP_URL";

function sendForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const model = document.getElementById("model").value.trim();
    const problem = document.getElementById("problem").value.trim();
    const captcha = document.getElementById("captcha").value.trim();

    // سوال امنیتی
    if (captcha !== "8") {
        alert("پاسخ سوال امنیتی اشتباه است.");
        return;
    }

    // بررسی نام
    if (name.length < 3) {
        alert("نام را صحیح وارد کنید.");
        return;
    }

    // بررسی شماره موبایل ایران
    if (!/^09\d{9}$/.test(phone)) {
        alert("شماره موبایل معتبر نیست.");
        return;
    }

    // بررسی مدل گوشی
    if (model.length < 2) {
        alert("مدل گوشی را وارد کنید.");
        return;
    }

    // بررسی توضیح مشکل
    if (problem.length < 10) {
        alert("لطفاً مشکل گوشی را کامل‌تر بنویسید.");
        return;
    }

    fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            model: model,
            problem: problem
        })
    })
    .then(() => {
        alert("✅ درخواست شما با موفقیت ثبت شد.");

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("model").value = "";
        document.getElementById("problem").value = "";
        document.getElementById("captcha").value = "";
    })
    .catch(() => {
        alert("❌ خطا در ارسال اطلاعات.");
    });
}
