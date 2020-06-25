<?php
/*
Plugin Name: AFP-List User
Plugin URI: http://www.github.com/afpaiva
Description: A task proposed by Inpsyde. Hope to present a good work. Thanks for this opportunity.
Version: 1.0
Author: Andre Fonseca de Paiva
Author URI: http://www.ensaios3d.com/andrepaiva
Text Domain: afp-listuser
Licence: MIT
*/
declare (strict_types=1);
namespace {
    class AfpListUser
    {
    
        private static $instance;
    
        public static function getInstance()
        {
            if (self::$instance === null) {
                self::$instance === new self();
            }
        }

        private function __construct()
        {
            add_action('admin_menu', array($this, 'customFieldsSet'));
            add_shortcode('inpsyde-job-test', array($this, 'afpListUsers'));
        }

        public function afpListUsers() : string
        {
            ?><script>
            var urlInput = "<?= esc_url(get_option('URLtest'))?>";
          </script><?php
       
            $content=  "<link rel=stylesheet type=text/css href=".plugin_dir_url(__FILE__)."css/style.css>";
            $content.= "<div id=display-users>";
            $content.= "    <div class=table-open>";
            $content.= "        <table id=details-table-header></table>";
            $content.= "        <table id=details-table></table>";
            $content.= "        <table id=details-table-footer>";
            $content.= "        </table>";
            $content.= "    </div>";
            $content.= "</div>";
            $content.= "<div id=users-table-container>";
            $content.= "    <table id=users-table>";
            $content.= "        <tr style=background-color: #222222; color: white>";
            $content.= "        <td>ID</td><td>Name</td><td>Username</td>";
            $content.= "        </tr>";
            $content.= "    </table>";
            $content.= "</div>";
            $content.= "<script>var urlInput = ".'"'.esc_url(get_option('URLtest')).'"'."</script>";
            $content.= "<script type=text/javascript src=".plugin_dir_url(__FILE__);
            $content.= "js/afp-scripts.js></script>";
          
            return $content;
        }

        public static function customFieldsSet()
        {
            add_menu_page(
                'Users List',
                'Users List',
                'manage_options',
                'afp-listuser',
                'AfpListUser::customFieldsSave',
                'dashicons-buddicons-buddypress-logo',
                '20'
            );
        }

        public static function customFieldsSave()
        {
            ?>
          <h1>List Users</h1>
          <h3>A test for Inpsyde</h3>
          Author: Andre Paiva<br><br><br><br>
          <h3>This is a plugin test.</h3>
          You can add into a Blog Post, or anywhere on page a dynamic table with users list from the
          URL bellow:</p>
          URL provided to the test:<b> http://jsonplaceholder.typicode.com/users </b>
          <br><br>
          
            <?php
            if (!empty($_POST["URLtest"])) {
                update_option('URLtest', esc_url($_POST["URLtest"]));
            } 
            $urlValue = esc_url(get_option('URLtest'));
            ?>
          
          <form method=POST>
             URL:<input type=text size=50 name=URLtest value=<?php echo $urlValue?>>
             <input type=submit value="Test & Save">
          </form>
          
          <div id="message"> <b style=color:green><br> Your URL is working fine! </b></div>
          
          <br><br><br>
          <h3>How to show on page:</h3>
          <p>Create a post typing <b>[inpsyde-job-test]</b>, the table will be shown on page.</p>
          
          <script>
             localStorage.removeItem('cache-users');
             var urlInput = "<?php echo esc_url(get_option('URLtest'))?>";
             var usersRequest = new XMLHttpRequest();
             usersRequest.open('GET',urlInput);
             usersRequest.onload = function () {
                if ((usersRequest.status >=200 && usersRequest.status < 400) || !usersRequest.status){
                   var usersData = JSON.parse(usersRequest.responseText);
                }else{
                   var msg1 = '<br><b style=color:red>There is something wrong in your URL. (';
                   var msg2 = ')</b><br>Please double check it, so the table will not be shown on page.';
                   document.getElementById("message").innerHTML = msg1 + usersRequest.status + msg2;
                }
             }
             usersRequest.send();
             
          </script>
            <?php
        }
    }
    AfpListUser::getInstance();
}
