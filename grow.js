function show_div(div_id) {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.info').style.display = 'none';
  document.querySelector('.speaker').style.display = 'none';
  document.querySelector('.rules').style.display = 'none';
  document.querySelector('.register').style.display = 'none';
  document.querySelector('.donate').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector(div_id).style.display = 'block';
  return false;
}
function countdown() {
  now = new Date();
  kickoff = Date.parse("June 17, 2016 16:00:00");
  diff = kickoff - now;
  days = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins = Math.floor( diff / (1000*60) );
  secs = Math.floor( diff / 1000 );
  dd = days;
  hh = hours - days  * 24;
  mm = mins  - hours * 60;
  ss = secs  - mins  * 60;
    document.querySelector(".countdown").innerHTML =
        dd + ' days ' +
        hh + ' hours ' +
        mm + ' minutes ' +
        ss + ' seconds';
} setInterval(countdown, 1000 );
