function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Lucky Wheel Lebaran')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function simpanData(nama, nomorDana, hadiah) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.appendRow([new Date(), nama, nomorDana, hadiah]);
  return "Sukses";
}
