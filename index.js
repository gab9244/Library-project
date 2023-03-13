let myLibrary = []
 



    function Book(title, author, pages,read,isread,remove){
    this.bookId = `book${++Book.id}`
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.isread= isread
    this.remove = remove
   
    }

 function render(){
   cardsSpace.innerHTML =''
   
 
    for(let i = 0; i< myLibrary.length;i++)
    {
       
        let cards = document.createElement('div')
        
        
        cards.classList.add('cards')
       
        cards.setAttribute('id', `${i}`)
        cardsSpace.append(cards)
        let book = myLibrary[i]
        
      cards.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>`
      cards.append(book.read)
      cards.append(book.remove)
      
      
       
    }
    
 }
function addBooksToLibrary(){

    let Title = document.getElementById('title').value
    let Author = document.getElementById('author').value
    let Pages = document.getElementById('pages').value
    let checkbox = document.getElementById('checkbox')

    //Read button code
    let buttonOfcheck = document.createElement('button')
    if(checkbox.checked == true){
    buttonOfcheck.innerHTML='Read'}
    else {
        buttonOfcheck.innerHTML ='NoReaded'
        buttonOfcheck.style.backgroundColor = 'red'
    }
    buttonOfcheck.classList.add('buttunOfCheckbox')
  
    buttonOfcheck.addEventListener('click', ()=>{
        if(buttonOfcheck.style.backgroundColor =='red') {
                buttonOfcheck.style.backgroundColor ='#7CE578'
                buttonOfcheck.innerHTML ='Read'      
        } else {
            buttonOfcheck.style.backgroundColor ='red'
            buttonOfcheck.innerHTML='NoReaded'
        }
       
        
    })
    let removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'Remove'
    removeBtn.classList.add('removeBtn')
    let newBook = new Book(Title, Author, Pages,buttonOfcheck, checkbox,removeBtn)
    myLibrary.push(newBook)
   
    render()

   removeBtn.addEventListener('click', (index) =>{
            myLibrary.splice(index, 1)
            removeBtn.parentElement.remove()

   })
   
        
  
}


// Taking the DOM elements
let formContainer = document.getElementById('formContainer')
let submitBtn = document.getElementById('submitBtn')
let cardsSpace = document.getElementById('cards-space')
let inputs = document.querySelectorAll('input')
let form = document.getElementById('card')
let buttons = document.querySelectorAll('button')
let checkbox = document.getElementById('checkbox')


submitBtn.addEventListener('click', ()=>{
   
    addBooksToLibrary()
   
})



 



 
