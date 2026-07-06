function login() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(password === "KEIL2810"){

        sessionStorage.setItem("authorised","true");

        window.location.href = "subject001.html";

    }else{

        message.innerHTML = "❌ ACCESS DENIED<br>UNAUTHORISED PERSONNEL";

        message.style.color="#ff3b3b";

    }

}
