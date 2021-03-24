// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

//taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

function shuffle(a) {
    var j, x, i;
    for (i = a.length -1; i > 0; i--) {
        j = Math.floor(math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const response = axios.getCategory('https://jservice.io/')


let getCategory = [320, 235, 245, 230, 195];

this.getCategory = [];
this.clues = {};

this.currentCLue = null;
this.score = 0;




/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds(first, last) {

    returns ("life","good") 
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
    fillTable 
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    fetch('https://jservice.io/')
    .then .showLoadingView; 
    if (null) question;
    if (question) (answer);
    if (answer) none
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

    fetch('https://jservice.io/')
    .then(response => response.json())
      .then(data => {
      // hideSpinner()
      console.log(data)
    });
  }


/** Remove the loading spinner and update the button used to fetch data. */

const spinner = document.getElementById("spinner");

function hideLoadingView() {
    spinner.className = "show";
    setTimeout(() => {
      spinner.className = spinner.className.replace("show", "");
    }, 5000);
  }
  
  // function hideSpinner() {
  //   spinner.className = spinner.className.replace("show", "");
  // }
  
  function loadData() {
    showSpinner()
    fetch('https://jservice.io/')
    .then(response => response.json())
      .then(data => {
      // hideSpinner()
      console.log(data)
    });
  }
  

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    const response = await axios.getCategory('https://jservice.io/')
    for (let answer of response.setupAndStart);

}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

addEventListener(MouseEvent); {
    handleClick(clues)
}