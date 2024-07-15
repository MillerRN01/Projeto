function manipularElementos() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    const element3 = document.getElementById('element3');
    const element4 = document.getElementById('element4');

    // Alterando o conteúdo dos elementos
    element1.querySelector('p').textContent = 'Elemento Fogo alterado';
    element2.querySelector('p').textContent = 'Elemento Água Alterado';
    element3.querySelector('p').textContent = 'Elemento Terra Alterado';
    element4.querySelector('p').textContent = 'Elemento Ar Alterado';

    // Alterando a cor de fundo dos elementos
    element1.style.backgroundColor = '#FF4500'; 
    element2.style.backgroundColor = '#87CEFA'; 
    element3.style.backgroundColor = '#BDB76B'; 
    element4.style.backgroundColor = '#00FF7F'; 

    // Alterando a cor de fundo da página
    document.body.style.backgroundColor = '#e6e6fa'; 

    // Alterando as imagens para GIFs
    const img01 = document.getElementById('imagem01');
    const img02 = document.getElementById('imagem02');
    const img03 = document.getElementById('imagem03');
    const img04 = document.getElementById('imagem04');

    img01.src = 'fogo.gif';
    img02.src = 'agua.gif';
    img03.src = 'terra.gif';
    img04.src = 'ar.gif';
}
