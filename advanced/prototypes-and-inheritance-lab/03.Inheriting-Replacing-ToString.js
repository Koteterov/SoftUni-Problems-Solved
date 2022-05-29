// Extend the Person and Teacher from the previous task and add a class Student inheriting from Person
// with additional property course. Add toString() functions to all classes, the formats should be as follows:

// •	Person - returns "Person (name: {name}, email: {email})"
// •	Student - returns "Student (name: {name}, email: {email}, course: {course})"
// •	Teacher - returns "Teacher (name: {name}, email: {email}, subject: {subject})"

// Try to reuse code by using the toString() function of the base class.

function toStringExtension() {
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
      toString(value) {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email}${value != undefined ? `, ${value}` : ''})`;
      }
    }
    class Student extends Person {
      constructor(name, email, course) {
        super(name, email);
        this.course = course;
      }
      toString() {
        return super.toString(`course: ${this.course}`);
      }
    }
    class Teacher extends Person {
      constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
      }
      toString() {
        return super.toString(`subject: ${this.subject}`);
      }
    }
    return {
      Person,
      Student,
      Teacher,
    };
  }
  
  
  