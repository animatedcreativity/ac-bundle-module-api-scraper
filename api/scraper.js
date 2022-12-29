exports = module.exports = exports = module.exports = function() {
  var mod = {
    requestCallback: async function(callback, errorCallback, path) {
      var link = config.scraper.link + "/" + path.split("?").join("?authorization=" + config.scraper.authorization + "&");
      if (config.api.log.url) console.log("SCRAPER:", link);
      var result = await fetch(link);
      if (result.status === 200) {
        if (typeof callback === "function") await callback(await result.json());
      } else {
        if (typeof errorCallback === "function") await errorCallback("Could not fetch from scraper.", await result.text());
      }
    }
  };
  return mod;
}