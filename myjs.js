function welcome (){
    alert('Welcome to the shop!');
    let securityAnswer = prompt('On average how many months do potatoes take to mature (Answer number 0-5 please.)');
    while(securityAnswer != 4){
        securityAnswer = prompt('Wrong! Please answer again.');
    }
    alert('Congrats! You answer right!');
}

function ageLimit (){
    const userAnswer1 = prompt('Are you 18+ years old? (Fill only number please.)');
    console.log('User typed:' + userAnswer1);
    if(userAnswer1 >= 18){
        const userAnswer2 = prompt('Are you sure you are 18+? (Fill only yes or no please.)').toLowerCase();
        if(userAnswer2 === "yes"){
            document.write('Come on in!');
        } else {
            document.write('You are too young for this! Come back later.');       
        }  
    } else {
        document.write('You are too young for this! Come back later.');
    }
    document.write(' You claim your age is ' + userAnswer1 + ' years old.');
}


