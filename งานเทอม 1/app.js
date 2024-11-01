document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    let formdata = new FormData(this);
    let result = "Name : "+
    formdata.get("name")+ "<br>" + "email :" +
    formdata.get("email")+ "<br>" + "age :" +
    formdata.get("age")+ "<br>" + "gender :" +
    formdata.get("gender")+ "<br>" + "commants :" +
    formdata.get("commants");
    document.getElementById("result").innerHTML = "<h1> my data </h1>" + result;
})