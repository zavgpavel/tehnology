document.getElementById('entrance').style.display = 'none';

function entrance() {
  document.getElementById('entrance').style.display = 'flex';
}

var swiper = new Swiper('.swiper', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
