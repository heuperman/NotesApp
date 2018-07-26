(function() {
  describe(".storeNotes", function() {
    it("stores notes in an array", function() {
      var note = new Note();
      var notelist = new NoteList();
      notelist.storeNote(note);
      expect(notelist.notes.includes(note)).toBeTrue();
    });
  });

  describe(".returnNotes", function() {
    it("returns notes from an array", function() {
      var note = new Note();
      var notelist = new NoteList();
      notelist.storeNote(note);
      expect(notelist.returnNotes().includes(note)).toBeTrue();
    });
  });

  describe(".newNote", function() {
    it("instantiates a new note", function() {
      var notelist = new NoteList();
      notelist.newNote('string');
      expect(notelist.returnNotes()[0].text).toEqual('string');
    });

    it("assigns a unique ID", function() {
      var notelist = new NoteList();
      notelist.newNote('string');
      notelist.newNote('string2');
      expect(notelist.notes[0].id !== notelist.notes[1].id).toBeTrue();
    });
  });
})();
