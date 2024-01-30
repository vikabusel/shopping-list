const input = document.querySelector('#input');
const groceries = document.querySelector('.groceries');

input.addEventListener('keydown', function(event) {

    if(event.key == 'Enter') {
        const text = input.value;

        const newText = document.createElement('div');
        newText.classList.add('items');
        newText.textContent = text;
        newText.addEventListener('click', function() {
            newText.classList.toggle('done');
          })

        if (text != '') {
            groceries.append(newText);
        }

        input.value = '';
        }
});



