//RANDOM PASSWORD GENERATOR


// DOM ELEMENTS
const passwordLengthE1 = document.getElementById("passwordLength");
const includeLowercaseE1 = document.getElementById("includeLowercase");
const includeUppercaseE1 = document.getElementById("includeUppercase");
const includeNumbersE1  = document.getElementById("includeNumbers");
const includeSymbolsE1 = document.getElementById("includeSymbols");
const submitBtn = document.getElementById("submitBtn");
const ResultsE1 = document.getElementById("Results");

//EVENT LISTENER
submitBtn.addEventListener("click", function (e){
    e.preventDefault();// prevent page reset
    const length1 = parseInt(passwordLengthE1.value);
    const includeLowercase = includeLowercaseE1.checked;
    const includeUppercase = includeUppercaseE1.checked;
    const includeNumbers = includeNumbersE1.checked;
    const includeSymbols = includeSymbolsE1.checked;

    const password = generatePassword(length1,
                                   includeLowercase,
                                   includeUppercase,
                                   includeNumbers,
                                   includeSymbols);
                                 // console.log(password)
    ResultsE1.textContent = password
});

//PASSWORD GENERATION

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "%!:&<>$#(){}-+*/=-[],.|";

    let allowedChars = "";
    let password = "";

        if(includeLowercase) allowedChars +=  lowercaseChars;
        if(includeUppercase) allowedChars += uppercaseChars;
        if(includeNumbers) allowedChars += numberChars;
        if(includeSymbols) allowedChars += symbolChars;
        
        if(length <= 3 || isNaN(length)){
            return "(Password length must be at least 4)";
        }

        if(allowedChars.length === 0){
            return  "(Please select at least one character set)";
        }

        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;
        
    }



