// input olarak yaricapini girdiğiniz dairenin alanini hesaplar

const arguments = process.argv.slice(2);


function circleAreaCalculation(radius){
    return console.log("Yarıçapı " + radius + " olan dairenin alanı: " + Math.PI * radius ** 2);
}

circleAreaCalculation(arguments[0]);