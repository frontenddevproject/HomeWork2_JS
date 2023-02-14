let str1 = "Hello";
let str2 = "World";
let userLetter = prompt(`Please enter any letter(s) or symbol(s) that replace it by "*" in words "${str1}" and "${str2}". Enter characters according to
register`);

if (userLetter.length === 0){
   userLetter = prompt(`Please enter any character`);
   }

if (userLetter.length > 0) {
   if (str1.includes(userLetter) === true || str2.includes(userLetter) === true) {
      str1 = str1.replaceAll(userLetter, "*");
      str2 = str2.replaceAll(userLetter, "*");
      alert(`Result: "${str1}", "${str2}"`);
   }
      else{
         alert(`These words do not contain such character(s)`);
      }
}
   else {
      alert("GoodBye!");
   }

