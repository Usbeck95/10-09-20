const str = 'regninger';
//definerer function
function isPalindromic(inStr) { 
// looper igennem begge ender af string og tjekker om de matcher hinanden    
    for (let i = 0; i < inStr.length; i += 1) {  
/*hvis bogstavet på plads 0 i arrayet ikke er lige med det sidste bogstav i stringen, 
så sletter man 1 pga 0 index i arrayet og så minus med i for at gå igennem stringet */
        if (inStr[i] !== inStr[inStr.length - 1 - i]) { 
// så hvis ovenstående er tilfældet, så er ordet ikke et palindron. Derfor skal den skrive falsk
            return false;
      }
    }
    return true;
}

console.log(isPalindromic(str));