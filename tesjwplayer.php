<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
<style>
body{
    font-family: Arial,Helvetica,sans-serif;
	width:100%;
	height:100%;
	background-color:#000;
	overflow:hidden;
	position:fixed;
	border:0;
	margin:0;
	padding:0;
}
#vstr {
	position:absolute;
	min-width:100%;
	min-height:100%;
	z-index: 10;
}
#loading, #resume {
  width: 100%;
  height: 100%;
  position: absolute;
}
#loading {
  z-index: 11;
}
#resume {
  z-index: 12;
}
.pop-wrap {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
}
.pop-main {
    display: table-cell;
    vertical-align: middle;
}
.pop-html {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.pop-block {
    display: inline-block;
    position: relative;
}
.myConfirm {
    max-width: 260px;
    max-height: 160px;
    padding: 3px;
    padding-bottom: 0px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.3em;
    background-color: #333333;
    color: #f2f2f2;
}
.button {
    border-width: 0;
    padding: 5px 15px;
    line-height: 1.5;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 80%;
    font-weight: 700;
    margin: 5px 5px 5px 0;
    cursor: pointer;
    outline: none;
    background-color: #565656;
    color: #ffffff;
}
@-moz-keyframes rotate-loading {
    0% {
        transform: rotate(0);
        -ms-transform: rotate(0);
        -webkit-transform: rotate(0);
        -o-transform: rotate(0);
        -moz-transform: rotate(0)
    }
    100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg)
    }
}
@-o-keyframes rotate-loading {
    0% {
        transform: rotate(0);
        -ms-transform: rotate(0);
        -webkit-transform: rotate(0);
        -o-transform: rotate(0);
        -moz-transform: rotate(0)
    }
    100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg)
    }
}
@-webkit-keyframes rotate-loading {
    0% {
        transform: rotate(0);
        -ms-transform: rotate(0);
        -webkit-transform: rotate(0);
        -o-transform: rotate(0);
        -moz-transform: rotate(0)
    }
    100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg)
    }
}
@keyframes rotate-loading {
    0% {
        transform: rotate(0);
        -ms-transform: rotate(0);
        -webkit-transform: rotate(0);
        -o-transform: rotate(0);
        -moz-transform: rotate(0)
    }
    100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg)
    }
}
@-moz-keyframes loading-text-opacity {
    0%, 100%, 20% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
}
@-o-keyframes loading-text-opacity {
    0%, 100%, 20% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
}
@-webkit-keyframes loading-text-opacity {
    0%, 100%, 20% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
}
@keyframes loading-text-opacity {
    0%, 100%, 20% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
}
.loading-ani,
.loading-container {
    height: 100px;
    position: relative;
    width: 100px;
    border-radius: 100%
}
.loading-container {
    margin: 40vh auto
}
.loading-ani {
    border: 2px solid transparent;
    border-color: transparent #fff transparent #FFF;
    -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
    -moz-transform-origin: 50% 50%;
    -o-animation: rotate-loading 1.5s linear 0s infinite normal;
    -o-transform-origin: 50% 50%;
    -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
    -webkit-transform-origin: 50% 50%;
    animation: rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%
}
.loading-container:hover .loading-ani {
    border-color: transparent #fff;
}
.loading-container .loading-ani,
.loading-container:hover .loading-ani {
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -ms-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out
}
.loading-container .loading-text {
    -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
    -o-animation: loading-text-opacity 2s linear 0s infinite normal;
    -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
    animation: loading-text-opacity 2s linear 0s infinite normal;
    color: #fff;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
    margin-top: 45px;
    opacity: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 100px
}
.jw-rightclick-link.jw-info-overlay-item, .jw-rightclick-item.jw-featured {
    display: none !important;
}
.jw-button-container .jw-settings-sharing, .jw-button-container .jw-icon-cc {
    display: none !important;
}
.jw-rightclick-link {
    color: #d2d2d2 !important;
}
.jw-rightclick-link span {
    color: #fff !important;
}
.jw-svg-icon-download {
    height: 16px !important;
    width: auto !important;
}
.jw-svg-icon-qswitch {
    width: auto !important;
}
.jw-button-container .jw-logo-button {
    margin-right: 10px;
}
.jw-icon-rewind {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI5IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik03MS4yMTYgOS4yMzVhNS4zNDcgNS4zNDcgMCAwIDEgNy41MTIuNjczIDUuMyA1LjMgMCAwIDEtLjY3NSA3LjQ4NWwtNC40MjQgMy42OGMyMy4zNzggNC40OTkgNDEuMDM4IDI1LjA2NCA0MS4wMzggNDkuNzU0IDAgMjcuOTgyLTIyLjY4NSA1MC42NjYtNTAuNjY3IDUwLjY2Ni0yNy45ODIgMC01MC42NjctMjIuNjg0LTUwLjY2Ny01MC42NjYgMC0xMS4xMjQgMy42LTIxLjcxNyAxMC4xNDktMzAuNDI1YTUuMzMzIDUuMzMzIDAgMSAxIDguNTI1IDYuNDFDMjYuODM3IDUzLjY4OSAyNCA2Mi4wMzYgMjQgNzAuODI4YzAgMjIuMDkxIDE3LjkwOSA0MCA0MCA0MHM0MC0xNy45MDkgNDAtNDBjMC0xOC44NC0xMy4wMjQtMzQuNjM3LTMwLjU2LTM4Ljg4bDQuNjQxIDMuODU1YTUuMyA1LjMgMCAwIDEgLjY4MyA3LjQ4NCA1LjM0NyA1LjM0NyAwIDAgMS03LjUxMi42OGwtMTYtMTMuMjg1YTUuMzAyIDUuMzAyIDAgMCAxLS4wMDQtOC4xNnpNNTEuNTAxIDUyLjYyOGMyLjE3OCAwIDQuMDE5IDEuNzM5IDQuMDE5IDMuNzk1djI5LjYwOGMwIDIuMDU2LTEuODQxIDMuNzk1LTQuMDIgMy43OTUtMi4xNzcgMC00LjAxOS0xLjczOS00LjAxOS0zLjc5NVY2My4xMzRsLTEuNzQ2IDEuMTEyYy0uNjIzLjQ2LTEuNDE4LjcxMy0yLjMwNS43MTMtMi4xNTUgMC0zLjkxLTEuNjU4LTMuOTEtMy42OTNhMy42NCAzLjY0IDAgMCAxIDEuNzI4LTMuMDk1bDcuODUyLTQuNzgzYy42ODctLjQxNiAxLjM0MS0uNzYgMi40LS43NnptMjIuNzA4IDBjOC45NTUgMCAxMy4zMTEgNi4wNzcgMTMuMzExIDE4LjU3NCAwIDEyLjUzLTQuMzU2IDE4LjYyNC0xMy4zMTEgMTguNjI0LTkuMTEyIDAtMTMuMzU2LTUuOTE3LTEzLjM1Ni0xOC42MjQgMC0xMi42NyA0LjI0NC0xOC41NzQgMTMuMzU2LTE4LjU3NHptLjEyOCA2Ljc1OGgtLjEyOGMtMy4xMTMgMC02LjI5NCAxLjQwMS02LjI5NCAxMS44MTYgMCAxMC4zODUgMy4wMjUgMTEuODE2IDYuMjk0IDExLjgxNiAzLjI0NSAwIDYuMjQ2LTEuNDMxIDYuMjQ2LTExLjgxNiAwLTEwLjI0OC0yLjkyMy0xMS43NzgtNi4xMTgtMTEuODE2em0tMjcuMTItNTAuMTVhNS4zNDcgNS4zNDcgMCAwIDEgNy41MTEuNjcyIDUuMyA1LjMgMCAwIDEtLjY3NSA3LjQ4NWwtMTEuMDYgOS4yMDIgMTEuMDg4IDkuMjA3YTUuMyA1LjMgMCAwIDEgLjY4MyA3LjQ4NCA1LjM0NyA1LjM0NyAwIDAgMS03LjUxMi42OGwtMTYtMTMuMjg1YTUuMzAyIDUuMzAyIDAgMCAxLS4wMDQtOC4xNnoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEyOHYxMjhIMHoiLz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PGcgZmlsbD0iI2ZmZiIgbWFzaz0idXJsKCNiKSI+PHBhdGggZD0iTTAgMGgxMjh2MTI4SDB6Ii8+PC9nPjwvZz48L3N2Zz4=) no-repeat 50%;
    background-size: 24px;
}
.jw-display-icon-rewind .jw-icon-rewind {
    background-size: 30px;
}
.forward {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik00OS4yNjYgOS45MTVhNS4zNDcgNS4zNDcgMCAwIDEgNy41MS0uNjg2bDE1Ljk2OSAxMy4yMzdhNS4zMDIgNS4zMDIgMCAwIDEgLjAxIDguMTYybC0xNiAxMy4zMzJhNS4zNDcgNS4zNDcgMCAwIDEtNy41MTMtLjY2NyA1LjMgNS4zIDAgMCAxIC42Ny03LjQ4NWw0LjQ0NC0zLjcwNEMzNi45MjQgMzYuNDE5IDI0IDUyLjE2NyAyNCA3MC45MzRjMCAyMi4wOSAxNy45MDkgNDAgNDAgNDBzNDAtMTcuOTEgNDAtNDBjMC04Ljc0LTIuODAzLTE3LjA0LTcuOTE1LTIzLjg5MmE1LjMzMyA1LjMzMyAwIDEgMSA4LjU1LTYuMzc4YzYuNDc1IDguNjggMTAuMDMyIDE5LjIxMiAxMC4wMzIgMzAuMjcgMCAyNy45ODItMjIuNjg1IDUwLjY2Ni01MC42NjcgNTAuNjY2LTI3Ljk4MiAwLTUwLjY2Ny0yMi42ODQtNTAuNjY3LTUwLjY2NyAwLTI0LjczMSAxNy43Mi00NS4zMjQgNDEuMTU3LTQ5Ljc3NWwtNC41MzYtMy43NTlhNS4zIDUuMyAwIDAgMS0uNjg4LTcuNDg0ek01MS41IDUyLjYyOGMyLjE3OCAwIDQuMDE5IDEuNzM5IDQuMDE5IDMuNzk1djI5LjYwOGMwIDIuMDU2LTEuODQxIDMuNzk1LTQuMDIgMy43OTUtMi4xNzcgMC00LjAxOS0xLjczOS00LjAxOS0zLjc5NVY2My4xMzRsLTEuNzQ2IDEuMTEyYy0uNjIzLjQ2LTEuNDE4LjcxMy0yLjMwNS43MTMtMi4xNTUgMC0zLjkxLTEuNjU4LTMuOTEtMy42OTNhMy42NCAzLjY0IDAgMCAxIDEuNzI4LTMuMDk1bDcuODUyLTQuNzgzYy42ODctLjQxNiAxLjM0MS0uNzYgMi40LS43NnptMjIuNzA4IDBjOC45NTUgMCAxMy4zMTEgNi4wNzcgMTMuMzExIDE4LjU3NCAwIDEyLjUzLTQuMzU2IDE4LjYyNC0xMy4zMTEgMTguNjI0LTkuMTEyIDAtMTMuMzU2LTUuOTE3LTEzLjM1Ni0xOC42MjQgMC0xMi42NyA0LjI0NC0xOC41NzQgMTMuMzU2LTE4LjU3NHptLjEyOCA2Ljc1OGgtLjEyOGMtMy4xMTMgMC02LjI5NCAxLjQwMS02LjI5NCAxMS44MTYgMCAxMC4zODUgMy4wMjUgMTEuODE2IDYuMjk0IDExLjgxNiAzLjI0NSAwIDYuMjQ2LTEuNDMxIDYuMjQ2LTExLjgxNiAwLTEwLjI0OC0yLjkyMy0xMS43NzgtNi4xMTgtMTEuODE2em0tMS4wNzEtNDkuNDdhNS4zNDcgNS4zNDcgMCAwIDEgNy41MS0uNjg3bDE1Ljk2OSAxMy4yMzdhNS4zMDIgNS4zMDIgMCAwIDEgLjAxIDguMTYybC0xNiAxMy4zMzJhNS4zNDcgNS4zNDcgMCAwIDEtNy41MTMtLjY2NyA1LjMgNS4zIDAgMCAxIC42Ny03LjQ4NWwxMS4wOTUtOS4yNDYtMTEuMDUzLTkuMTYzYTUuMyA1LjMgMCAwIDEtLjY4OC03LjQ4NHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEyOHYxMjhIMHoiLz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PGcgZmlsbD0iI2ZmZiIgbWFzaz0idXJsKCNiKSI+PHBhdGggZD0iTTAgMGgxMjh2MTI4SDB6Ii8+PC9nPjwvZz48L3N2Zz4=) no-repeat 50%;
    background-size: 24px;
}
.jw-rightclick { display: none !important; }

