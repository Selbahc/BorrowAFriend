$(document).ready(function() {
  //Text appearance
  $(".product-card.front").click(function() {
    $(this).next().slideToggle('quick');
  });
  $(".product-card.back").click(function() {
    $(this).slideToggle('quick');
  });

  $("#productAccordion").accordion({
    event: "mouseover",
    collapsible: true,
    active: false
  });
});
