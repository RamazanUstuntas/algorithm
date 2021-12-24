function circleArea (radius) {
    return console.log("Result Area: ", Math.PI*radius**2);
}

function circleCircumference (radius) {
    return console.log("Result Circumference: ", 2*Math.PI*radius);
}

module.exports = {
    circleArea,
    circleCircumference
};