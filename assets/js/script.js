// Filtering NFTs by Timelines
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

// NFT Spliders

// Splider Script
const splide = new Splide(".splide", {
  type: "loop",
  pagination: false,
  arrows: false,
  speed: 1000,
});
splide.mount();

// Add event listeners to custom buttons
document
  .querySelector(".artist_splid_btns.lr-g-btns > button:has(.fa-arrow-left)")
  .addEventListener("click", function () {
    splide.go("<");
  });

document
  .querySelector(".artist_splid_btns.lr-g-btns > button:has(.fa-arrow-right)")
  .addEventListener("click", function () {
    splide.go(">");
  });

{
  /*   NFT Rotated Cards Splider Script   */
}

document.addEventListener("DOMContentLoaded", function () {
  const nftRsplide = new Splide("#nft-r-card-slider", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "0rem",
    focus: "center",
    pagination: false,
    arrows: false,
    speed: 700,
    autoPlay: true,
    breakpoints: {
      768: {
        perPage: 3,
      },
    },
  }).mount();

  // Add event listeners to custom buttons
  document
    .querySelector(".nft-r-slider_btns.lr-g-btns > button:has(.fa-arrow-left)")
    .addEventListener("click", function () {
      nftRsplide.go("<");
      makingCardsRotated();
    });

  document
    .querySelector(".nft-r-slider_btns.lr-g-btns > button:has(.fa-arrow-right)")
    .addEventListener("click", function () {
      nftRsplide.go(">");
      makingCardsRotated();
    });

  // Making cards rotated

  nftRsplide.on("moved", makingCardsRotated);

  function makingCardsRotated() {
    // Removing all previous Classes
    const classes = ["_s_prev_", "_prev_", "_center_", "_next_", "_s_next_"];
    document
      .querySelectorAll("#nft-r-card-slider li.splide__slide")
      .forEach((card) => {
        card.style.transform = "rotate(360deg)";
        classes.forEach((cls) => {
          card.classList.remove(cls);
        });
      });

    const allNFTrCards = document.querySelectorAll(
      "#nft-r-card-slider li.splide__slide.is-visible"
    );
    const cardsCount = allNFTrCards.length;

    if (cardsCount === 5) {
      allNFTrCards[0].classList.add("_s_prev_");
      allNFTrCards[1].classList.add("_prev_");
      allNFTrCards[2].classList.add("_center_");
      allNFTrCards[3].classList.add("_next_");
      allNFTrCards[4].classList.add("_s_next_");
    } else if (cardsCount === 3) {
      allNFTrCards[0].classList.add("_prev_");
      allNFTrCards[1].classList.add("_center_");
      allNFTrCards[2].classList.add("_next_");
    }
  }
  makingCardsRotated();
  window.addEventListener("resize", makingCardsRotated);
});
