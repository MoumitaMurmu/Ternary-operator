Ternary Operator is an alternative of if/else
Syntax: condition ? <expression if true> : <expression if false>
before:
function myAge(age){
  if (age>18) {
 return 'Adult';
} else {
  return 'Not Adult'
}
}
 myAge(20);

Now using Ternary Operator:
function myAge(age){
 return age>18 ? 'Adult' : 'Not Adult';
}
 myAge(20);

