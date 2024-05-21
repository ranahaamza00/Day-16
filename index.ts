

let laptop = {
    make : "Dell",
    model : "5490",
    year : 2021,
    describe : function(){
        console.log(`This laptop ia a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
