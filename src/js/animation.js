window.onload = function(){
  window.ityped.init(document.querySelector('.ityped'), {
    strings : [
      'increase your sales',
      'improve your capital',
      'growth your business'
    ],
    typeSpeed: 150,
    pause: 1500,
    backDelay: 1000,
    onFinished: function(){
      document.getElementsByClassName('ityped-cursor')[0].classList.add('finished');
    }
  });  
}