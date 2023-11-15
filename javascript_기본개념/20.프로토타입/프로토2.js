const person = {
  firstName: "초보",
  lastName: "나",
  printName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}
const student = {
  firstName: "신입",
  lastName: "김"
}

console.log(person.printName());
console.log(person.printName.call(student));