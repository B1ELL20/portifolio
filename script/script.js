$(document).ready( ()=> {
    $('#bt1').on('click', () => {
        window.open('https://github.com/B1ELL20', '_blank')
    })

    $('#bt2').on('click', () => {
        window.open('https://www.linkedin.com/in/gabriel-dantas-056451230', '_blank')
    })

    $('#pj1').hover(function() {
        $('#texto1').addClass('projetos_link')
    }, function() {
        $('#texto1').removeClass('projetos_link')
    })

    $('#pj2').hover(function() {
        $('#texto2').addClass('projetos_link')
    }, function() {
        $('#texto2').removeClass('projetos_link')
    })

    $('#pj3').hover(function() {
        $('#texto3').addClass('projetos_link')
    }, function() {
        $('#texto3').removeClass('projetos_link')
    })

    $('#info').hide()

    $('#link_info').on('click', () => {
        $('#info').slideToggle(200)
    })

    const alvo = document.querySelectorAll('[data-anime]');

    window.addEventListener('scroll', () => {
        const windowtop = window.pageYOffset + 750;
        alvo.forEach((e) => {
            if ((windowtop) > e.offsetTop) {

                e.classList.add('animate')
            } else {

                e.classList.remove('animate')
            }
            
        })
    })
    
    $('#anime1').hover(function() {
        $('#caixa-conteudo').addClass('animate-info')
        $.get('html5.html', data => {
            $('#caixa-conteudo').html(data)
        })
    }, function() {
        $('#caixa-conteudo').removeClass('animate-info')
    })

    $('#anime2').hover(() => {
        $('#caixa-conteudo').addClass('animate-info')
        $.get('js.html', data => {
            $('#caixa-conteudo').html(data)
        })
    }, function() {
        $('#caixa-conteudo').removeClass('animate-info')
    })

    $('#anime3').hover(() => {
        $('#caixa-conteudo').addClass('animate-info')
        $.get('css.html', data => {
            $('#caixa-conteudo').html(data)
        })
    }, function() {
        $('#caixa-conteudo').removeClass('animate-info')
    })

    $('#anime4').hover(() => {
        $('#caixa-conteudo').addClass('animate-info')
        $.get('mysql.html', data => {
            $('#caixa-conteudo').html(data)
        })
    }, function() {
        $('#caixa-conteudo').removeClass('animate-info')
    })

    $('#anime5').hover(() => {
        $('#caixa-conteudo').addClass('animate-info')
        $.get('boots.html', data => {
            $('#caixa-conteudo').html(data)
        })
    }, function() {
        $('#caixa-conteudo').removeClass('animate-info')
    })

    const elemento = document.getElementById('#texto-superior')
    const texto = "print(Hello World!) <br>...<br> Hello World! <br> <br> De um programador para o mundo!     "

    let texto_separado = texto.split("")
    
    let texto_junto = ''

    let count = 0;

    const funcao = setInterval(() => {
        texto_junto += texto_separado[count]
        $('#texto-superior').html(texto_junto);
        count += 1;
        if(count >= texto_separado.length) {
            $('#texto-superior').html('');
            texto_junto = ''
            count = 0
        }
    }, 120) 
})