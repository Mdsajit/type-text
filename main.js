const texts = ['Developers','Designer','Website Experts'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    //Compares count to text length, when it get to 3 resets its.
    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    //select the class and changes its content to letter
    document.querySelector(".text-type").textContent = letter;
    // As soon as letter length is the same as our currenttext, we go to the next one
    if(letter.length === currentText.length){
        count++;
        //Reset starting from the beginning of the word
        index = 0;
    }
    setTimeout(type, 300);
})();