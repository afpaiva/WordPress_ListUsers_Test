var usersData;

var stored = localStorage.getItem('cache-users');
if (stored) {
    usersData = JSON.parse(localStorage.getItem('cache-users'));
    loadUsersList();
    console.log('using cache');
} else {
    var usersRequest = new XMLHttpRequest();
    usersRequest.open('GET',urlInput);
    usersRequest.onload = function () {
        try {
            usersData = JSON.parse(usersRequest.responseText);
            localStorage.setItem('cache-users', JSON.stringify(usersData));
            loadUsersList();
        } catch (err) {
            console.log('There is an error on URL, unable to find it.');
        }
    }
    usersRequest.send();
}

function loadUsersList()
{

    var table = document.getElementById("users-table")
    for (i = usersData.length - 1; i >= 0; i--) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var toId = Number(usersData[i].id)-1;

        cell1.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + toId + ");openView()>" + String(usersData[i].id) + "</a>";
        cell2.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + toId + ");openView()>" + String(usersData[i].name) + "</a>";
        cell3.innerHTML = "<a style=cursor:pointer onClick=showDetails(" + toId + ");openView()>" + String(usersData[i].username) + "</a>";
    }
}

function showDetails(id)
{
  
    var tableDet = document.getElementById("details-table");
    var tableDetHead = document.getElementById("details-table-header");
    var tableDetFooter = document.getElementById("details-table-footer");

    var rowDetFooter = tableDetFooter.insertRow(0);
    var cellDetFooter1 = rowDetFooter.insertCell(0);

    var btnClose = "<button onClick=clearTable();closeView()>close</button> ";
    var btnNext = "<button onClick=clearTable();showDetails(" + (id+1) + ")>>></button> ";
    var btnPrev = "<button onClick=clearTable();showDetails(" + (id-1) + ")><<</button> ";

    if (id >= usersData.length-1) {
        btnNext = "<button>--</button> ";
    }
    if (id <= 1) {
        btnPrev = "<button>--</button> ";
    }

    //console.log("id: "+id);
    //console.log("len: "+usersData.length);

    cellDetFooter1.innerHTML = btnClose + btnPrev + btnNext;

    var rowDetHead = tableDetHead.insertRow(0);
    var cellDetHead1 = rowDetHead.insertCell(0);
    var cellDetHead2 = rowDetHead.insertCell(1);

    cellDetHead1.innerHTML = "<h3>#" + usersData[id].id + "</h3>";
    cellDetHead2.innerHTML = "<h3>" + usersData[id].name + "</h3>";

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

    cellDet1.innerHTML = "<b>Username:</b><i> " + usersData[id].username +"</i>";
    cellDet2.innerHTML = "<b>E-mail:</b><i> " + usersData[id].email +"</i>";
    cellDet3.innerHTML = "<b>Phone:</b><i>  " + usersData[id].phone +"</i>";
    cellDet4.innerHTML = "<b>Website:</b><i>  " + usersData[id].website +"</i>";
    cellDet5.innerHTML = "<b>Company Name:</b><i>  " + usersData[id].company.name +"</i>";
    cellDet6.innerHTML = "<b>Catch Phrase:</b><i>  " + usersData[id].company.catchPhrase +"</i>";
    cellDet7.innerHTML = "<b>BS:</b><i>  " + usersData[id].company.bs +"</i>";
    cellDet8.innerHTML = "<a href=https://www.google.com/maps/@" + usersData[id].address.geo.lat + "," + usersData[id].address.geo.lng + ",15z target=_blank><b>Street:</b><i>  " + usersData[id].address.city +"</a>";
    cellDet9.innerHTML = "<b>Suite:</b><i>  " + usersData[id].address.suite +"</i>";
    cellDet10.innerHTML = "<b>Zip Code:</b><i>  " + usersData[id].address.zipcode +"</i>";
    cellDet11.innerHTML = "<b>City:</b><i>  " + usersData[id].address.city +"</i>";

}
function closeView()
{
    document.getElementById("display-users").style.width = "0%";
    document.getElementById("display-users").style.height = "0%";
    document.getElementById("users-table-container").style.left = "0px";
}
function openView()
{
    document.getElementById("display-users").style.width = "100%";
    document.getElementById("display-users").style.height = "100%";
    document.getElementById("users-table-container").style.left = "-2000px";
}
function clearTable()
{
    for (i = 0; i<12; i++) {
        document.getElementById("details-table").deleteRow(0);
    }
    document.getElementById("details-table-header").deleteRow(0);
    document.getElementById("details-table-footer").deleteRow(0);
}

