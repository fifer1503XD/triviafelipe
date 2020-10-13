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
    alert('ingresa a pintar preguntas')
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => printCards(data.results))
}
        // .then(data => printCards(data.results))

function getCategories() {
    const questionsQuantity = document.getElementById('questions-number').value
    fetch(`https://opentdb.com/api_category.php`)
        .then(response => response.json())
        .then(data => Categories(data.trivia_categories))  
}

function Categories(data){
    const categories = document.getElementById('questions-category')
    data.forEach(data=>{
        const Category = `<option id"${data.id}" value="${data.id}">${data.name}</option>`
        categories.innerHTML += Category;
    })
    console.log(data)
}

// console.log(datos);

function printCards(questions) {
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach(question => {
        const card = returnCardHTML(question);
        container.innerHTML += card;
    });
    // poner las preguntas en mi página web
}

function returnCardHTML(q) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers)}           
                    </div>
                </div>`
    return card;
}


function returnAnswersHTML(correct, incorrects) {
    const correctHTML = `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${correct}
                            </label>
                        </div>`;


    let incorrectHTML = '';
    incorrects.forEach((incorrect) => {
        incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${incorrect}
                            </label>
                        </div>`;
    })


    return correctHTML + incorrectHTML;
}
getCategories()