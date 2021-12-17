// ! MODIFIED BASED ON Source: https://viblo.asia/p/factory-method-creational-patterns-maGK7WLOKj2

class Employee {
  constructor(hourlyRate, type) {
    this.hourlyRate = hourlyRate;
    this.type = type;
  }

  static get createEmployee() {
    return new EmployeeFactory();
  }

  log() {
    console.log(
      `Employee: {\nHour rate = ${this.hourlyRate}, Type = ${this.type}\n}`
    );
  }
}

class EmployeeFactory {
  static newFulltimeEmployee(hourlyRate) {
    return new Employee(hourlyRate, "fulltime");
  }

  static newParttimeEmployee(hourlyRate) {
    return new Employee(hourlyRate, "parttime");
  }

  static newTempEmployee(hourlyRate) {
    return new Employee(hourlyRate, "temporary");
  }

  static newContractorEmployee(hourlyRate) {
    return new Employee(hourlyRate, "contractor");
  }
}

function run() {
  let employees = [];

  employees.push(EmployeeFactory.newFulltimeEmployee(12));
  employees.push(EmployeeFactory.newParttimeEmployee(11));
  employees.push(EmployeeFactory.newTempEmployee(10));
  employees.push(EmployeeFactory.newContractorEmployee(15));

  for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].log();
  }
}

run();
