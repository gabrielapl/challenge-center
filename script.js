async function getRepos() {
  const response = await fetch("https://api.github.com/users/gabrielapl/repos", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  }).then(function(response) {
    const data = response.body;
    debugger
  });
}

getRepos();