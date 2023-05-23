window.localStorage.setItem('key123', 'value123');
window.localStorage.setItem('key1234', 'value1234');
console.log(window.localStorage.getItem('key123'));

//window.localStorage.removeItem('key123');
//window.localStorage.clear();
 window.sessionStorage.setItem('key2', 'value2');
//
// console.log(localStorage.getItem('key'));
// console.log(sessionStorage.getItem('key2'));
//
document.cookie = 'test=value';
document.cookie = 'test2=value2';
console.log(document.cookie);