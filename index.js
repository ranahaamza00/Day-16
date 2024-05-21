var laptop = {
    make: "Dell",
    model: "5490",
    year: 2021,
    describe: function () {
        console.log("This laptop ia a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
