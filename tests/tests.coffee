test "First Test", ->

    Ember.run App, 'advanceReadiness'

    visit('/').then ->
        text = find("#message").text()
        ok(text == 'Hello World', "Hello World is not found")
