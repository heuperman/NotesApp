// create mock Document
function MockDocument (){
  this.innerHTML = 'test failed';
  this.mock = 0;

}

// create mock methods for mock Document
MockDocument.prototype.getElementById = function() {
  this.mock = new MockDocument();
  return this.mock;
};

function testInsertHTML () {
  notelist = new NoteList();
  notelist.newNote("twentycharactersasdx");
  noteController = new NoteController(notelist);
  mockDocument = new MockDocument();
  // pass mock Document in instead of actual HTML document
  noteController.insertHTML(mockDocument);
  // now test is isolated from html document, #getElementById, and #innerHTML dependencies
  assert.isTrue(mockDocument.mock.innerHTML ===
    '<ul><li><div><a href="http://localhost:8080#notes/0">' +
    'twentycharactersasdx</a></div></li></ul>');
}

function testInsertNote () {
  notelist = new NoteList();
  notelist.newNote("twentycharactersasdxdjojoifjojo");
  noteController = new NoteController(notelist);
  mockDocument = new MockDocument();
  // pass mock Document in instead of actual HTML document
  noteController.insertNote(mockDocument);
  // now test is isolated from html document, #getElementById, and #innerHTML dependencies
  assert.isTrue(mockDocument.mock.innerHTML === '<div>twentycharactersasdxdjojoifjojo</div>');
}

testInsertHTML();
testInsertNote();
