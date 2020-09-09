str = (prompt('Tjek et ord om det er palindrome'));
function isPalindromic(inStr) { 
    /* En opdatering siden array opgaven. Jeg vil gerne have den til,
    at se bort fra alle karakterer, der ikke er bogstaver. Derfor
    kan brugeren både skrive mellemrum og andre tegn uden at programmet 
    bliver forvirret. */
    inStr = inStr.replace(/\W/g, '');
     /* En opdatering siden opgaven i array. Nu sætter jeg den til,
     at den ser stringen som små bogstaver. så den ikke skelner på det, 
     hvis en bruger skriver et bogstav med stort*/
    inStr = inStr.toLowerCase();
    for (let i = 0; i < inStr.length; i += 1) {  
        if (inStr[i] !== inStr[inStr.length - 1 - i]) { 
            return false;
        }
      }
      return true;
  }
  
  console.log(isPalindromic(str));