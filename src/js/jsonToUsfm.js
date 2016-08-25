exports.jsonToUSFM = function(json) {
  var final = [];
  if(json.book) {
    final.push('\\h ' + json.book + '\n');
  }
  for(var chapter in json.chapters) {
    var currentChapter = json.chapters[chapter]
    final.push('\\c ' + currentChapter.number + '\n\\p\n');
    for (var verse in currentChapter.verses) {
      var currentVerse = currentChapter.verses[verse]
      final.push('\\v ' + currentVerse.number + ' ' + currentVerse.text);
    }
  }
  return final.join('');
}
