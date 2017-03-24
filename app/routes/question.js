import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

 // Let the route handler add the new question to the Ember Data store and then save it.
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');//move to question route
    }
  }
});
