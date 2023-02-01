try 
{
    const msg = document.querySelector('.msg');
    const guess = document.querySelector('input');
    const btn = document.querySelector('.btn');
    let play = false;
    let words = [ 'java', 'php', 'javascript', 'typescript', 'swift', 'reactjs', 'angularjs', 
                  'dotnet', 'nodejs', 'expressjs', 'mongodb', 'mysql', 'oracle', 'nginx', 'aws' ];

    let generate_new_words = () => {
        
    }

    btn.addEventListener('click', function() {
        if(!play)
        {
            play = true;
            btn.innerHTML = 'Guess';
            console.log('guess');

            guess.classList.toggle('hidden');
            generate_new_words();
        }
    })
} 
catch (error) 
{
    console.log('error', error);
}