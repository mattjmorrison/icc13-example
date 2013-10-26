test("First Test", function(){
    Ember.run(App, 'advanceReadiness');

    visit('/').then(function(){
        var text = find("#message").text();
        ok(text == 'Hello World', "Hello World is not found");
    });
});
