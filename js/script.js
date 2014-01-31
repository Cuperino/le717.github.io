/*
    Created 2014 Triangle717
    <http://Triangle717.WordPress.com/>

    Licensed under The MIT License
    <http://opensource.org/licenses/MIT/>
*/

var $yourBrowser = $("#yourBrowser");


function hideBrowserBox() {
    "use strict";
    /* Hide the browser box */
    // Trigger the fade-out transition
    $yourBrowser.css("opacity", "0");

    // Trigger the sliding transition
    $yourBrowser.css("transform", "translateY(220px)");
}


function detectBrowser() {
    "use strict";
    /* Detect the user's web browser and display message */
    var theBrowser,
        theBrowserLogo,
        usrAgent = navigator.userAgent,
        $theBrowserVersion = $.browser.versionNumber,

        // Default compatibility message
        theBrowserMessage = "You should be able to view my site error free!<br>",

        // Message to display for incompatible browser
        theBrowserMessageError = "You might experience some issues while browsing my site. " +
        "If you do, please report them for me to fix.";

    // This is Google Chrome
    if ($.browser.chrome) {
        theBrowser = "Google Chrome";
        theBrowserLogo = "img/chrome.png";
        theBrowserMessage = theBrowserMessageError;

    } else if ($.browser.mozilla) {
        // This is Mozilla Firefox
        theBrowser = "Mozilla Firefox";
        theBrowserLogo = "img/firefox.png";

    } else if ($.browser.safari) {
        // This is Safari
        theBrowser = "Apple Safari";
        theBrowserLogo = "img/safari.png";
        theBrowserMessage = theBrowserMessageError;

        // Display error message for Safari 5 and below
        if ($theBrowserVersion <= 5) {
            theBrowserMessage = "Your version of Safari does not support my site. " +
            "Please visit browsehappy.com to research a modern browser.";
        }

    } else if ($.browser.opr) {
        // This is Opera
        theBrowser = "Opera";
        theBrowserLogo = "img/opera.png";
        theBrowserMessage = theBrowserMessageError;

    } else if ($.browser.msie) {
        // This is Internet Explorer
        theBrowser = "Internet Explorer";
        theBrowserLogo = "img/ie.png";
        theBrowserMessage = theBrowserMessageError;
        
        //TODO IE11 on Windows 7 is broken, but IE11 on Win8.1 works? Huh?
        // Display error message for IE 9 and below
        if ($theBrowserVersion <= 9) {
            theBrowserMessage = "Your version of IE does not support my site. " +
            "Please visit browsehappy.com to research a modern browser.";
        }

    } else {
        // Some other browser
        theBrowser = "An Unidentified Browser";
        $theBrowserVersion = "";
        theBrowserLogo = "img/globe-blue.png";
        theBrowserMessage = "If you will, please submit an issue on GitHub with compatibility " +
            "results so I can develop for this browser.";
    }

    // Insert message and browser logo
    $("#yourBrowser a").append("You are using<br>" + theBrowser + " " + $theBrowserVersion +
                               ".<br>" + theBrowserMessage + '<br><img alt="Browser logo" ' +
                               'width="90" height="90" src="' + theBrowserLogo + '" />');

    // Trigger the fade-in and sliding transitions
    $yourBrowser.css("opacity", "1");
    $yourBrowser.css("transform", "translateY(-230px)");
}

// Get date of last commit using GitHub API
// Taken from http://buzz.jaysalvat.com/
$(function() {
    $.getJSON("https://api.github.com/repos/le717/le717.github.io/commits/master?callback=?",
              function(data) {
                    var date = data.data.commit.committer.date.replace(/(T(.*))$/g, "");
                    //var date = "Right now";
                    $("#last-update").text("Site last updated on: " + date);
                }, "json");
});
