function pattern_count(text, pattern) {
    var textLength = text.length;
    var patternLength = pattern.length;
    var count = 0;

    for (var i = 0; i <= textLength - patternLength; i++) {
      var match = true;
      for (var j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        count++;
      }
    }
  
    return count;
  }
  
  var text = prompt("Inputkan Teks:");
  var pattern = prompt("Inputkan Pola:");
  

  var hasil = pattern_count(text, pattern);
  console.log(hasil);