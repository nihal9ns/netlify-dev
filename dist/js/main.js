var getWord = async () => {
  var res = await fetch("/getword");
  var word = await res.text();
  document.getElementById("random-words").innerText = word;
};

var getUsers = async () => {
  var res = await fetch("/api/users");
  var users = await res.json();
  users.forEach(user => {
    var li = document.createElement("li");
    var text = document.createTextNode(user.name);
    li.appendChild(text);
    document.getElementById("users").appendChild(li);
  });
};

getWord();
getUsers();
