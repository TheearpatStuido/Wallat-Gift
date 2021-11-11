function deposit(){
alert("รอระบบ");
}

function withdraw(){
alert("รอระบบ");
}

function logs(){
alert("รอระบบ");	
}

function loadbtong(id){
	$.get("ajax/getbtong.php?table="+id, function(data) {
  $("#btong_table").html(data);
   console.log( "Update Btong!" );
});
}

function updatebtondate(){
	$.get("ajax/date.php", function(data) {
  $("#date").html(data);
});
}

function buy(id,room){
$.get("ajax/buy.php?id="+id+"&room="+room, function(data) {
  $("#modal_buy").html(data);
  $("#buy").modal("show");
});
}




