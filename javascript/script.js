$(document).ready(function () {
  $(".b1").click(function () {
    $(".th1").css({
      "background-color": "#BFBEC2",
      opacity: "100%",
    });
  });

  //alert("hello");
  /*
         $("#case").on("click", function () {
                $("#table-1").show();
        }); */

  //  $("#case").click(function () {
  //   $("#table-1").show();
  // });

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
  /////////////////history//////////////

  /*
    
            var tab = document.getElementsByClassName("history");
        var i;
for (i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
*/
});
