const checkButton = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');
checkButton.addEventListener('click', () => {
    const text = input.value;
    if(text === ''){
        alert('Please input a value');
    }
    let string=(text.trim()).toLowerCase();
    string = string.replace(/[^a-z0-9]/g, '');
    console.log(string);
    const reversed = string.split('').reverse().join('');   //reverses string
    console.log(reversed);
    if(string === reversed){
        result.innerText=`${text} is a palindrome`;
    }
    else{
        result.innerText=`${text} is not a palindrome`;
    }
    result.style.display = 'block';

});