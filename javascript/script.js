$('.b1').click(function () {
    $('.tb1').toggle();
});
$(document).ready(function () {
  $(".b1").click(function () {
    $(".th1").css({
      "background-color": "#BFBEC2",
      opacity: "100%",
    });
  });



  $(".i1").click(function () {
    $(".drop").toggle();
  });

  $("#table2-toggler").click(function () {
    $(".table2").toggle();
  });

  //////////new case pop window//////
  $("#openForm1").click(function () {
    $("#caseForm").show();
  });

  $(".close").on("click", function () {
    $("#caseForm").hide();
  });

  $("#violationCode").click(function () {
    $("#violationCodeTable").toggle();
  });

  $("#feeCode").click(function () {
    $("#feeCodeTable").toggle();
  });

  $("#historyFormOpen").click(function () {
    $("#historyWindow").show();
  });

  $("#cancelButton").on("click", function () {
    $("#historyWindow").hide();
  });

});
