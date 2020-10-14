
    function getValuesQuestion(){
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsCategory= document.getElementById('questions-category').value
    const questionsDifficulty= document.getElementById('difficulty').value
    const questionType= document.getElementById('type').value
    console.log(questionsQuantity+questionsCategory,questionsDifficulty,questionType)
    getQuestions(questionsQuantity,questionsCategory,questionsDifficulty,questionType);
    return questionsQuantity,questionsCategory,questionsDifficulty,questionType
}
   function getQuestions(questionsQuantity, questionsCategory,questionsDifficulty,questionType) {
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => printCards(data.results))
     }
   
    let identificador=0;
   function printCards(questions) {
     
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question,index) => {
        const card = returnCardHTML(question,index);
        container.innerHTML += card;
    });
    // poner las preguntas en mi pÃ¡gina web
}

function returnCardHTML(q,index) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers,index)}           
                    </div>
                </div>`
    return card
}

function returnAnswersHTML(correct, incorrects,ind) {
    incorrects.push(correct)
    let incorrectHTML = '';
    incorrects.forEach((incorrect,index) => {
        incorrectHTML += `  <div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer-${ind}" id="answer-${index}${ind}" value="${index}${ind}">
                            <label class="form-check-label" for="answer-${index}${ind}">
                            ${incorrect}
                            </label>
                        </div>
                        </div>`;
                       
                      
    })
    


    return incorrectHTML;
}
getValuesQuestion()
import { getCategories} from './getCategorias.js'
getValuesQuestion()    
getCategories()

window.getValuesQuestion = getValuesQuestion