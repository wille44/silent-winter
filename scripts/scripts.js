var today = new date();
var hournow = today.gethour();
var greetings; 

if (hournow > 18) {
  greeting = ' good evening';
} else if (hourNow > 12) {
  greeting = ' good afternoon';
} else if (hourNow > 0) {
  greeting = ' good morning';
} else {
  greeting = 'welcome';
}

document.wirte('<h3>' + greeting + '</h3>');
