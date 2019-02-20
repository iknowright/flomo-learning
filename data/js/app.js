var i,j;
for (i = 0; i < 6; i++) { 
    $(".books").append("<div class=\"book" + (i+1) + "\"><p>Book " + (i+1) +" </p></div>");
    $(".book"+ (i+1)).addClass("container");
    $(".book"+ (i+1)).append("<div class=\"row rbook"+(i+1)+"\"></div>");
    $(".rbook"+ (i+1)).append("<div class=\"col bookthumbnail"+(i+1)+"\"></div><div class=\"col list"+(i+1)+"\"></div>");
    $(".bookthumbnail"+ (i+1)).append("<img  src=\"data\\images\\book" + (i+1) + ".jpg\" alt=\"book\">");
    var links = "";
    for (j = 0; j < 7; j++) {
        links = links+"<p><a href=\"Unit"+(i+1)+"\\B"+(i+1)+"U"+(j+1)+"\\index.html\" target=\"_blank\">B"+(i+1)+"U"+(j+1)+"</a></p>"
    }
    $(".list"+ (i+1)).append(links);
}