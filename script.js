const input = document.querySelector('#input');
const groceries = document.querySelector('.groceries');

input.addEventListener('keydown', function (event) {

    if(event.key == 'Enter') {
        const text = input.value;

        const newText = document.createElement('div');
        newText.classList.add('items');
        newText.textContent = text;
    
        if (text != '') {
            groceries.append(newText);
        }

        input.value = '';
    };
    
    const newText = document.querySelectorAll('.items');
    for (let points of newText) {
        points.addEventListener('click', function() {
          points.classList.toggle('done');
        })
      }
})



