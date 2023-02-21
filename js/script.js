

gsap.from("#showQuote", {
    rotate: 270,
    y: 500,
    duration: 2.2    
});

gsap.from("#btnText", {
    opacity: 0,
    delay: 2.2,
    duration: 1.5    
});

const quotesBase = [
    {
        quoteText: 'Те, кто любит нас, всегда с нами.',
        quoteAuthor: '— Дж. К. Роулинг'
    },
    {
        quoteText: 'Люди зря ищут демонов под землёй, а светлых духов в небе. Все они обитают в человеческой душе.',
        quoteAuthor: '— Татьяна Устименко'
    },
    {
        quoteText: 'У всех бывают тяжёлые времена. Надо найти в себе силы их пережить.',
        quoteAuthor: '— Дэвид Бекхэм'
    },
    {
        quoteText: 'Счастье – вещь нелегкая; его очень трудно найти внутри себя и невозможно найти где-нибудь в другом месте.',
        quoteAuthor: '— Себастьен-Рош Николя де Шамфор'
    },
    {
        quoteText: 'В темные времена хорошо видно светлых людей.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Ты можешь убежать от обстоятельств и людей, но ты никогда не убежишь от своих мыслей и чувств.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Штука в чем: если ты холоден — ты ранишь людей. Если ты чувствительный — люди ранят тебя.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Когда человек боится, то обычно ничего не случается. Неприятности приходят именно тогда, когда их совсем не ждешь.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Самый легкий характер у циников — самый невыносимый у идеалистов.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Нельзя принимать ничего близко к сердцу, ведь то, что примешь, хочешь удержать. А удержать нельзя ничего.',
        quoteAuthor: '— Эрих Мария Ремарк'
    },
    {
        quoteText: 'Печаль будет длиться вечно.',
        quoteAuthor: '— Винсент Ван Гог'
    },
    {
        quoteText: 'Хорошие времена сегодня — это грустные мысли завтра.',
        quoteAuthor: '— Боб Марли'
    },
    {
        quoteText: 'Печальная душа может убить тебя быстрее, намного быстрее, чем микроб.',
        quoteAuthor: '— Джон Стейнбек'
    },
    {
        quoteText: 'Какая печальная эпоха, когда легче разбить атом, чем отказаться от предрассудков.',
        quoteAuthor: '— Альберт Эйнштейн'
    },
    {
        quoteText: 'Помните, что даже самый тяжелый час в вашей жизни - всего 60 минут.',
        quoteAuthor: '— Софокл'
    },
    {
        quoteText: 'Иногда даже жизнь - смелый поступок.',
        quoteAuthor: '— Сенека (младший)'
    },
    {
        quoteText: 'Нет ничего страшнее самого страха.',
        quoteAuthor: '— Фрэнсис Бэкон'
    },
    {
        quoteText: 'Что бы ты ни сделал в жизни — это будет незначительно. Но очень важно, чтобы ты это сделал.',
        quoteAuthor: '— Махатма Ганди'
    },
    {
        quoteText: 'У жизни есть только одна дверь. С одной стороны ее написано «от себя», с другой — «к себе».',
        quoteAuthor: '— Шри Нисаргадатта Махарадж'
    },
    {
        quoteText: 'Жизни не стоит придавать смысла, ибо это неизбежно приведет к выводу о том, что жить не стоит.',
        quoteAuthor: '— Альбер Камю'
    }
]

const btnShowQuote = document.querySelector('#showQuote');
const quoteText = document.querySelector('.quoteText');
const quoteAuthor = document.querySelector('.quoteAuthor');

btnShowQuote.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * quotesBase.length);
    quoteText.innerText = quotesBase[randomIndex].quoteText;
    quoteAuthor.innerText = quotesBase[randomIndex].quoteAuthor;
});