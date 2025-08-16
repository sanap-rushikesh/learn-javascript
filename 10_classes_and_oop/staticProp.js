class User{
  constructor(username){
    this.username = username;
  }
  
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }

  static createId(){
    return `123`;
  }
}

const rushikesh = new User("rushikesh");
// console.log(rushikesh.createId());

class Teacher extends User{
  constructor(username, email){
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iphone", "iphone@dotcom");
iPhone.logMe();
console.log(iPhone.createId());
