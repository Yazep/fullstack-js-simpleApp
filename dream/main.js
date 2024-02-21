import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    ShowSpinner();
    const data = new FormData(form);

    // Use the delay function before the fetch call
    await delay(3000); // Waits for 3 seconds

    const response = await fetch('http://localhost:8080/dream',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            
        },
        body: JSON.stringify({
            prompt:data.get('prompt'),

        }),


    });

    if (response.ok){
    const {image}= await response.json();

    const results = document.querySelector('#result');
    results.innerHTML=`<img src="${image}" width="512" />`;
} else {
    const error = await response.text();
    alert(error);
    console.error(error);
}
    hideSpinner();
});



// Function to the site 

function ShowSpinner() {
    const button = document.querySelector('button');
    button.disabled=true;
    button.innerHTML=`Loading ... <span class="spinner">🧠<span/>`;
}

// Function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hideSpinner() {
    const button = document.querySelector('button');
    button.disabled = false;
    button.innerHTML = 'Dream';
  }

  function deploy(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms)) 
  }

