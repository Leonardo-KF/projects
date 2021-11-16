const formulario = document.getElementById("formulario"); // pegamos o formulario pelo id que atribuimos no html
const tarefa = document.getElementById("tarefa"); // pegamos a tag input do nosso html que será preenchida pelo usuario
const lista = document.getElementById("lista"); // pegamos a lista que criamos no html para preenchermos dinamicamente

function adicionar() {
  let li = document.createElement("li"); // vamos criar a tag li que será adcionada em nossa lista.
  let conteudo = document.createTextNode(tarefa.value); // criamos o conteudo que será adciona na nossa tag li
  li.appendChild(conteudo); // adicionamos o conteudo a nossa tag li
  lista.appendChild(li); // adicionamos a nossa tag li e seu conteudo dentro da tag ul que é nossa lista no html
  tarefa.value = ""; // limpamos o campo onde foi preenchida a tarefa
}
