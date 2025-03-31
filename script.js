const questions = [
    {
        question: "Partha Pratim Das’s Famous Dialogue",
        extra: "Partha Pratim Das is known for saying his PPT will be done in how long?",
        options: [
            "15 minutes (Classic PPD, always underestimating… kinda like how you hide your true feelings)",
            "10 minutes (Enough time for the 'it’s fine, I’ll just keep ignoring what I’m really feeling')",
            "5 minutes (the time it takes for you to stare at that one person before looking away)",
            "Who cares? No one listens. (A bit like how you ignore the signs, huh?)"
        ]
    },
    {
        question: "Vadiraja's Indifference",
        extra: "Your Math teacher doesn’t care if a guy in class is snoring. What’s YOUR reaction?",
        options: [
            "Laugh and record it. (Who’re you actually recording, huh?)",
            "Mind your own business. (Okay, avoiding the situation... but maybe it’s not the situation you think it is?)",
            "Wonder how he's sleeping so peacefully when you have ✨thoughts✨ keeping you awake.",
            "Admire how he looks while sleeping. (Wait… are you looking?? 👀)"
        ]
    },
    {
        question: "DAV Teacher's Broken English",
        extra: "Your Python teacher once said he was about to 'take off.' What do you think he meant?",
        options: [
            "He’s leaving class. (Straightforward)",
            "He’s literally about to fly away. (Isn’t there something fanciful about how you view things? Maybe you’re daydreaming about him?)",
            "He’s taking off… (Just like how you're taking off into your thoughts... but who are those thoughts about?)",
            "He meant something else, and you kinda liked the way he said it. (Uhm, what?)"
        ]
    },
    {
        question: "Shilpa Ratnoji’s Bias",
        extra: "Shilpa Ratnoji hates Delhi and phones. But what’s the real crime here?",
        options: [
            "Delhi is polluted. (Same old answer, nothing new here—until you realize your own pollution of thoughts...)",
            "Using phones in class. (Lame... but why are you distracted by something else while she’s teaching?)",
            "Not paying attention to something important. (Like your feelings?)",
            "Ignoring the obvious signs about yourself."
        ]
    },
    {
        question: "Who should’ve actually been the CR of the class?",
        extra: "Final Question (Doesn’t have an impact on results)",
        options: [
            "Chamria (Current CR is the best 💯)",
            "Harsh (Controls the chat more than the actual CR)",
            "Aan (Troll candidate)",
            "Udit (No explanation needed, he’s the one for the job!)"
        ]
    }
];

let currentStep = 0;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none'; 
    document.getElementById('question-container').style.display = 'block'; 
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById('question-text');
    const extraTextContainer = document.getElementById('extra-text');
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; 

    if (currentStep < questions.length) {
        questionContainer.textContent = questions[currentStep].question;
        extraTextContainer.textContent = questions[currentStep].extra;
        questions[currentStep].options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = nextQuestion;
            optionsContainer.appendChild(button);
        });
    } else {
        showBufferTime();
    }
}

function nextQuestion() {
    currentStep++;
    loadQuestion();
}

function showBufferTime() {
    document.getElementById('question-container').style.display = 'none'; 
    document.getElementById('result').style.display = 'block'; 
    const resultText = document.querySelector('.result-text');
    resultText.textContent = "Analyzing results...";

    setTimeout(() => {
        startCountdown();
    }, 2000);  
}

function startCountdown() {
    const resultText = document.querySelector('.result-text');
    resultText.textContent = "3...";
    setTimeout(() => {
        resultText.textContent = "2...";
    }, 1000);
    setTimeout(() => {
        resultText.textContent = "1...";
    }, 2000);
    setTimeout(() => {
        resultText.textContent = "🎉Congratulations! You're gay🎉";
    }, 3000);
}
