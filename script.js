const formSearch = document.querySelector(".form-search"),
    inputCitiesFrom = document.querySelector(".input__cities-from"),
    dropdownCitiesFrom = document.querySelector(".dropdown__cities-from"),
    inputCitiesTo = document.querySelector(".input__cities-to"),
    dropdownCitiesTo = document.querySelector(".dropdown__cities-to"),
    inputDateDepart = document.querySelector(".input__date-depart");

const city = [
    "Москва",
    "Санкт-Петербург",
    "Минск",
    "Карганда",
    "Челябинск",
    "Керчь",
    "Волгоград",
    "Самара",
    "Днепропетровск",
    "Екатеринбург",
    "Одеса",
    "Ухань",
    "Шымкен",
    "Нижний новгород",
    "Калининград",
    "Вроцлав",
    "Ростов-на-Дону"
];


const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        console.log('инпут не пустой');

        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();

            return fixItem.includes(input.value.toLowerCase());
        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });

    }

};

//ОТКУДА

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});

//КУДА

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesTo.value = target.textContent;
        dropdownCitiesTo.textContent = '';
    }
});