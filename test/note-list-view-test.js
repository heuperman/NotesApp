function testInstatiation() {
  var noteListViewInstance = new NoteListView();
  assert.isTrue(noteListViewInstance instanceof NoteListView);
}

function testStoreNotesInArray() {
  var notelist = new NoteList();
  var noteListView = new NoteListView(notelist);
  assert.isTrue(noteListView.note === notelist);
}

function testreturnHTML() {
  var notelist = new NoteList();
  notelist.newNote("twentycharactersasdxdsasretcarahcytnewt");
  notelist.newNote("twentycharactersasdxdsasretcarahcytnewt");
  var noteListView = new NoteListView(notelist);
  assert.isTrue(noteListView.returnHTML() ===
  '<ul><li><div><a href="http://localhost:8080#notes/0">' +
  'twentycharactersasdx</a></div></li><li><div><a href=' +
  '"http://localhost:8080#notes/1">twentycharactersasdx</a></div></li></ul>');
}

testInstatiation();
testStoreNotesInArray();
testreturnHTML();
