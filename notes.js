function createNote(title, content) {
    return 'Забележката е създадена успешно';
  }
  
  function readNote(title) {
    return 'Съдържание на забележката';
  }
  
  function updateNote(title, newContent) {
    return 'Забележката е успешно редактирана';
  }
  
  function deleteNote(title) {
    return 'Забележката е успешно изтрита';
  }
  
  module.exports = { createNote, readNote, updateNote, deleteNote };
  