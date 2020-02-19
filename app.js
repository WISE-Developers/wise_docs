$(function() {
  $(document).tooltip();
  $(".flink1")
    .attr("href", "../psaas/index.html")
    .text("PSaaS")
    .click(e => alert(e));
});
