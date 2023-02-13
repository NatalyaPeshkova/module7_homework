const verify = function(someString, someObject){
    return (someString in someObject);
}

const obj = {
    Имя: 'Василий',
    Фамилия: 'Теркин',
    Адрес: 'Москва'
}

verify('Имя', obj);
// verify('Возраст', obj);
