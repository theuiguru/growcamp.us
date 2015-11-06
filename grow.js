function show_div(div_id) {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.rules').style.display = 'none';
  document.querySelector('.register').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector(div_id).style.display = 'block';
}
