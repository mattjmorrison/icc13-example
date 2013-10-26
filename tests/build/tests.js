document.write('\
<div id="ember-app"></div>\
<div id="ember-testing-container">\
    <div id="ember-testing"></div>\
</div>');

Ember.testing = true;

App.rootElement = '#ember-testing';

App.setupForTesting();

App.injectTestHelpers();

test("First Test", function() {
  Ember.run(App, 'advanceReadiness');
  return visit('/').then(function() {
    var text;
    text = find("#message").text();
    return ok(text === 'Hello World', "Hello World is not found");
  });
});
