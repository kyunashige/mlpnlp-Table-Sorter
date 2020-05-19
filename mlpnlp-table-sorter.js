// ==UserScript==
// @name         mlpnlp Table Sorter
// @namespace    https://github.com/kyunashige/mlpnlp-table-sorter
// @version      0.1
// @description  mlpnlp の正誤表をページ順にソートする
// @author       kyuna
// @match        https://github.com/mlpnlp/mlpnlp
// @license     MIT
// @supportURL   https://github.com/kyunashige/mlpnlp-table-sorter/issues
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  /**
   * fetch correct/incorrect table
   */
  const $ = document.querySelector.bind(document);
  var coricTable = $("#readme > div.Box-body.p-5 > article > table > tbody");
  // console.log(coricTable);
  // console.log(toString.call(coricTable));
  /**
   * sort by PageNo
   */
  var rows = Array.prototype.slice.call(coricTable.getElementsByTagName("tr"));
  function getPageNo(row) {
    return parseInt(row.cells[2].innerText.match(/\d+/g)[0], 10);
  }
  rows.sort(function (a, b) {
    return getPageNo(a) - getPageNo(b);
  });
  /**
   * create table
   */
  var table = document.createElement("tbody");
  for (var i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
  /**
   * replace table
   */
  $("#readme > div.Box-body.p-5 > article > table").append(table);
})();
