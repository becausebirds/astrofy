var script = document.createElement('script');
script.defer = true;
script.src = "https://metrics.becausebirds.com/js/script.js";
script.dataset.domain = "jeffmann.xyz";

// optional if using proxy
// script.dataset.api = 'https://yourproxy.com/api/event';

document.getElementsByTagName('head')[0].appendChild(script);
