function executa() {
  const container = document.querySelector('.container')
  const btn = document.querySelector('button')

  btn.addEventListener('click', function() {
    container.removeChild(btn)
    
    const h1 = document.createElement('h1')
    h1.innerText = 'Fórum Avaliativo - Edward Silva'

    container.appendChild(h1)
  })
}

executa()