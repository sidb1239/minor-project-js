let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” – Dr Seuss',
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '"You are my heart, my life, my one and only thought."– Arthur Conan Doyle, The White Company',
    '"I would rather share one lifetime with you than face all the ages of this world alone." Arwen, Lord of the Rings: The Fellowship of the Ring (2001)',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It is hard to fail, but it is worse never to have tried to succeed.”– Theodore Roosevelt',
    '“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” – Mark Twain',
    '“Great minds discuss ideas; average minds discuss events; small minds discuss people.”– Eleanor Roosevelt',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe'
];

btn.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() * (12 - 1)) + 1]
    output.innerHTML = randomQuote;
})