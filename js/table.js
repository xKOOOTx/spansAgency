const obj = [
    {
        season: 'Сезон 2021/2020',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        rating:              '89.40'
    },
    {
        season: 'Сезон 2020/2019',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        rating:              '89.40'
    },
    {
        season: 'Сезон 2019/2018',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        rating:              '89.40'
    },
    {
        season: 'Сезон 2018/2017',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        rating:              '89.40'
    },
    {
        season: 'Сезон 2017/2016',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        rating:              '89.40'
    }
];

const tableBodySeason = document.querySelectorAll('.table__body_season');
const tableBodyGamesNumber = document.querySelectorAll('.table__body_gamesNumber');
const tableBodyGoal = document.querySelectorAll('.table__body_goal');
const tableBodyPass = document.querySelectorAll('.table__body_pass');
const tableBodyGoalAndPass = document.querySelectorAll('.table__body_goalAndPass');
const tableBodyRating = document.querySelectorAll('.table__body_rating');

obj.forEach( el => {
    const season = el.season;
    const gamesNumber = el.gamesNumber;
    const goal = el.goal;
    const pass = el.pass;
    const goalAndPass = el.goalAndPass;
    const rating = el.rating;

    // tableBodySeason.innerHTML = `${el.season}`;
console.log(tableBodySeason)
/*    console.log(`season is ${season}`);
    console.log(`gamesNumber is ${gamesNumber}`);
    console.log(`goal is ${goal}`);
    console.log(`pass is ${pass}`);
    console.log(`goalAndPass is ${goalAndPass}`);
    console.log(`price is ${price}`);*/
})


//changing arrows color

const tableSortButton = document.querySelectorAll('.table__header_button');


tableSortButton.forEach( el => {
    const upSortBtn = el.querySelector('.upSortBtn');
    const downSortBtn = el.querySelector('.downSortBtn');
    el.addEventListener('click', (el) => {
        if(upSortBtn.classList.contains('upSortBtn-active')) {
            upSortBtn.classList.remove('upSortBtn-active');
            downSortBtn.classList.add('downSortBtn-active');
        } else {
            downSortBtn.classList.remove('downSortBtn-active');
            upSortBtn.classList.add('upSortBtn-active');
        }
    })
})


