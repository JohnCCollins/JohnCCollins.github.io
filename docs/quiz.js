// Arrays

let counter = 1;

let correct = 0;

let completeCorrect = [];

let completeIncorrect = [];

const opt = ['a', 'b', 'c', 'd'];

const answers = [];



// display main contents of page
function run() {

    // display question #s throughout quiz
    document.querySelector('.counter').innerHTML = `<p>Question ${counter} of 10</p>`;

    document.getElementById('currentAntelope').innerHTML = `<h1 class="quiz-text">Antelope #${counter} is...</h1>`;
   
    //remove any empty elements on each reiteration of function
    antelope = antelope.filter(item => item)

    // populate answers a-d with species names
    for (let i = 0; i < 4; i++) {
        
        // choose random species
        let j = Math.floor(Math.random() * antelope.length);
        
        // insert chosen species into new 'answers' array
        answers[i] = antelope[j];
        
        // remove chosen species from original 'antelope' array
        antelope.splice(j, 1);

        //populate multiple choice option with chosen species name
        document.querySelector('.options').innerHTML += `<button class="answer" id="${opt[i]}" type="submit" 
        onclick="optionClick(this.id)"><h3 class="names">${answers[i].type}</h3></button>`;

    };

    // select correct answer from answers array
    correct = Math.floor(Math.random() * answers.length);
    
    //display image of result
    document.querySelector('.image-wrap').innerHTML = `<img src="${answers[correct].photo}" class="ant-image">`;
};

run();

// if any answer clicked
function optionClick(clicked_id) {
    let j = clicked_id;
    let k = document.getElementById(j);

    let i = opt[correct];

    if (i == j) { // correct answer clicked
        k.style.backgroundColor = 'green';
        completeCorrect[counter-1] = answers[correct];

    } else { // incorrect answer clicked
        k.style.backgroundColor = 'crimson';
        completeIncorrect[counter-1] = answers[correct];
    }
    
    //display correct answer above image
    document.getElementById('currentAntelope').innerHTML = `<h1 class="quiz-text">${answers[correct].type}!</h1>`;

    // disable all 'option' buttons
    const qButtons = document.getElementById("qBox").getElementsByTagName('*');
    for (var node of qButtons) {
    node.disabled = true;
    }

    //Remove correct answer from 'answer array
    answers.splice(correct, 1);

     //store remaining answers back into original 'antelope' array
     for (let i = 0; i < 4; i++) {
        let j = antelope.length +1;
        antelope[j] = answers[i];
    }

    //display 'Next Question' button
    document.getElementById('qBox').innerHTML += '<button id="nextButton"><h1 class="next">Continue</h1></button>';
    const clickNext = document.getElementById('nextButton');

    // if 'Next Question' button clicked
    clickNext.addEventListener('click', () => {
        if (counter < 10) {
            
            counter++;
            
            // reset 'Name that antelope' to default state
            document.getElementById('currentAntelope').innerHTML = `<h1 class="quiz-text"> antelope species #${counter} is:</h1>`;
            
            // reset 'option' buttons to default state
            var answersEl = document.getElementById('qBox');
            while ( answersEl.firstChild ) {
                answersEl.removeChild(answersEl.firstChild);
            }
            
            // proceed to next question
            run();
            
        } else { // if all questions answered
            
            // remove any empty objects from array
            completeCorrect = completeCorrect.filter(item => item)
            
            // remove any empty objects from array
            completeIncorrect = completeIncorrect.filter(item => item)
            
            // display quiz results
            alert(`You guessed ${completeCorrect.length} antelope correctly, and ${completeIncorrect.length} incorrectly. Check out the Gallery for more info on the species!`);
        };
    });  

};


