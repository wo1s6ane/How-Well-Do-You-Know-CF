const questions = [
    {
        question: "Partha Pratim Das’s Famous Dialogue",
        options: [
            "15 minutes (Classic PPD, always underestimating… kinda like how you hide your true feelings)",
            "10 minutes (Enough time for the 'it’s fine, I’ll just keep ignoring what I’m really feeling')",
            "5 minutes (the time it takes for you to stare at that one person before looking away)",
            "Who cares? No one listens. (A bit like how you ignore the signs, huh?)"
        ],
        extraPrompt: "Partha Pratim Das is known for saying his PPT will be done in how long?"
    },
    {
        question: "Vadiraja's Indifference",
        options: [
            "Laugh and record it. (Who’re you actually recording, huh?)",
            "Mind your own business. (Okay, avoiding the situation... but maybe it’s not the situation you think it is?)",
            "Wonder how he's sleeping so peacefully when you have ✨thoughts✨ keeping you awake.",
            "Admire how he looks while sleeping. (Wait… are you looking?? 👀)"
        ],
        extraPrompt: "Your Math teacher doesn’t care if a guy in class is snoring. What’s YOUR reaction?"
    },
    {
        question: "DAV Teacher's Broken English",
        options: [
            "He’s leaving class. (Straightforward)",
            "He’s literally about to fly away. (Isn’t there something fanciful about how you view things? Maybe you’re daydreaming about him?)",
            "He’s taking off… (Just like how you're taking off into your thoughts... but who are those thoughts about?)",
            "He meant something else, and you kinda liked the way he said it. (Uhm, what?)"
        ],
        extraPrompt: "Your Python teacher once said he was about to 'take off.' What do you think he meant?"
    },
    {
        question: "Shilpa Ratnoji’s Bias",
        options: [
            "Delhi is polluted. (Same old answer, nothing new here—until you realize your own pollution of thoughts...)",
            "Using phones in class. (Lame... but why are you distracted by something else while she’s teaching?)",
            "Not paying attention to something important. (Like your feelings?)",
            "Ignoring the obvious signs about yourself."
        ],
        extraPrompt: "Shilpa Ratnoji hates Delhi and phones. But what’s the real crime here?"
    },
    {
        question: "Who should’ve actually been the CR of the class?",
        options: [
            "Chamria (Current CR is the best 💯)",
            "Harsh (Controls the chat more than the actual CR)",
            "Aan (Troll candidate)",
            "Udit (No explanation needed, he’s the one for the job!)"
        ],
        extraPrompt: "Final Question (Doesn’t have an impact on results)"
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
    const extraPromptContainer = document.getElementById('extra-prompt'); // New container for extra text
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; 

    if (currentStep < questions.length) {
        questionContainer.textContent = questions[currentStep].question;
        extraPromptContainer.textContent = questions[currentStep].extraPrompt; // Add the extra text

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
        resultText.textContent = "🎉 Congratulations! You're gay 🎉";
    }, 3000);
}
