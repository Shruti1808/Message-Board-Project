import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    saveQuestion1(){
      var params = {
        content:this.get('content'),
        author: this.get('author'),
        date: this.get('date'),
        additionalNotes: this.get('additionalNotes'),
        tag: this.get('tag')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});




// saveQuestion() {
//       var params = {
//         content: this.get('content') ? this.get('content'): "",
//         author: this.get('author') ? this.get('author'): "",
//         date: new Date().toLocaleDateString(),
//         additionalNotes: this.get('additionalNotes') ? this.get('additionalNotes'): "",
//         tag: this.get('tag') ? this.get('tag'): "",
//       };
//       this.set('addNewQuestion', false);
//       this.sendAction('saveQuestion', params);
//     }
