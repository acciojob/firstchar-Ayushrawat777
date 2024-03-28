function firstChar(text) {
  // your code here
	
let result = text.trim();
let data= result.charAt(0);
return data

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
