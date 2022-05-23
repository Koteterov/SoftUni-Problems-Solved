class Company {
  constructor() {
    this.depts = {};
    this.avgSalary = {};
  }

  addEmployee(name, salary, position, department) {
    if ([...arguments].some((arg) => arg == "" || arg == undefined || arg == null) || salary < 0) {
      throw new Error("Invalid input!");
    } else {
      let newEmployee = {
        name,
        salary,
        position,
        department,
      };
      if (!this.depts.hasOwnProperty(department)) {
        this.depts[department] = [];
        this.avgSalary[department] = {
          totalEmployees: 0,
          totalSalary: 0,
          average: 0,
        };
      }
      this.depts[department].push(newEmployee);
      this.avgSalary[department].totalEmployees++;
      this.avgSalary[department].totalSalary += salary;

      this.avgSalary[department].average =
        this.avgSalary[department].totalSalary /
        this.avgSalary[department].totalEmployees;

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  }

  bestDepartment() {
    let bestDept = Object.entries(this.avgSalary)
      .sort((a, b) => b[1].average - a[1].average)
      .shift();

    let result = `Best Department is: ${bestDept[0]}`;
    result += `\nAverage salary: ${bestDept[1].average.toFixed(2)}`;

    this.depts[bestDept[0]].sort(
      (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
    );

    this.depts[bestDept[0]].forEach((x) => {
      result += `\n${x.name} ${x.salary} ${x.position}`;
    });
    return result;
  }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.addEmployee("Gosho", 1, "HR", "Human resources");
console.log(c.bestDepartment());



