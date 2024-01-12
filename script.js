try 
{
    const msg = document.querySelector('.msg');
    const guess = document.querySelector('input');
    const btn = document.querySelector('.btn');
    let play = false;
    let newWords = "";
    let randomWords = "";
    let words = [ 'java', 'php', 'javascript', 'typescript', 'swift', 'react', 'angular', 
                  'dotnet', 'nodejs', 'expressjs', 'mongodb', 'mysql', 'oracle', 'nginx', 'aws' ];

    let generate_new_words = () => {
        let randomNumber = Math.floor( Math.random() * words.length );
        // console.log('randomNumber', randomNumber);
        let element = words[ randomNumber ];
        
        // console.log('element', element.split(""));
        return element;
    }

    let scramble_words = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const temp = arr[i];
            // console.log('temp', temp);
            let j = Math.floor( Math.random() * (i + 1) );
            // console.log('j', j);
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    btn.addEventListener('click', function() {
        if(!play)
        {
            play = true;
            btn.innerHTML = 'Guess';
            // console.log('guess');

            guess.classList.toggle('hidden');
            newWords = generate_new_words();
            randomWords = scramble_words(newWords.split("")).join("");
            // console.log('randomWords', randomWords);
            msg.innerHTML = `Guess the Word : ${randomWords}`;
        }
        else
        {
            let tempWord = guess.value;
            if(tempWord === newWords)
            {
                // console.log(true);
                play = false;   
                msg.innerHTML = `Fantastic, It's Correct. It is ${newWords}`;
                btn.innerHTML = "Start Again";
                guess.classList.toggle('hidden');
                guess.value = "";
            }
            else
            {
                // console.log(false);
                msg.innerHTML = `Sorry Boss, It's Incorrect. Please Try Again ${randomWords}`;
                // guess.value = "";
            }
        }
    })
} 
catch (error) 
{
    console.log('error', error);
}