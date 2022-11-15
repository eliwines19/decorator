

var User = function(name) {

    this.name = name;

    this.showInfo = function() {
        console.log(`User: ${this.name}`);
    };

}

var DecoratedUser = function(user, jobTitle, salary) {

    this.user = user;
    this.name = user.name;
    this.jobTitle = jobTitle;
    this.salary = salary;

    this.showInfo = function() {
        console.log(`User: ${this.name}`);
        console.log(`Job Title: ${this.jobTitle}`);
        console.log(`Salary: ${this.salary}`);
    };

}

var run = function() {

    var user1 = new User("Elijah");

    var decorated = new DecoratedUser(user1, "Software Engineer", "$80,000")

    user1.showInfo();
    decorated.showInfo();

}

run();