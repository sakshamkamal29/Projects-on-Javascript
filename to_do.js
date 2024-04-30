const input_box = document.getElementById('input_box');
const listContainer = document.querySelector('.list_container');

document.getElementById('addButton').addEventListener('click', () => {
    if (input_box.value === '') {
        alert('Please Write Something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input_box.value = "";
});

listContainer.addEventListener('click', (e)=> {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false);