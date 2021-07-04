const obj = [
    {
        season: 'Сезон 2021/2020',
        gamesNumber:        '7',
        goal:               '1',
        pass:               '4',
        goalAndPass:        '1',
        rating:              '90'
    },
    {
        season: 'Сезон 2020/2019',
        gamesNumber:        '2',
        goal:               '0',
        pass:               '2',
        goalAndPass:        '2',
        rating:              '77.20'
    },
    {
        season: 'Сезон 2019/2018',
        gamesNumber:        '8',
        goal:               '0',
        pass:               '10',
        goalAndPass:        '3',
        rating:              '89.40'
    },
    {
        season: 'Сезон 2018/2017',
        gamesNumber:        '0',
        goal:               '5',
        pass:               '7',
        goalAndPass:        '1',
        rating:              '88.30'
    },
    {
        season: 'Сезон 2017/2016',
        gamesNumber:        '1',
        goal:               '3',
        pass:               '11',
        goalAndPass:        '3',
        rating:              '10.00'
    }
];

const tableBody = document.querySelector('.table__body');

let objFilteredBySeasons = obj.sort((a, b) => a.season > b.season ? 1 : -1);


//  table render default
function renderDefaultTable (arr) {
    arr.forEach( el => {
        tableBody.insertAdjacentHTML('afterbegin',
            `
            <li class="table__body_element">
                <div class="table__body_season">${el.season}</div>
                <div class="table__body_wrapper">
                    <div class="table__body_gamesNumber l">${el.gamesNumber}</div>
                    <div class="table__body_goal l">${ el.goal}</div>
                    <div class="table__body_pass l">${el.pass}</div>
                    <div class="table__body_goalAndPass l">${el.goalAndPass}</div>
                    <div class="table__body_rating l">${el.rating}</div>
                </div>
            </li>
        `
        )

    })
}
renderDefaultTable(objFilteredBySeasons);

//  table render by season
const seasonSort = document.getElementById('seasonSortBtn');
seasonSort.addEventListener('click', () => {
    let defaultArr = obj.sort((a, b) => a.season > b.season ? 1 : -1);
    clearTable();
    renderDefaultTable(defaultArr);
})

//  table render by number of games
const gamesNumberSort = document.getElementById('gamesNumberSortBtn');
gamesNumberSort.addEventListener('click', (el) => {
    const target = el.target;
    const upSortBtn = target.querySelector('.upSortBtn')
    if (upSortBtn.classList.contains('upSortBtn-active')) {
        let tempArr = obj.sort((a,b) => b.gamesNumber - a.gamesNumber);
        clearTable();
        renderDefaultTable(tempArr);
    } else {
        let tempArr = obj.sort((a,b) => a.gamesNumber - b.gamesNumber);
        clearTable();
        renderDefaultTable(tempArr);
    }
})

//  table render by number of goals
const goalSort = document.getElementById('goalSortBtn');
goalSort.addEventListener('click', (el) => {
    const target = el.target;
    const upSortBtn = target.querySelector('.upSortBtn')
    if (upSortBtn.classList.contains('upSortBtn-active')) {
        let tempArr = obj.sort((a,b) => b.goal - a.goal);
        clearTable();
        renderDefaultTable(tempArr);
    } else {
        let tempArr = obj.sort((a,b) => a.goal - b.goal);
        clearTable();
        renderDefaultTable(tempArr);
    }
})

//  table render by pass
const passSort = document.getElementById('passSortBtn');
passSort.addEventListener('click', (el) => {
    const target = el.target;
    const upSortBtn = target.querySelector('.upSortBtn')
    if (upSortBtn.classList.contains('upSortBtn-active')) {
        let tempArr = obj.sort((a,b) => b.pass - a.pass);
        clearTable();
        renderDefaultTable(tempArr);
    } else {
        let tempArr = obj.sort((a,b) => a.pass - b.pass);
        clearTable();
        renderDefaultTable(tempArr);
    }
})

//  table render by goal + pass
const goalPass = document.getElementById('goalAndPassSortBtn');
goalPass.addEventListener('click', (el) => {
    const target = el.target;
    const upSortBtn = target.querySelector('.upSortBtn')
    if (upSortBtn.classList.contains('upSortBtn-active')) {
        let tempArr = obj.sort((a,b) => b.goalAndPass - a.goalAndPass);
        clearTable();
        renderDefaultTable(tempArr);
    } else {
        let tempArr = obj.sort((a,b) => a.goalAndPass - b.goalAndPass);
        clearTable();
        renderDefaultTable(tempArr);
    }
})

//  table render by rating
const rating = document.getElementById('ratingSortBtn');
rating.addEventListener('click', (el) => {
    const target = el.target;
    const upSortBtn = target.querySelector('.upSortBtn')
    if (upSortBtn.classList.contains('upSortBtn-active')) {
        let tempArr = obj.sort((a,b) => b.rating - a.rating);
        clearTable();
        renderDefaultTable(tempArr);
    } else {
        let tempArr = obj.sort((a,b) => a.rating - b.rating);
        clearTable();
        renderDefaultTable(tempArr);
    }
})

//  clear table
function clearTable() {
    tableBody.innerHTML = ``;
}


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

