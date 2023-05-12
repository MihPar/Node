const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const btn = document.querySelector("btn");

btn.onclick = async function () {
    if (emailInput.value === "" || passwordInput.value === "") {
        return;
    }
    let user = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    emailInput.value = "";
    passwordInput.value = "";

    const response = await fetch("http://localhost:4000/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const responseObj = await response.json();
    if (responseObj.success) {
        window.location.href = "http://localhost:4000/index.html";
    } else {
        document.querySelector(".error").classList.remove("hidden");
        console.log(responseObj.msg);
    }
};
