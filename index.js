let myLibrary =[]
let Title = document.getElementById('title')
let Author = document.getElementById('author')
let Pages = document.getElementById('pages')
 function Books (Title, Author, Pages,Read){
        this.Title = Title
        this.Author = Author
        this.Pages = Pages
        this.Read = Read
        
    }



// Taking the DOM elements
let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('card')
let buttons = document.querySelectorAll('button')
let formContainer = document.getElementById('formContainer')
let checkbox = document.getElementById('checkbox')
let inputs = document.querySelectorAll('input').value

 function render(){
    let cardsSpace = document.getElementById('cards-space')
        cardsSpace.innerHTML =''
    for(let i = 0; i<myLibrary.length;i++){
    let book = myLibrary[i]
    let cards = document.createElement('div')
    cards.classList.add('cards')
    cards.innerHTML = `<p>${book.Title}</p>
                        <p>${book.Author}</p>
                        <p>${book.Pages}</p>
                        <button class ='removeBtn' onclick ='removeBook(${i})'>Remove</button>`
                        cards.append(book.Read)
 
                      
                       
                        
    cardsSpace.append(cards)
   
  
   
}

 }

 
 

 function removeBook(index){
    myLibrary.splice(index,1)
    render()
 }
function addBookToLibrary(){
    let Title = document.getElementById('title').value
    let Author = document.getElementById('author').value
    let Pages = document.getElementById('pages').value
  



    //Read button code
    let buttonOfcheck = document.createElement('button')
    if(checkbox.checked == true){
    buttonOfcheck.innerHTML='Readed'}
    else {
        buttonOfcheck.innerHTML ='NoReaded'
        buttonOfcheck.style.backgroundColor = 'red'
    }
    buttonOfcheck.classList.add('buttonOfCheckbox')
  
    buttonOfcheck.addEventListener('click', ()=>{
        if(buttonOfcheck.style.backgroundColor =='red') {
                buttonOfcheck.style.backgroundColor ='#7CE578'
                buttonOfcheck.innerHTML ='Readed'      
        } else {
            buttonOfcheck.style.backgroundColor ='red'
            buttonOfcheck.innerHTML='NoReaded'
        }
       
})
   
let newBook = new Books(Title, Author, Pages, buttonOfcheck)
    myLibrary.push(newBook)
    render()
  
}

    
    submitBtn.addEventListener('click', ()=>{
        //The cards will only be created if all the inputs all correctly filled out
        if(Title,Author,Pages.checkValidity() == true){

        addBookToLibrary()
    }
      
          
    })



 
