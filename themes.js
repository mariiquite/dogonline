document.addEventListener("DOMContentLoaded", function() {
    let savedTheme = localStorage.getItem('site-theme') || 'light';
    if (savedTheme === 'light'){
        lightsUp();
    } else {
        goDark();
    }
});
  
  // Apply the theme to the <html> or <body> tag immediately
  document.documentElement.setAttribute('data-theme', savedTheme);

function goDark(){
    document.documentElement.setAttribute("data-theme", "dark")
    document.querySelector("#light-mode-button").src = "https://dogonline.net/img/timeofday_afternoon.gif";
    document.querySelector("#dark-mode-button").src = "https://dogonline.net/img/timeofday_night.gif";
    localStorage.setItem('site-theme', 'dark');
}

function lightsUp(){
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector("#light-mode-button").src = "https://dogonline.net/img/timeofday_afternoon.gif";
    document.querySelector("#dark-mode-button").src = "https://dogonline.net/img/timeofday_night.gif";
    localStorage.setItem('site-theme', 'light');
}
