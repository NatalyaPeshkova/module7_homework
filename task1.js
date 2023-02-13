const user = function(obj) {
    obj = { 
    Имя: 'Василий',
    Фамилия: 'Теркин',
    Адрес: 'Москва'
}

for (let key in obj) {
console.log(key + ': ' + obj[key]);
}

}
user();




