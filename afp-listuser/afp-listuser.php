<?php
/*
Plugin Name: AFP-List User
Plugin URI: http://www.github.com/afpaiva
Description: A task proposed by Impsyde. Hope to present a good work. Thanks for this opportunity.
Version: 1.0
Author: Andre Fonseca de Paiva
Author URI: http://www.ensaios3d.com/andrepaiva
Text Domain: afp-listuser
Licence: MIT
*/

class Afp_ListUser{
    private static $instance;

    public static function getInstance(){
        if (self::$instance == NULL){
            self::$instance == new self();
        }
    }

    private function __construct(){
        add_shortcode('inpsyde-job-test', array($this,'afp_listuser'));
    }

    function afp_listuser(){ 

        $content=  "<link rel=stylesheet type=text/css href=".plugin_dir_url(__FILE__)."/css/style.css>";
        $content.= "<div id=display-users>";
        $content.=                "<div class=table-open>";
        $content.=                    "<table id=details-table-header></table>";
        $content.=                    "<table id=details-table></table>";
        $content.=                    "<table id=details-table-footer>";
        $content.=                    "</table>";
        $content.=                "</div>";
        $content.=            "</div>";
        $content.=            "<div id=users-table-container>";
        $content.=                "<table id=users-table>";
        $content.=                    "<tr style=background-color: #222222; color: white>";
        $content.=                        "<td>ID</td><td>Name</td><td>Username</td>";
        $content.=                    "</tr>";
        $content.=                "</table>";
        $content.=            "</div>";
        $content.=            "<script type=text/javascript src=".plugin_dir_url(__FILE__)."/js/afp-scripts.js></script>";

        return $content;
        
    }
}

Afp_ListUser::getInstance();