const capitalizarTitulos = (titulos) => {
  return titulos.map(titulo => titulo.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' '));
};

// Exemplo de uso:
const titulosLivros = ["o pequeno príncipe", "dom casmurro", "a metamorfose"];
const titulosCapitalizados = capitalizarTitulos(titulosLivros);
console.log(titulosCapitalizados);