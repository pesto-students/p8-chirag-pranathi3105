var person = function (){};


    person.prototype.initialize = function(name,age)
    {
        this.name = name
        this.age = age
    }
  /*   person.prototype.details = function()
    {
        console.log(this.name +" age is "+this.age)
    } */

class Teacher extends person
{
    teach(subject)
    {
        console.log(this.name +" is now teatching " +subject)
    }
}
let him = new Teacher();
him.initialize("John",45)
him.teach("English")