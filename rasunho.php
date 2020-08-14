
<script>
		//add_action(wp_register_style(
		//	'afp-style',
		//	'../../wp-content/plugins/afp-listuser/css/style.css'));
        /*
		function wp_register_style( 'afp-style', '../../wp-content/plugins/afp-listuser/css/style.css') {
		_wp_scripts_maybe_doing_it_wrong( __FUNCTION__ );
	
		return wp_styles()->add( 'afp-style', '../../wp-content/plugins/afp-listuser/css/style.css' );*/

</script>


    <button id="btn">button</button>
    <div id="user-info"></div>

    <table class="afp-table">
        <tr>
            <td>ID
            </td>
            <td>Name
            </td>
            <td>Username
            </td>
        </tr>
    </table>



<script>

var userInfo = document.getElementById("user-info");
var btn = document.getElementById("btn");

// GET data from URL
btn.addEventListener("click", function(){
    var usersRequest = new XMLHttpRequest();
    usersRequest.open('GET','http://jsonplaceholder.typicode.com/users');
    usersRequest.onload = function () {
        var usersData = JSON.parse(usersRequest.responseText);
        //console.log(usersData[0]);
        tableHTML(usersData);
    }
    usersRequest.send();
});
// best-> https://www.youtube.com/watch?v=rJesac0_Ftw
function tableHTML(users){
    var varStr = "";

    for ( i=0; i<users.length; i++){
        varStr += "<p>User: " + users[i].name + "</p>";
    }
    userInfo.insertAdjacentHTML('beforeend',varStr);
}

//------------------- 17:01 05/06

 //var varStr = "";
 for ( i=0; i<users.length; i++){

//varStr += "<p>User: " + users[i].name + "</p>";
var tr = document.createElement("tr");
var td = document.createElement('td');
var tableUs = document.getElementById("users-table");
td.innerHTML = String(users[i]);
tr.appendChild(td);
tableUs.appendChild(tr);
//CREATE A CACHE HERE!!!
}
//userInfo.insertAdjacentHTML('beforeend',varStr);

//-----------------------


// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";


















</script>





