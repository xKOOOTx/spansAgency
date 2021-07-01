class Table extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
            `
                <p>{season}</p>
            `;
    }
}

customElements.define('u-table', Table)

const obj = [
    {
        season: 'Сезон 2021/2020',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        price:              '89.40'
    },
    {
        season: 'Сезон 2020/2019',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        price:              '89.40'
    },
    {
        season: 'Сезон 2019/2018',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        price:              '89.40'
    },
    {
        season: 'Сезон 2018/2017',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        price:              '89.40'
    },
    {
        season: 'Сезон 2017/2016',
        gamesNumber:        '5',
        goal:               '5',
        pass:               '2',
        goalAndPass:        '1',
        price:              '89.40'
    }
]

obj.forEach( el => {
    const season = el.season;
    const gamesNumber = el.gamesNumber;
    const goal = el.goal;
    const pass = el.pass;
    const goalAndPass = el.goalAndPass;
    const price = el.price;
})
