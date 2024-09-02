    $(document).ready(function() {
        $('header button').click(function() {
            $('form').slideDown();
        })
    
        $('#botao-cancelar').click(function() {
            $('form').slideUp();
        })
    
        $('form').on('submit', function(e) {
            e.preventDefault();
            const recuperaInfo = $('#recuperar-info').val();
            const novoItem = $('<li style="display: none"></li>');
            $(`<img src="${recuperaInfo}"/>`).appendTo(novoItem);
            $(`
                <div class="overlay-imagem-link">
                    <a href="${recuperaInfo}" target="_blank" title="Ver imagem em tamanho real">
                        Ver imagem em tamanho real
                    </a>
                </div>
                
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#recuperar-info').val('')
        })
    })
