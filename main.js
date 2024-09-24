$(document).ready(function(){
    $('#adicionarTarefa').click(function() {
        $('.adicionarTarefa').slideDown();
    });

    $('#mostrarLista').click(function() {
        $('#listaDeTarefas').slideDown();
    });


    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeNovaTarefa = $('#inputNomeTarefa').value();
        const novaTarefa = $('<li></li>');

        $(nomeNovaTarefa).appendTo(novaTarefa);
        $(novaTarefa).appendTo('#listaDeTarefas');





    });
})