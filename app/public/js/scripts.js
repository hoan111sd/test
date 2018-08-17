$(function() {
  $("#loginForm").on("submit", function(event) {
    event.preventDefault();

    var username = $("#signUsername").val();
    var password = $("#signinPassword").val();
    $.ajax({
      url: "/signin",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username: username, password: password }),
      success: function(data) {
        if (data[0] === 0) {
          console.log(data);
          document.getElementById("loginError").style.display = "block";
          $("#loginError").html(data[1]);
        } else {
          window.location.href = data[1];
        }
      }
    });
  });

  $("#signupForm").on("submit", function(event) {
    event.preventDefault();

    var fname = $("#fnamelg").val();
    var lname = $("#lnamelg").val();
    var username = $("#usernamelg").val();
    var email = $("#emaillg").val();
    var password = $("#passwordlg").val();
    var cpassword = $("#confirmPasswordlg").val();

    $.ajax({
      url: "/signup",
      method: "post",
      contentType: "application/json",
      data: JSON.stringify({
        fname: fname,
        lname: lname,
        username: username,
        email: email,
        password: password,
        cpassword: cpassword
      }),
      success: function(data) {
        if (data[0] === 0) {
          document.getElementById("signupError").style.display = "block";
          $("#signupError").html(data[1]);
        }
        if (data[0] === 1) {
          window.location.href = data[1];
        }
      }
    });
  });
});

function ShowHistoryLists() {
  $("#list-loader")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "post",
    url: "/panel/manage/HistoryLists",
    success: function(ajaxResult) {
      $(".show-history-list").html(ajaxResult);
    }
  });
}

function ShowFavouriteLists() {
  $("#list-loader")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "post",
    url: "/panel/manage/FavouriteLists",
    success: function(ajaxResult) {
      $(".show-favourite-list").html(ajaxResult);
    }
  });
}

function ShowLists() {
  $("#list-loader")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "post",
    url: "/panel/manage/ShowLists",
    success: function(ajaxResult) {
      console.log(ajaxResult);
      $(".show-list").html(ajaxResult);
    }
  });
}
function addList() {
  $("#list-loader")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "post",
    url: "/panel/manage/addList",
    success: function(ajaxResult) {
      $(".show-list").html(ajaxResult);
      $("#listkeywords").tagsInput({
        width: "auto",
        color: "blue"
      });
    }
  });
}
function triggerImage() {
  $("#uploadimage").trigger("click");
}
function readImage(input) {
  if (input.files && input.files[0]) {
    document.getElementById("upload_img").style.display = "block";
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#upload_img")
        .attr("src", e.target.result)
        .width(200)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function ListSubmits() {
  var data = new FormData();
  var title = document.getElementById("listtitle").value;
  var permalink = document.getElementById("listpermalink").value;
  var category = document.getElementById("listCategory").value;
  var description = document.getElementById("listdescription").value;
  var keywords = $(".listkeywords").val();
  var file = $("#uploadimage")[0].files;
  data.append("file", file[0]);
  data.append("title", title);
  data.append("permalink", permalink);
  data.append("category", category);
  data.append("description", description);
  data.append("keywords", keywords);

  $("#AddListSubmit")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");

  $.ajax({
    type: "post",
    url: "/panel/manage/submitList",
    data: data,
    processData: false,
    contentType: false,
    dataType: "json",
    success: function(data) {
      if (data[0] == 1) {
        addslide(data[1], data[2], data[3]);
      } else if (data[0] == 0) {
        $(window).scrollTop(0);
        $("#AddListSubmit").html(data[1]);
      }
    }
  });
}

function addslide(userId, listId) {
  $("#list-loader")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "POST",
    url: "/panel/manage/addslide",
    data: { userid: userId, listid: listId },
    success: function(data) {
      $(".show-list").html(data);
    }
  });
}
function slideSubmit() {
  var data = new FormData();
  var title = document.getElementById("slidetitle").value;
  var description = document.getElementById("slidedescription").value;
  var vlink = document.getElementById("slidevideoLink").value;
  var article = document.getElementById("slidearticle").value;
  var optionallink = document.getElementById("slidelink").value;
  var file = $("#uploadslide")[0].files;
  data.append("file", file[0]);
  data.append("title", title);
  data.append("article", article);
  data.append("vlink", vlink);
  data.append("description", description);
  data.append("optionallink", optionallink);
  $("#AddSlideSubmit")
    .html('<div id="loader-wrapper"><div id="loader"></div></div>')
    .fadeIn("fast");
  $.ajax({
    type: "POST",
    url: "/panel/manage/slideSubmit",
    data: data,
    processData: false,
    contentType: false,
    dataType: "json",
    success: function(data) {
      if (data[0] == 1) {
        document.getElementById("slidetitle").value = "";
        document.getElementById("slidedescription").value = "";
        document.getElementById("slidevideoLink").value = "";
        document.getElementById("slidelink").value = "";
        document.getElementById("srcslide").style.display = "none";
        $(window).scrollTop(0);
        $("#AddSlideSubmit").html(data[1]);
      } else if (data[0] == 0) {
        $(window).scrollTop(0);
        $("#AddSlideSubmit").html(data[1]);
      }
    }
  });
}

