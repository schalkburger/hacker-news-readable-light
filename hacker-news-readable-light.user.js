@-moz-document url-prefix("https://news.ycombinator.com/") {
    body, .title {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: #fff !important;
        color: #939393 !important;
        }
    
    a:link {
        color: #939393 !important;
    }
    a:visited {
        color: #939393 !important;
    }
    
    table#hnmain {
        max-width: 700px;
        background-color: rgba(125, 124, 124, 0);
    }
    
    td {
        background-color: transparent;
    }
    
    .title {
        color: #979797 !important;
    }
    
    .title a {
        font-family: Georgia, Times, Times New Roman, serif;
        font-size: 14pt;
        color: #595959 !important;
        line-height: 1.4;
    }
    
    .subtext a {
        color: #939393 !important;
    }
    
    tr.spacer {
        height: 20px !important;
        box-shadow: 0px 1px 0 0px #ececec;
    }
    
    tr.athing td {
        padding-top: 20px;
    }
    
    td.subtext {
        padding-top: 8px;
    }
    
    .comment-tree .comment,
    .fatitem .comment {
        font-family: Georgia, Times, Times New Roman, serif;
        font-size: 12pt;
        line-height: 22pt;
    }
    
    .fatitem {
        background: #fff0;
        width: 100%;
        padding: 0 0 20px 0;
        border-bottom: 2px solid #ccc;
    }
    
    .fatitem .comment {
        background: #f7f5f5;
        padding: 15px 25px;
    }
    
    .comment .c00 {
        color: #fff !important;
    }
}