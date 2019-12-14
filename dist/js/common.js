$(".common-button-more").click(function () {
  $('.common-content__box-more').slideToggle(300, function () {
    if ($(this).is(':hidden')) {
      $('.common-button-more').html('Открыть все виды');
    } else {
      $('.common-button-more').html('Скрыть часть');
    }
  });
  return false;
});


// var content = document.getElementById("common-content");
// var show = document.getElementById("common-show");

// show.onclick = function () {
//   if (content.className == "open") {
//     content.className = "";
//     show.innerHTML = "Открыть все виды";
//   } else {
//     content.className = "open";
//     show.innerHTML = "Скрыть все виды";
//   }
// }