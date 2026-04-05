//  Do all language have type coercion?
//
1 == "1"; // here only checking value not checking types  it mean's  getting true

if (1) {
  console.log(5);
}

NaN === NaN; // this will return false because NaN is not equal to anything including itself
false == ""; // this will return true because false is coerced to 0 and "" is also coerced to 0
false == []; // this will return true because false is coerced to 0 and [] is also coerced to 0
false == {}; // this will return false because false is coerced to 0 and {} is coerced to "[object Object]"
"" == 0; // this will return true because "" is coerced to 0
"" == []; // this will return true because "" is coerced to 0 and [] is also coerced to 0
"" == {}; // this will return false because "" is coerced to 0 and {} is coerced to "[object Object]"
0 == []; // this will return true because 0 is coerced to 0 and [] is also coerced to 0
0 == {}; // this will return false because 0 is coerced to 0 and {} is coerced to "[object Object]"
0 == null; // this will return false because 0 is coerced to 0 and null is coerced to 0
