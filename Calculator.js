

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button Text = ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try{
            screen.value = eval(screenValue);}
            catch{
                screen.value="Something Went Wrong!";
            }
        }
        else if ( buttonText=='←'){
            if(screen.innerText){
            screen.value=screen.innerText.slice(0,-1); }
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}