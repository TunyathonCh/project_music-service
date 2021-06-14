function checkPass() {
	
    var get_elem = document.getElementById,
    password = document.getElementById('password'),
    password2 = document.getElementById('password2'),
    colors = {
    goodColor: "#7CFC00",
    badColor: "	#FF0000"
    }
    var btn = document.getElementById('confirmMessage');
    if(password.value === password2.value & password.value.trim()!='' ) { //trimคือตัดspace เอาค่าว่างๆออก

    password.style.borderColor = colors["goodColor"];
    password2.style.borderColor = colors["goodColor"];
    btn.disabled = false;
    }else {
    password.style.borderColor = colors["badColor"];
    password2.style.borderColor = colors["badColor"];
    btn.disabled = true;
    }
    }  
