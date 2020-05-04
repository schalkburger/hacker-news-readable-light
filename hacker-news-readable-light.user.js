@-moz-document url-prefix("https://news.ycombinator.com/") {
    body,
    .title {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: #F8F9FC !important;
        color: #4f4f4f !important;
    }

    table#hnmain {
        max-width: 700px;
        background-color: rgba(125, 124, 124, 0);
    }

    td {
        background-color: transparent;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
        background-color: transparent;
        color: #4f4f4f !important;
        font-size: 12pt;
        line-height: 22pt;
    }

    .title {
        color: #4f4f4f !important;
    }

    .title a {
        font-size: 13pt;
        color: #4f4f4f !important;
        line-height: 1.4;
        font-weight: 500;
    }

    a:link {
        color: #4f4f4f !important;
    }
    a:visited {
        color: #b7b7b7 !important;
    }

    span.sitebit.comhead a > span {
        color: #868686 !important;
        font-size: 10pt;
    }

    .subtext, .subtext a, .subtext .score, .subtext .age a {
        color: #6d6d6d !important;
    }

    tr.spacer {
        height: 20px !important;
        box-shadow: 0px 1px 0 0px #ececec;
    }

    tr.athing td {
        padding-top: 20px;
        border-top: 1px solid #dbdbdb;
    }

    tr.athing.comtr td * td {
        border-top: none;
        padding-bottom: 20px;
    }

    td.subtext {
        padding-top: 8px;
    }

    .comment-tree .comment,
    .fatitem .comment {
        font-size: 10pt;
        line-height: 20pt;
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
        color: #4f4f4f !important;
    }

    .pagetop a:visited {
        color: #4f4f4f !important;
    }

    .fatitem .title a:visited {
        color: #4f4f4f !important;
    }
}