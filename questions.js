var selectElementsStartingWithA = function(array) {
    var tab = [];    
    for (var i = 0 ; i < array.length ; i++) {
        var first_letter = array[i].charAt(0);
        if (first_letter === 'a') {
            tab.push(array[i]);
        }
    }    
    return tab;
}

var selectElementsStartingWithVowel = function(array) {
    var tab = [];    
    for (var i = 0 ; i < array.length ; i++) {
        var first_letter = array[i].charAt(0);
        if (first_letter === 'a' || first_letter === 'e' || first_letter === 'i' || first_letter === 'o' 
        || first_letter === 'u' || first_letter === 'y') {
            tab.push(array[i]);
        }
    }    
    return tab;
}

var removeNullElements = function(array) {
    var tab = [];
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] != null) {
            tab.push(array[i]);
        }
    }     
    return tab;
}

var removeNullAndFalseElements = function(array) {
    var tab = [];
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] !== null && array[i] !== false) {
            tab.push(array[i]);
        }
    }     
    return tab;
}

var reverseWordsInArray = function(array) {
    var tab = [];
    for (var i = 0 ; i < array.length ; i++) {
        tab.push(array[i].split("").reverse().join(""));
    }    
    return tab;
}

/*var everyPossiblePair = function(array) {
}*/    

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
