class Cat{
    constructor(){
        console.log("Inside Cat Constructor.");

        this.noOfLegs = 4;
        this.noOfEars = 2;
        this.noOfNose = 1;
    }
    eatingBehaviour=()=>{
        console.log("Cat hunts Rats and drinks milk");
    };
    sleepingBehaviour=()=>{
        console.log("Cat sleeps on terrace");
    };
    runningSpeed=()=>{
        console.log("Cat runs 25 kmph");
    };
    facingHuman=()=>{
        console.log("Cat runs away from Human");
    };

    

}

export default Cat