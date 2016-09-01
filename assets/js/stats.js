/**
 * Getting stats from github
 * @return {[type]} [description]
 */
function getProfileData() {
  return new Promise(function(resolve, reject) {
    requestAPI('https://api.github.com/users/luchanso')
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Getting organization list on github
 * @return {[type]} [description]
 */
function getListOfOrganization() {
  return new Promise(function(resolve, reject) {
    requestAPI('https://api.github.com/users/luchanso/orgs')
      .then(resolve)
      .catch(reject);
  });
}

function requestAPI(url) {
  return new Promise(function(resolve, reject) {
    var cache = getChache(url);

    if (cache) {
        return cache;
    }

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText)
        cacheResult(url, data);
        resolve(data);
     } else {
       reject(xhr);
     }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}

function cacheResult(url, data) {
  localStorage["cache_" + url] = data;
}

function getChache(url) {
  return localStorage["cache_" + url];
}

function updateElement(id, text) {
  var el = document.getElementById(id);
  el.textContent = text;
}


getProfileData()
  .then(function(stats) {
    var days = Math.round((new Date() - new Date(stats.created_at)) / 1000 / 60 / 60 / 24);
    updateElement('public_repos', stats.public_repos);
    updateElement('days_on_github', days);
  });

getListOfOrganization()
  .then(function(stats) {
    updateElement('organization_count', stats.length);
  });
