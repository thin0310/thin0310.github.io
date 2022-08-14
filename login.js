function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null){
        alert("Email hoặc mật khẩu không chính xác")
    }
    else if(email == data.email && password == data.password){
    alert("Đăng nhập thành công")
    window.location.href="home.html"
    }
    else{
    alert("Đăng nhập thất bại, mật khẩu không chính xác");
    }
}