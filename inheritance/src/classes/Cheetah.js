import Cat from "./Cat";

class Cheetah extends Cat{
    constructor(){
        super();
        console.log("Inside Cheetah Constructor.");
    }
    runningSpeed=()=>{
        console.log("Cheetah runs 125 kmph");
    };
    eatingBehaviour=()=>{
        console.log("Cheetah hunts deers and pure non-vegetarian");
    };
    facingHuman=()=>{
        console.log("Cheetah will try to attack on Human, and Human tries to escape");
    };

}
export default Cheetah;