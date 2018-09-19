$(function(){

    var model = {
        cats: [],
        init: function() {
            cats = [
                {
                    name: "Ricardo",
                    counter: 0,
                    photo: "cat.jpg"
                },
                {
                    name: "Thalita",
                    counter: 0,
                    photo: "cat2.jpg"
                },
                {
                    name: "Maria",
                    counter: 0,
                    photo: "cat2.jpg"
                },
                {
                    name: "José",
                    counter: 0,
                    photo: "cat2.jpg"
                },
                {
                    name: "Diego",
                    counter: 0,
                    photo: "cat2.jpg"
                }
            ]
        },
        getAllCats: function() {
            return cats;
        }
    };


    var octopus = {
        init: function() {
            model.init();
            listOfCatsView.init();
        }
    };


    var listOfCatsView = {
        init: function() { //aqui também podem ser adicionados os events handlers das estruturas estáticas da view
            //chama o view render
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    var catAreaView = {
        init: function() {
            //puxa os dados necessários através do controller
            //chama o view render
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    }

    octopus.init();
});