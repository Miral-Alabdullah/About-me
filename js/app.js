'use strict';

function clicking(){
    let Q1 = prompt('I have a favorite color, and I like most of its shades. Do you think it is green?');
    switch(Q1.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('No! can\'t you see the website? it is RED! ^_^');
            alert('No! can\'t you see the website? it is RED! ^_^');
            break;
        case 'no':
        case 'n':
            //console.log('Correct! My favorite is red. You pay attention to details!! You\'re awesome');
            alert('Correct! My favorite is red. You pay attention to details!! You\'re awesome');
    }
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
            //console.log('RIGHT!!');
            alert('RIGHT!!');
    }
    let Q3 = prompt('I like watching TV shows and my favorite one is Supernatural, Yes or No?');
    switch(Q3.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('CORRECT! it\'s my favorite');
            alert('CORRECT! it\'s my favorite');
            break;
        case 'no':
        case 'n':
            //console.log('Unfortunately, you\'re wrong!');
            alert('Unfortunately, you\'re wrong!');
    }
    let Q4 = prompt('Writing is one of my favorite hobbies. What do you think?');
    switch(Q4.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('I love writing!');
            alert('I love writing!');
            break;
        case 'no':
        case 'n':
            //console.log('Well, sorry but it\'s wrong');
            alert('Well, sorry but it\'s wrong');
    }
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
    }  
    let userName = prompt('Can you please tell me what is your name?');
    alert('Well Hello ' + userName + '!! I am so glad to meet you');
    let Q6 = prompt('Have you enjpyed the game?');
    switch(Q6.toLowerCase())
    {
        case 'yes':
        case 'y':
            //console.log('I am so happy to know that ' + userName + ', I would like to get to know you as well');
            alert('I am so happy to know that ' + userName + ', I would like to get to know you as well');
            break;
        case 'no':
        case 'n':
            //console.log('Sorry to know that ' + userName + 'I will try my best next time!!');
            alert('Sorry to know that ' + userName + 'I will try my best next time!!');
    } 

}