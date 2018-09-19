$(function () {

    var model = {
        cats: [],
        selected: 0,
        init: function () {
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
            ],
                selected = 0
        },
        getCats: function () {
            return cats;
        },
        setSelected: function (index) {
            console.log(index)
            selected = index
        },
        getSelectedCat: function(){
            return cats[selected]
        },
        incrementSelectedCat: function(){
            cats[selected].counter++;
        }
    };


    var controller = {
        init: function () {
            model.init();
            listOfCatsView.init();
            catAreaView.init();
        },
        getAllCats: function () {
            return model.getCats();
        },
        selectCat: function(index) {
            model.setSelected(index);
            catAreaView.render();
        },
        incrementSelectedCat: function(){
            model.incrementSelectedCat();
            catAreaView.render();
        },
        getSelectedCat: function(){
            return model.getSelectedCat();
        }
    };


    var listOfCatsView = {
        init: function () { //aqui também podem ser adicionados os events handlers das estruturas estáticas da view
            //chama o view render
            listOfCatsView.render();
        },
        render: function () {
            controller.getAllCats().forEach((cat, index) => {
                //cria o LI
                var item = document.createElement('li');
                //coloca o nome do gato
                item.textContent = cat.name;
                //adiciona o evento de click no nome
                item.addEventListener('click', (function (indexCopy) {
                    return function () {
                        controller.selectCat(indexCopy)
                    };
                })(index));
                $('#list-of-cats').append(item);
            })
        }
    };

    var catAreaView = {
        init: function () {
            catAreaView.render();
        },
        render: function () {
            //renderiza o primeiro gato no html
            let cat = controller.getSelectedCat()
            $('#cat-area').empty();
            let h1 = document.createElement('h1');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');

            h1.textContent = cat.name;
            h2.textContent = cat.counter;
            img.src = cat.photo;

            img.addEventListener('click', function() {
                return controller.incrementSelectedCat();
            });

            $('#cat-area').append(h1);
            $('#cat-area').append(h2);
            $('#cat-area').append(img);
        }
    }

    controller.init();
});