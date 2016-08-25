/** ***********************************************************************
 * @author Ian Hoegen
 * @description Takes in scripture json and outputs it as a USFM string.
 * @param {Object} json - Scripture in JSON
 * @return {String} - Scripture in USFM
*************************************************************************/
exports.jsonToUSFM = function(json) {
  var final = [];
  if (json.book) {
    final.push('\\h ' + json.book + '\n');
  }
  for (var chapter in json.chapters) {
    if (json.chapters.hasOwnProperty(chapter)) {
      var currentChapter = json.chapters[chapter];
      final.push('\\c ' + currentChapter.number + '\n\\p\n');
      for (var verse in currentChapter.verses) {
        if (currentChapter.verses.hasOwnProperty(verse)) {
          var currentVerse = currentChapter.verses[verse];
          final.push('\\v ' + currentVerse.number + ' ' + currentVerse.text);
        }
      }
    }
  }
  return final.join('\n');
};
