# Agenda

## Introduksjon
 - Hei og velkommen
 - Agenda

## Teoretisk bakgrunn
 - Hva er funksjonell programmering
 - Hva er reaktiv programmering
 - Hva er FRP
    - Forklare sentrale konsepter
    - EventStream
    - Property

## FRP i (web)GUI
 - Forskjell fra event-driven
 - Forskjell fra MV*
 - Sentrale konsepter
    - Enveis-binding
    - Komposisjon

## Bacon.js
 - Intro til API
 - Lessons learned
    - Properties
    - Error-messages

## Praktiske eksempler
 - Form med validering og submit
 - AJAX
 - Shared model (annet klassisk MV*-eksempel?)


        var column = (function () {
            var _add = function (a, b) { return a + b};
            return function (id) {
                var foo = Bacon.fromEvent(socket, id)
                            .map(1)
                            .scan(0, _add);

                foo.assign($(id), "text");
                foo.assign($(id), "height");
                return foo;
            };
        }());

        column("sprit");
        column("bil");
        column("innvandring");
