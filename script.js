
document.querySelector("#cpassword").addEventListener("input", () => {
    let password= document.querySelector("#password").value;
    let confirm = document.querySelector("#cpassword").value;
    let message = document.querySelector(".cerror");

    if (confirm === password){
        message.textContent = "Password match!";
        message.style.cssText = `
        color: green;
        display: block;
        position: relative;
        top: 0;`
    }else{
        message.textContent = "Password do not match!";
        message.style.cssText = `
        color: red;
        display: block;
        position: relative;
        top: 0;`
    }
});
