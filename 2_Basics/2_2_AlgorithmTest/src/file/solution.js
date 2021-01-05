var fileName = process.platform === 'win32' ? 'input.txt' : '/dev/stdin';
var input = fs.readFileSync(fileName).toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
