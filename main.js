$(document).ready(function() {
    // Especifica o evento de clique para cada botão dentro dos cards
    $('.prod button').click(function() {
        // Encontra o elemento .aviso dentro do mesmo .prod
        var $aviso = $(this).closest('.prod').find('.aviso');
        // Mostra o aviso
        $aviso.slideDown(1000);

        // Esconde o aviso após um tempo
        setTimeout(function() {
            $aviso.slideUp(1000); // Esconde o aviso
        }, 3000); // Espera 3 segundos antes de começar a esconder
    });
});