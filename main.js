$(document).ready(function(){
    $('#adicionarTarefa').click(function() {
        $('.adicionarTarefa').slideDown();
    });

    $('#mostrarLista').click(function() {
        $('#listaDeTarefas').slideDown();
    });

    $('li#listaDeTarefas').click(function() {
        ('li#listaDeTarefas').css({textDecoration: 'line-through'});
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeNovaTarefa = $('#inputNomeTarefa').val();
        const novaTarefa = $('<li></li>');

        $('<span>'+nomeNovaTarefa+'</span>').appendTo(novaTarefa);
        $('<hr>').appendTo(novaTarefa);
        $(novaTarefa).appendTo('#listaDeTarefas');

        $('#inputNomeTarefa').val('');
    });
})