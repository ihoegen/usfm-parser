/*************************************************************************
 * @author Evan Wiederspan, Ian Hoegen
 * @description takes in usfm file as string
 * @param {string} usfm - A string in the USFM format
 * @return {string} A string that is the parsed version of the USFM input.
*************************************************************************/
exports.usfmToJSON = function(usfmInput) {
  var usfm = usfmInput.replace(/\\s5|\\p/g, "");
  const chapterNumberExpression = new RegExp("^\\s*(\\d+)\\s+");
  const verseNumberExpression = new RegExp("^\\s*(\\d+)\\s+")
  var books = [];
  var bookData = {book: 'Unknown', chapters: []};
  var chapters = usfm.split("\\c ");
  for (var ch in chapters) {
    if (/[A-Za-z]+ /.test(chapters[ch]) == false) continue;
    if (/\\h /.test(chapters[ch])) {
      bookData.book = /\\h([\w\s]+)[\n]/.exec(chapters[ch])[1].trim();
    }
    else {
      var chapNum;
      var newChap = {verses: []};
      var chapNumReg = chapterNumberExpression;

      try {
        chapNum = chapNumReg.exec(chapters[ch])[1];
      }
      catch (e) {
        chapNum = "Unknown";
      }

      newChap.number = parseInt(chapNum);
      // get rid of chapter number
      chapters[ch].replace(chapNumReg, "");
      var verses = chapters[ch].split("\\v ");
      for (var v in verses) {
        if (/ [A-Za-z]+ /.test(verses[v]) == false) continue;
        var newVerse = {};
        var verseNumReg = verseNumberExpression;
        var verseNum;

        // this should work the majority of the time
        try {
          verseNum = verseNumReg.exec(verses[v])[1];
        }
        catch (e) {
          verseNum = "Unknown";
        }
        newVerse.number = parseInt(verseNum);
        verses[v] = verses[v].replace(/^\s*\d+\s+/, "");
        newVerse.text = verses[v];
        newChap.verses.push(newVerse);
      }
      if (newChap.verses.length != 0)
        bookData.chapters.push(newChap);
    }
  }
  return bookData;
}
