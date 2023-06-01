let xhr = new XMLHttpRequest();
//console.log(xhr)//
xhr.open("GET","https://reqres.in/api/users?page=2");
xhr.responseType = 'json';
//console.log(xhr)//
xhr.send();
xhr.onload = function() {
  let res = xhr.response.data;
  console.log(res);
}