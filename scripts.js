
//var rIndex,table = document.getElementById("table");

// function checkEmptyInput()
// {
//     var empty = true,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

//     if(fname === ""){
//         alert("Please Enter The First Name");
//         empty = true;
//     }
//     else if(lname === ""){
//         alert("Please Enter The Last Name");
//         empty = true;
//     }
//     else if(age === ""){
//         alert("Please Enter The Age");
//         empty = true;
//     }
//     return empty;

// }

// function addRow(table){
//     var table = document.getElementById(table);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.name= [];
//     cell1.appendChild(element1);

//     var cell2 = row.insertCell(1);
//     cell2.innerHTML = rowCount + 1;

//     var cell3 = row.insertCell(2);
//     var element2 = document.createElement("input");
//     element2.type = "text";
//     element2.name = "txtbox[]";
//     cell3.appendChild(element2);

// }



function addHtmlTable()
{
    var table = document.getElementById("table"),
    //if(!checkEmptyInput()){
     newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;
    console.log(fname);
    //selectedRowToInput();
   //}
//}

     //function selectedRowToInput()
    //{
    var rIndex, table =  document.getElementById("table");
     for(var i = 1; i < table.rows.length; i++)
     {
        for (var j = 1; j < table.rows[i].cells.length; j++)

         table.rows[1].cells[1].onclick = function()
         {
             rIndex = this.rowIndex;
             console.log(rIndex);
             document.getElementById("fname").value = this.cells[0].innerHTML;
             document.getElementById("lname").value = this.cells[1].innerHTML;
             document.getElementById("age").value = this.cells[2].innerHTML;

        };

     }

 }
 //document.getElementById("table").reset();

//selectedRowToInput();

// function editTableSelectedRow()
// {
//     var fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

//     if(!checkEmptyInput()){
//     table.rows[rIndex].cells[0].innerHTML = fname;
//     table.rows[rIndex].cells[1].innerHTML = lname;
//     table.rows[rIndex].cells[2].innerHTML = age;
//     }
// }

// function deleteSelectedRow()
// {
//     table.deleteRow(rIndex);
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("age").value = "";
//        }