class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    get getPassword(){
        const isLength = this.password.length >= 8;
        const hasNumber = /\d/.test(this.password);
        const hasUppercase = /[A-Z]/.test(this.password);
        if(isLength && hasNumber && hasUppercase){
            return '*'.repeat(this.password.length);
        }else{
            return(`Password Must be at least 8 characters long and contain at least one number and one upper case letter`)
        }
    }

    set setPassword(value){
        this.password = value;
    }
}

const user = new User('paresh', 'mApassword123');
console.log(user.getPassword); // Output: "*****************"

// If you want to update the password using the setter:
user.setPassword = 'NewPassword';
console.log(user.getPassword); 