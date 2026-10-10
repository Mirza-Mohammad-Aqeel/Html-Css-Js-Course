
class Student {
    constructor (name, age, grade, marks) {
        this.name = name,
        this.age = age,
        this.grade = grade,
        this.marks = marks
    }

    displayStudentinfo () {

        console.log(`Student Name = ${this.name}`);
        console.log(`Student Age = ${this.age}`);
        console.log(`Student Grade = ${this.grade}`);
        console.log(`Student Marks = ${this.marks}`);

    }

    ispassing () {
        if (this.marks >= 50) {
            console.log(`Is ${this.name} passing = True`)
        } else {
            console.log(`Is ${this.name} passing = Falase`)
      
        }
    }
 
}

student1 = new Student("Alex",14,"A *",97)
student2 = new Student("Luna",8,"C *",74)

student1.displayStudentinfo()

console.log("")

student2.displayStudentinfo()

console.log("")

student1.ispassing()
student2.ispassing()