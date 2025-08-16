class User{
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email = value;
  }

  get password(){
    return `${this._password}rushikesh`
  }

  set password(value){
    this._password = value
  }

}

const rushikesh = new User("r@rushikesh.ai", "abc");
// console.log(rushikesh.password);
console.log(rushikesh.email);