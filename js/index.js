var inputText = "";
var valueSearch = "";
// search click
$("#search").on("click",function(){
 inputText = $("#text").val();
  if (!inputText){
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  }else{  
    $.ajax({
      type:"GET",
      url:"https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputText + "&callback=?",
      dataType:"json",
      success:function(e){
        $("#result-head").html("Showing search results for '"+e[0]+"'");
      for(var i=0; i<10; i++){
        if(e[3][i]){
          if($("#"+i).hasClass("hide")){
            $("#"+i).removeClass("hide");
          }
          $("#card"+i+"-title").html("<a href='"+e[3][i]+"'target='_balnk'>"+e[1][i]+"</a>");
         $("#card"+i+"-text").html(e[2][i]); 
        $("#result").removeClass("result");
        }else{
          $("#"+i).addClass("hide");
        }
        
      }
    }
  });
 }});