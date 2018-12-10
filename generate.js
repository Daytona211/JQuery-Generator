/** main fucntion */
function main(){

    $("#GO").click(function(e){
        var textBoxVal = ($("#textInput").val());
        if(isNaN(textBoxVal)){
            alert("Needs to be a number");
        }
        else{
            createTable(textBoxVal);
        }
    });

    $("#shade").click(function(e){
        shadeEveryOtherRow();
    });

    $("#darkLine").click(function(e){
        showDarkLine();
    });

    $("#clearFormat").click(function(e){
        clearFormatting();
    });

}

/** createTable- CreateTable creates an HTML table and populates it with as many rows as the user specified
 * @param userNum - the number of rows the user wants */
function createTable(userNum){
    $("#tableDiv").children().remove();
    console.log( $("#tableDiv").children());
 
    var table = $("<table id=mainTable>");
    // loop through adding the required elements
    for(var i = 0; i < userNum; i++){
        if(i == 0){
            table.append("<tr><th>" + userNum + "</th></tr>");  
        }
        else if(i == 1){
            table.append("<tr><th>" +  ($("#nameInput").val()) +  "</th></tr>");   
        }else{
            table.append("<tr><td></td></tr>");
        }
    }   
    $("#tableDiv").append(table);
}

/** createTable- CreateTable creates an HTML table and populates it with as many rows as the user specified */
function shadeEveryOtherRow(){ 
    var table = $("#mainTable");
    for(var i = 0; i < table.children().length; i += 2){
        table.children()[i].setAttribute("style", "background-color: #DDD;");
    }
}

/** clearFormatting- clears all formatting down to the cells */
function clearFormatting(){
    var table = $("#mainTable");
    for(var i = 0; i < table.children().length; i++){
        table.children()[i].setAttribute("style", "");
    }
}

/** showDarkLine - edits the bottom border of every 10 rows */
function showDarkLine(){
    var table = $("#mainTable");
    for(var i = 9; i < table.children().length; i += 10){
        table.children()[i].setAttribute("style", "border-bottom: 5px black;");
        table.children()[i].setAttribute("style", "border-bottom-width: thick;"); 
        console.log(table.children());
    }
}

main();