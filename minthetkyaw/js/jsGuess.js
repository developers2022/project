
for(numcount=1; numcount<10; numcount++){

    numLabel = `<label for='${numcount}'>${numcount}</label><input type='radio' value='${numcount}' id='${numcount}' name='numberChoose' />`;
    numcount % 3 == 0 ? numText = numLabel + '<br/>' : numText = numLabel;
    document.querySelector('#numbox').innerHTML += numText;
    
};

for(let click=1; click<10; click++){
    document.querySelectorAll('input')[click-1].addEventListener('click', () => {
        click == 5 ? alert("yes") : "no" ;
    })
}