</style>
<script>
function devtoolIsOpening() {
    console.clear();
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 200) {
        document.write(" Dont open Developer Tools. ");
        window.location.replace("https://www.google.com");
    }
    setTimeout(devtoolIsOpening, 100);
}
devtoolIsOpening();
</script>
</head>
<body>
<div id="vstr"></div>
<div id="loading">
    <div class="loading-container">
        <div class="loading-ani"></div>
        <div class="loading-text">loading</div>
    </div>
</div>
<div id="donate"></div>
<div id="xyz" style="display:none"></div>
<script src="https://cdn.jsdelivr.net/npm/hls.js@0.14.17"></script>
<script src="https://cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@latest/build/p2p-media-loader-hlsjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@hola.org/jwplayer-hlsjs@latest/dist/jwplayer.hlsjs.min.js"></script>
<script src="https://you.wendiella.sbs/js/base.1.js"></script>
<script>
    var now = new Date();

    function lsTest() {
        if (typeof(Storage) === "undefined") {
            return false;
        }
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    function thank_you() {
        var elem = document.getElementById("donate");
        elem.parentNode.removeChild(elem);
        /*var elem1 = document.getElementById("xyz");
        elem1.parentNode.removeChild(elem1);*/
        if (lsTest()) {
            var expire = now.getTime() + (3 * 60 * 1000);
            localStorage.setItem("xpeer", expire);
        }
    }

    (function() {
        var a = true;
        if (lsTest()) {
            var now = new Date();
            var exp = now.getTime();
            var xpeer = localStorage.getItem('xpeer');
            if (xpeer === undefined || xpeer === null) {
                xpeer = 0;
            }

            if (xpeer > exp) {
                a = false;
            }
        }
        if (a) {
            var list = ['4606203', '1146778'];
            var ran = list[Math.floor((Math.random() * list.length))];
            /*document.getElementById("donate").innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:100000" id="wrapper"><a href="https://meenetiy.com/4/' + ran + '" target="_blank" style="display:block;height:inherit" onclick="thank_you()"></a>';
            document.getElementById("xyz").innerHTML = '<iframe src="https://ifaupsoo.com/4/' + ran + '" width=0 height=0 sandbox="allow-forms allow-pointer-lock allow-scripts"></iframe>';
            /*document.write('\x3Cscript type="text/javascript" src="//wokenoptionalcohabit.com/6c/0c/29/6c0c2988b1b9cac2a03e528ef781c9ed.js">\x3C/script>');*/
            thank_you();
        }
    })();

    document.addEventListener("fullscreenchange", function() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }	
    });
    document.addEventListener("mozfullscreenchange", function() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }        
    });
    document.addEventListener("webkitfullscreenchange", function() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }        
    });
    document.addEventListener("msfullscreenchange", function() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }
    });
</script>
