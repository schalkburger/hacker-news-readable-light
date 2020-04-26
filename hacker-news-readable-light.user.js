@-moz-document url-prefix("https://news.ycombinator.com/") {
  body, .title {
        font-family: Georgia, Times, Times New Roman, serif;
    	background: #2b3033 !important;
		color: #fff !important;
    }


	a:link    { color:#fff !important; }
	a:visited { color:#797979 !important; }
    
    table#hnmain {
        max-width: 750px;
        background-color: rgba(125, 124, 124, 0);
    }
    
    td {
        background-color: transparent;
    }
    
    .title {
        font-size: 14pt;
        color: #fff;
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

    .comment-tree .comment, .fatitem .comment {
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