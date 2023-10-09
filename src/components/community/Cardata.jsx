const Carddata = [
  {
    id : 1,
    code: `const x = 10;
const y = 11;
let z = x + y;
console.log(z);
for (let i = 0; i <= 100; i++) {
  i + i * (i + 1) + i;
}
`,
    language: "javascript",
  },
  {
    id : 2,
    code: `x = 10
y = 11
z = x + y
def addNum(y, x, z) :
  return y + x * z + z
result = addNum(y, x, 10) 
print(result)
`,
    language: "python",
  },
    {
    id : 3,
    code: `func main() {
var name string
name = "Open Order"
age := 25
fmt.Println("Name:", name)
fmt.Println("Age:", age)
}
`,
    language: "go",
  },
  {
    id : 4,
    code: `<?php
echo "Hello, World!" . PHP_EOL;
$name = "Open Order";
$age = 75;
echo "Name:" . $name . PHP_EOL;
echo "Age:" . $age . PHP_EOL;
?>

`,
    language: "php",
  },
   {
    id : 5,
    code: `int main() {
int num1 = 10, num2 = 7, num3 = 15;
int max = (num1 > num2) ?
((num1 > num3) ? num1 : num3) :
((num2 > num3) ? num2 : num3);
std::cout << "Max number is: " << max << std::endl;
return 0;
}
`,
    language: "c++",
  },
   {
    id : 6,
    code: `console.log("Open Order");
console.log("code snippets");
let num1: number = 5;
let num2: number = 10;
let num3: number = num1 + num2;
const max: number = Math.max(num1, num2, num3);
console.log(\`The maximum number is : \${max}\`)
`,
    language: "typescript",
  },
   {
    id : 7,
    code: `num1 = 10
num2 = 7
num3 = 15
num4 = num1 + num2 + num3
num5 = num4 - num1 + num2
max = [num1, num2, num3, num4, num5].max
puts "The maximum number is #{max}" 
`,
    language: "ruby",
  }
];

export default Carddata;
