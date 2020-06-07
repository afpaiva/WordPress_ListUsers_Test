var usersRequest = new XMLHttpRequest();
usersRequest.open('GET','http://jsonplaceholder.typicode.com/users');
usersRequest.onload = function () {
    var usersData = JSON.parse(usersRequest.responseText);
    loadUsersList(usersData);
}
usersRequest.send();

function loadUsersList(users){
    var table = document.getElementById("users-table")
    for (i = users.length - 1; i >= 0; i--){

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + users[i].id + ");openView()>" + String(users[i].id) + "</a>";
        cell2.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + users[i].id + ");openView()>" + String(users[i].name) + "</a>";
        cell3.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + users[i].id + ");openView()>" + String(users[i].username) + "</a>";
    }
}

function showDetails(id){

    var usersRequest = new XMLHttpRequest();
    usersRequest.open('GET','http://jsonplaceholder.typicode.com/users');
    usersRequest.onload = function () {
        var usersData = JSON.parse(usersRequest.responseText);
        
        var tableDet = document.getElementById("details-table");
        var tableDetHead = document.getElementById("details-table-header");
        var tableDetFooter = document.getElementById("details-table-footer");

        for (i = 0; i < usersData.length; i++){
            if (usersData[i].id == id){

                var rowDetFooter = tableDetFooter.insertRow(0);
                var cellDetFooter1 = rowDetFooter.insertCell(0);

                var btnClose = "<button onClick=clearTable();closeView()>close</button> ";
                var btnNext = "<button onClick=showDetails(" + (id+1) + ");clearTable()>>></button> ";
                var btnPrev = "<button onClick=showDetails(" + (id-1) + ");clearTable()><<</button> ";

                if (id > usersData.length-1)
                    btnNext = "<button>--</button> ";
                if (id < 2)
                    btnPrev = "<button>--</button> ";

                console.log("id: "+id);
                console.log("lenght"+usersData.length);

                cellDetFooter1.innerHTML = btnClose + btnPrev + btnNext;

                var rowDetHead = tableDetHead.insertRow(0);
                var cellDetHead1 = rowDetHead.insertCell(0);
                var cellDetHead2 = rowDetHead.insertCell(1);

                cellDetHead1.innerHTML = "<h3>#" + usersData[i].id + "</h3>";
                cellDetHead2.innerHTML = "<h3>" + usersData[i].name + "</h3>";

                var rowDet1 = tableDet.insertRow(0);
                var cellDet1 = rowDet1.insertCell(0);
                var rowDet2 = tableDet.insertRow(1);
                var cellDet2 = rowDet2.insertCell(0);
                var rowDet3 = tableDet.insertRow(2);
                var cellDet3 = rowDet3.insertCell(0);
                var rowDet4 = tableDet.insertRow(3);
                var cellDet4 = rowDet4.insertCell(0);
                var rowDet5 = tableDet.insertRow(4);
                var cellDet5 = rowDet5.insertCell(0);
                var rowDet6 = tableDet.insertRow(5);
                var cellDet6 = rowDet6.insertCell(0);
                var rowDet7 = tableDet.insertRow(6);
                var cellDet7 = rowDet7.insertCell(0);
                var rowDet8 = tableDet.insertRow(7);
                var cellDet8 = rowDet8.insertCell(0);
                var rowDet9 = tableDet.insertRow(8);
                var cellDet9 = rowDet9.insertCell(0);
                var rowDet10 = tableDet.insertRow(9);
                var cellDet10 = rowDet10.insertCell(0);
                var rowDet11 = tableDet.insertRow(10);
                var cellDet11 = rowDet11.insertCell(0);
                var rowDet12 = tableDet.insertRow(11);
                var cellDet12 = rowDet12.insertCell(0);

                cellDet1.innerHTML = "<b>Username:</b><i> " + usersData[i].username +"</i>";
                cellDet2.innerHTML = "<b>E-mail:</b><i> " + usersData[i].email +"</i>";
                cellDet3.innerHTML = "<b>Phone:</b><i>  " + usersData[i].phone +"</i>";
                cellDet4.innerHTML = "<b>Website:</b><i>  " + usersData[i].website +"</i>";
                cellDet5.innerHTML = "<b>Company Name:</b><i>  " + usersData[i].company.name +"</i>";
                cellDet6.innerHTML = "<b>Catch Phrase:</b><i>  " + usersData[i].company.catchPhrase +"</i>";
                cellDet7.innerHTML = "<b>BS:</b><i>  " + usersData[i].company.bs +"</i>";
                cellDet8.innerHTML = "<a href=https://www.google.com/maps/@" + usersData[i].address.geo.lat + "," + usersData[i].address.geo.lng + ",15z target=_blank><b>Street:</b><i>  " + usersData[i].address.city +"</a>";
                cellDet9.innerHTML = "<b>Suite:</b><i>  " + usersData[i].address.suite +"</i>";
                cellDet10.innerHTML = "<b>Zip Code:</b><i>  " + usersData[i].address.zipcode +"</i>";
                cellDet11.innerHTML = "<b>City:</b><i>  " + usersData[i].address.city +"</i>";
            }
        }
    }
    usersRequest.send();
}
function closeView(){
    document.getElementById("display-users").style.width = "0%";
    document.getElementById("display-users").style.height = "0%";
    document.getElementById("users-table-container").style.left = "0px";
}
function openView(){
    document.getElementById("display-users").style.width = "100%";
    document.getElementById("display-users").style.height = "100%";
    document.getElementById("users-table-container").style.left = "-2000px";
}
function clearTable(){
    for (i = 0; i<12; i++) document.getElementById("details-table").deleteRow(0);
    document.getElementById("details-table-header").deleteRow(0);
    document.getElementById("details-table-footer").deleteRow(0);
}
