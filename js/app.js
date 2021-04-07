'use strict';

function clicking(){


    let score = 0;

    function q1 (){
    let userName = prompt('Can you please tell me what is your name?');
    alert('Hello ' + userName + '!! I am so glad to meet you, we are gonna have so much fun!!');
    confirm('Okay ' + userName + ', there is a fun game about me, you have to answer some questions. Are you ready? Well, let\'s get started!!');
    let Q1 = prompt('Do you think I am enjoying this scholarship?');
    switch(Q1.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('It is a little bit hard but yes, I am enjoying it');
            alert('It is a little bit hard but yes, I am enjoying it');
            score++;
            console.log(score);
            break;
        case 'no':
        case 'n':
            //console.log('Wrong!');
            alert('Wrong!');
        default:
            alert('Dude!!');
    }

}
 q1 ();


 function q2 (){
    let Q2 = prompt('I prefer CSS rather than Javascript');
    switch(Q2.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('NO I don\'t like it at all :(');
            alert('NO I don\'t like it at all :(');
            break;
        case 'no':
        case 'n':
            score++;
            console.log(score);
            //console.log('RIGHT!!');
            alert('RIGHT!!');  
    }
}
q2 ();

   function q3 (){
    let Q3 = prompt('I like watching TV shows and my favorite one is Supernatural, Yes or No?');
    switch(Q3.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('CORRECT! it\'s my favorite');
            alert('CORRECT! it\'s my favorite');
            score++;
            console.log(score);
            break;
        case 'no':
        case 'n':
            //console.log('Unfortunately, you\'re wrong!');
            alert('Unfortunately, you\'re wrong!');
    }
}
    q3() ;


    function q4 (){
    let Q4 = prompt('Writing is one of my favorite hobbies. What do you think?');
    switch(Q4.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('I love writing!');
            alert('I love writing!');
            score++;
            break;
        case 'no':
        case 'n':
            //console.log('Well, sorry but it\'s wrong');
            alert('Well, sorry but it\'s wrong');
    } }
    q4();

    function q5 (){
    let Q5 = prompt('I love reading!!');
    switch(Q5.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('I DON\'T like reading at all!);
            alert('I DON\'T like reading at all!');
            break;
        case 'no':
        case 'n':
            //console.log('You nailed it');
            alert('You nailed it');
            score++;
            console.log(score);
    }  }
    q5 () ;



    let favColors = ['red',  'blue', 'black'];
    let y = false;
    let Q7 = prompt('Can you guess my favorite colors?');
    for (let i=0; i<5; i++){
        for (let j=0; j<favColors.length; j++){
            if(Q7.toLowerCase() === favColors[j]){
                alert('That is Right!');
                score++;
                console.log(score);
                y = true;
            }
        }
     if(y){
        break;      
    }
      
    }


    
    let a = 3;
    for (let i = 0; i<4; i++){
        var Q6 = prompt('As I mentioned before Supernatural is my favorite TV show, How many times do you think I have re-watched it?');
        if(parseInt(Q6)>a){
            console.log('Too High!');
            alert('Too High!');
    }   else if (parseInt(Q6)<a){
            console.log('Too Low!');
            alert('Too Low!');
    }   else if (parseInt(Q6) === a){
        alert('Correct!')
        score++;
        console.log(score);
        break;
    } 
    }
       if (parseInt(Q6) !== a ){
           alert('Sorry! The right answer is ' + a);
    


    alert('Sorry! you reached your limits!');

 } 

 alert('your score is ' + score +' out of 7!');
 alert('I hope you enjoyed this game, because I did!!, Thank you ' + userName + ' for visiting my website!' );


}  

    