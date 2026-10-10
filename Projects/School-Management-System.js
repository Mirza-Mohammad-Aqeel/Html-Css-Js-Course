
students = [];
teachers = []

class Person {
    constructor (name, age, religion, nationality) {
        this.name = name,
        this.age = age,
        this.religion = religion,
        this.nationality = nationality
    }

}

class Student extends Person {
    constructor (name, age, religion, nationality, grade, marks) {
        super()
        students.push(this)

    }

    study () {
        console.log(`Student - ${this.name} is Studying to Increase its marks from ${this.marks} to ${this.marks += 5}`)
    }

    displayPersonInfo () {
        console.log(`${this.name}'s Info =`)
        console.log(`== Age : ${this.age}`)
        console.log(`== Religion : ${this.age}`)
        console.log(`== Nationality : ${this.age}`)

    }

    changeMarks (newmarks) {
        if (newmarks > 0 && newmarks <= 100) {
            this.marks = newmarks;
            console.log(`Student = ${this.name}'s Marks have been Changed to ${newmarks}`)
        } else {
            console.log(`Given Marks are not Eligible`)
        }

    }

}

class Teacher extends Person {
    constructor (name, age, religion, nationality, subject, salary) {
        super()
    teachers.push(this)

    }

    teach () {
        console.log(`Teacher = ${this.name} is Teaching ${subject} to Students, getting paid ${this.salary} $ per Month`)
    }

    displayPersonInfo () {
        console.log(`${this.name}'s Info =`)
        console.log(`== Age : ${this.age}`)
        console.log(`== Religion : ${this.age}`)
        console.log(`== Nationality : ${this.age}`)

    }

    changeSubject (newsubject) {
        this.subject = newsubject;
        console.log(`Teacher = ${this.name}'s Subject has been Changed to ${newsubject}`)
    }

}

student1 = Student("Collin", 13, "Islam", "British", "A *", 93)
student2 = Student("Erin", 8, "Islam", "Canadian", "B", 76)
student3 = Student("Ali", 16, "Islam", "Pakistani", "A", 81)

teacher1 = Student("Mr Smith", 32, "Christianity", "German", "Advanced Mathematics", 9000)
teacher2 = Student("Mrs Sophie", 38, "Islam", "French", "Arts & Crafts", 8150)
teacher3 = Student("Mr Davis", 35, "Christianity", "Mexican", "Physics", 9500)

student1.displayPersonInfo()
console.log("==========")
student2.displayPersonInfo()
console.log("==========")
student3.displayPersonInfo()
console.log("")

teacher1.displayPersonInfo()
console.log("==========")
teacher2.displayPersonInfo()
console.log("==========")
teacher3.displayPersonInfo()
console.log("")

student1.study()
teacher3.teach()
console.log("")

student2.changeMarks(87)
teacher2.changeSubject("English Literature")

function goodStudents (student) {
    student.marks > 80;
}

function goodPaidTeachers (teacher) {
    teacher.salary > 8500;
}
good_performing_students = students.map(goodStudents)
good_paid_teachers = teachers.map(goodPaidTeachers)

console.log(good_performing_students)
console.log("")
console.log(good_paid_teachers)



