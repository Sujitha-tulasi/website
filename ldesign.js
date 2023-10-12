var a=(document.getElementById("password").value);
console.log(a.length);
func=()=>
{
    
    
        // Password must be at least 8 characters long
        if (a.length < 8) {
            document.getElementById("res").textContent="length must be atleast 8 characters";
        }
      
        // Password must contain at least one uppercase letter
        if (!/[A-Z]/.test(a)) {
            document.getElementById("res").textContent="password must consist of atleast one uppercase ";
        }
      
        // Password must contain at least one lowercase letter
        if (!/[a-z]/.test(a)) {
            document.getElementById("res").textContent="password must consist of atleast one lowercase";
        }
      
        // Password must contain at least one digit
        if (!/[0-9]/.test(password)) {
            document.getElementById("res").textContent="lpassword must consist of atleast one digit";
        }
      
        // Password must contain at least one special character
        if (!/[@#$%^&+=]/.test(password)) {
            document.getElementById("res").textContent="password must consist of atleast one special character";
        }
      
        // All conditions passed, password is valid
        return true;
      }
      

