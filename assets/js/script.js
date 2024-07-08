const allFilterBtns = document.querySelectorAll(".filter-button[data-filter]");
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter_nft_card").show("10000");
    } else {
      $(".filter_nft_card")
        .not("." + value)
        .hide("30000");
      $(".filter_nft_card")
        .filter("." + value)
        .show("30000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
  allFilterBtns[0].click();
});

allFilterBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    allFilterBtns.forEach((btn, i) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
