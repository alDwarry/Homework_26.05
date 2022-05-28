let el = document.querySelector('input[name="test"]');
el.addEventListener('change', (ev) => {

    let text = ev.target.value; 
    let x = document.querySelector('.test');
    x.innerHTML = text;
    }
)
