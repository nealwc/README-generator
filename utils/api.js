const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      const profilePicture = res.data.map(function(repo) {
        return repo.owner.avatar_url;
      })
    });
  }
};

module.exports = api;
