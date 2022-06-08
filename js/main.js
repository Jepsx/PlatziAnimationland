var score=0;
const setScore = ()=>{
    const h2 = document.querySelector('h2');
    h2.innerText = `Score: ${score}`; 
}

const clickScore = ()=>{
    let inputs =[];
    inputs=  document.querySelectorAll('input');
    inputs.forEach((item)=>addEventListenerInput(item));
    
}

const addEventListenerInput = (input)=>{
    input.addEventListener('click',()=>{
        score = score + 1;
        setScore();
    })
}

setScore();
clickScore();