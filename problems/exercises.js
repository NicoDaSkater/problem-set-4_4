// Question 1
function makeCounter(startingValue){
  return function (){
    startingValue++
    return startingValue
  }
}

// Question 2
class Circle {
  constructor(radius, color){
    this.radius = radius
    this.color = color
  }
  drawCircle(){
    return `Drawing a ${this.color} circle.`
  }
  getCircumference(){
    return Math.PI * this.radius * 2
  }
  getArea(){
    return Math.PI * (this.radius ** 2)
  }
  changeColor(color){
    this.color = color
    return color
  }
}

// Question 3
class Teacher {
  constructor(name, school, grade, subject){
    this.name = name
    this.school = school
    this.grade = grade
    this.subject = subject
    this.students = []
  }
  addStudent(studentName){
    this.students.push(studentName)
    return this.students.length
  }
  changeSchools(schoolName){
    this.school = schoolName
    return this.school
  }
}

// Question 4
class BankAccount {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this._balance = 0
  }
  showBalance() {
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  deposit(amount) {
    this._balance += amount
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  withdraw(amount) {
    if(this._balance < amount){
      return `You do not have enough funds.`
    }else{ 
      this._balance -= amount
      return `Your balance is $${this._balance.toFixed(2)}.`
      
    }
  }
}

module.exports = {
  makeCounter,
  Circle,
  Teacher,
  BankAccount
};