let h1 =document.querySelector('h1')
let button =document.querySelector('button')

button.addEventListener('click',()=>{
    let idinput = document.getElementById('id').value
    let parolinput = document.getElementById('parol').value

    if(idinput == 1234 && parolinput == 12345){
        h1.textContent ='Xush kelibsiz'
    } else{
       h1.textContent = 'Turing yoqoling bu yerdan'
       h1.style.color = 'red'
    }

    
})