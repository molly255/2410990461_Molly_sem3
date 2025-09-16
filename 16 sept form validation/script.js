function data(){
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      const name = document.getElementById('name').value;
      const confirmpassword = document.getElementById('confirmpassword').value;


      if(email=="" || phone=="" || password=="" || name=="" || confirmpassword==""){
        alert("All fields are mandatory!");
              }

      else if(phone.length<10 || phone.length>10){
        alert("Phone number must be 10 digits long!");
              }
      else if(isNaN(phone)){
        alert("Phone number must contain only digits!");
              }
      else if(password.length<6){
        alert("Password must be at least 6 characters long!");
              }
      else if(!email.includes('@') || !email.includes('.')){
        alert("Email must contain '@' and '.'!");
              }
      else if(password!=confirm-password){    
        alert("Password and Confirm Password must be same!");
              }

    }