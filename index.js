var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
    console.log(event);
  };

  userFormEl.addEventListener("submit", formSubmitHandler);

  var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
  };

  response.json().then(function(data) {
    displayRepos(data, user);
  });