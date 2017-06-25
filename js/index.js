var a = Number(prompt('Введіть A'));
var b = Number(prompt('Введіть B'));
var c = Number(prompt('Введіть C'));

var result = quadraticEquation(a, b, c);
document.write(result);

function quadraticEquation(a, b, c) {
    var result;
    
    if (a === 0) {
        result = 'Рівняння не квадратне, будь ласка введіть A відмінне від 0!';
        return result;
    }
    
    var d = calcD(a, b, c);
    
    if (d > 0) {
        var x1 = (-b + (Math.sqrt(d))) / (2 * a);
        var x2 = (-b - (Math.sqrt(d))) / (2 * a);
    
        return 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if (d === 0) {
        var x = -b / (2 * a);
        
        return x;
    }
 }

function calcD(a, b, c) {
    return b*b - 4*a*c;
}