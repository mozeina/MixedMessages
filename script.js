//FORTUNE TELLER FOR 2024

const situations = {
    love :  ['single', 'in love', 'in a complicated situation', 'crushing on someone'],  
    status : ['rich', 'famous', 'broke', 'rich & famous', 'unknown'],
    health : ['in perfect health', 'temporarily sick', 'diagnosed with a strong disease']
}

// NOW we create a function to randomize these words

function randomize (num) {
    return Math.floor(Math.random() * num)
}

//Here we make the index of each key a random number from 0 to the length of the value array - 1 so we can generate random results;

const randomLove = randomize(situations.love.length); // Here this should give us a random index from 0 to the length of the love array -1;
const randomStatus = randomize(situations.status.length); //Here this should give us a random index from 0 to the lenght of the status array - 1 (in this case 0 - 4)
const randomHealth = randomize(situations.health.length);

//This is used to split the array elements on new lines

function arrayFixer(array) {
    return array.join('\n')
}

let arrayOfSentences = ["2024 FORTUNE TELLER"];
function sentenceGenerator (){
    for (let situation in situations){
        switch (situation) {
            case 'love':
                arrayOfSentences.push(`In 2024, you will be ${situations.love[randomLove]}`);
                break;
            case 'status': 
                arrayOfSentences.push(`In terms of status, you will be ${situations.status[randomStatus]}`);
                break;
            case 'health':
                arrayOfSentences.push(`Health wise, you will be ${situations.health[randomHealth]}`);
                break;
            default:
                console.log('An error has occured');
        }
    }
    console.log(arrayFixer(arrayOfSentences));
}

sentenceGenerator();
