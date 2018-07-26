(function(exports){

  function NoteController (noteList) {
    this.noteListView = new NoteListView(noteList);
    this.singleNoteView = new SingleNoteView(noteList.notes[0]);
  }

  NoteController.prototype.insertHTML = function (page) {
    this.page = page || document;
    this.object = this.noteListView.returnHTML();
    this.page.getElementById('app').innerHTML = this.object;
  };

  NoteController.prototype.insertNote = function (page) {
    this.page = page || document;
    this.object = this.singleNoteView.returnHTML();
    this.page.getElementById('app').innerHTML = this.object;
  };

  exports.NoteController = NoteController;
})(this);
