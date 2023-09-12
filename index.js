// Code your solution in this file!
function distanceFromHqInBlocks(d){
    if (d<42){
        let differenceBetweenHq = 42 - d
        return differenceBetweenHq
    }else {
        let distanceAbove = d - 42 
        return distanceAbove
    }
}
function distanceFromHqInFeet(currentBlock){
    let distanceBlock = distanceFromHqInBlocks(currentBlock)
    return distanceBlock * 264 

 }
function distanceTravelledInFeet(startingPoint, destinationPoint){
    if(startingPoint< destinationPoint){
        return (destinationPoint - startingPoint) * 264
    }else{
        return (startingPoint - destinationPoint) * 264 
    }
}
function calculatesFarePrice(start, destination){
// first 400 feet are free for all 
// every foot after 400 to 2000 is 2 cent not counting the first 400 feet
// if its over 2000 and under 2500 its a flat feet of 25 dollars
// if its over 2500 then ride is not allowed
let distanceTravelled=distanceTravelledInFeet(start, destination)
    if (distanceTravelled<=400){
    return (0);
}  
     else if (distanceTravelled>400 && distanceTravelled <= 2000 ){
    return (distanceTravelled - 400) * .02

}
    else if ( distanceTravelled > 2000 && distanceTravelled <= 2500){
    return 25 
}
    else {
    return "cannot travel that far"
    }
}