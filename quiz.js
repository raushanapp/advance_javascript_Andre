try {
  const obj = null;
  obj.property = "value";
} catch (error) {
  console.log(error.name);
}

try {
  undeclearedVvariable;
} catch (error) {
  console.log(error.name);
}

try {
  JSON.parse("{ invalidJson: }");
} catch (error) {
  console.log(error.name);
}