function ratingByLike(lid, listuserId, likedisLikeStatus, userId) {
  console.log(lid, listuserId, likedisLikeStatus, userId);
  $.ajax({
    type: "post",
    url: "/rating",
    data: {
      like_dislike: "like",
      lid: lid,
      userId: userId,
      likedisLikeStatus: likedisLikeStatus,
      listuserId: listuserId
    },
    dataType: "json",
    success: function(data) {
      console.log(data);
      var like = data[0];

      var dislike = data[1];

      $("#like_vid" + lid).html(like);

      $("#dislike_vid" + lid).html(dislike);

      $("#dislike_vid" + lid).removeClass("dislike_vid");

      $("#like_vid" + lid).addClass("like_vid");
    }
  });
}

function ratingBydisLike(lid, listuserId, likedisLikeStatus, userId) {
  $.ajax({
    type: "POST",
    url: "/rating",
    data: {
      like_dislike: "dislike",
      lid: lid,
      userId: userId,
      likedisLikeStatus: likedisLikeStatus,
      listuserId: listuserId
    },
    dataType: "json",
    success: function(data) {
      var like = data[0];

      var dislike = data[1];

      $("#like_vid" + lid).html(like);

      $("#dislike_vid" + lid).html(dislike);

      $("#like_vid" + lid).removeClass("like_vid");

      $("#dislike_vid" + lid).addClass("dislike_vid");
    }
  });
}

function addToFavourite(lid, userId, listuserId) {
  assignedTabName = document.getElementById("FavouriteList" + lid).className;
  if (
    assignedTabName == "btn btn-inverse " ||
    assignedTabName == "btn btn-inverse"
  ) {
    console.log("bookmark = 0");
    $.ajax({
      type: "POST",
      url: "/addToFavourite",
      data: {
        favorite: "favorite",
        lid: lid,
        userId: userId,
        listuserId: listuserId,
        bookmark: "0"
      },
      dataType: "json",
      success: function(response) {
        var favorite = response[0];

        $("#FavouriteList" + lid).html(favorite);
      }
    });
    $("#FavouriteList" + lid).addClass("favorite_vid");
  } else {
    console.log("bookmark = 1");
    $.ajax({
      type: "POST",
      url: "/addToFavourite",
      data: {
        favorite: "favorite",
        lid: lid,
        userId: userId,
        listuserId: listuserId,
        bookmark: "1"
      },
      dataType: "json",
      success: function(response) {
        var favorite = response[0];

        $("#FavouriteList" + lid).html(favorite);
      }
    });
    $("#FavouriteList" + lid).removeClass("favorite_vid");
  }
}
function SlideOption() {
  document.getElementById("showSlideOption").style.display = "none";
  document.getElementById("selectedSlideOption").style.display = "block";
}

function SelectedImageSlideOption() {
  document.getElementById("selectedSlideOption").style.display = "none";
  document.getElementById("showuploadSlide").style.display = "block";
}

function SelectedVideoSlideOption() {
  document.getElementById("selectedSlideOption").style.display = "none";
  document.getElementById("showEmbedLink").style.display = "block";
}

function resetOption() {
  $("#uploadslide").val("");
  document.getElementById("showSlideOption").style.display = "block";
  document.getElementById("selectedSlideOption").style.display = "none";
  document.getElementById("showuploadSlide").style.display = "none";
  document.getElementById("showEmbedLink").style.display = "none";
  document.getElementById("srcslide").style.display = "none";
}
function readslide(input) {
  if (input.files && input.files[0]) {
    document.getElementById("srcslide").style.display = "block";
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#srcslide")
        .attr("src", e.target.result)
        .width(200)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function triggerslide() {
  $("#uploadslide").trigger("click");
}

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
