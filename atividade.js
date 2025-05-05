//fila 
// Classe Fila (FIFO)
class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' foi atendida(o).`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }
   // DEMONSTRAÇÃO
const fila = new Fila();
fila.enfileirar('Alice');
fila.enfileirar('Adriana');
fila.enfileirar('Enzo');
fila.enfileirar('Henrique');
fila.enfileirar('Yudi');
fila.enfileirar('Vini');
fila.desenfileirar();
console.log(`🔍 Próximo da fila: ${fila.frente()}`);
console.log(`📏 Tamanho da fila: ${fila.tamanho()}`);
fila.imprimir();

console.log("----------------------------------------------------------");

//pilha de documentos prioritários 
// Classe Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) {
      this.itens.push(item);
      console.log(`✔️ Elemento '${item}' empilhado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
    }
  }
  
  // DEMONSTRAÇÃO
  const pilha = new Pilha();
  pilha.empilhar('Documento URGENTE1');
  pilha.empilhar('Documento URGENTE2');
  pilha.desempilhar();
  console.log(`🔍 Topo da pilha: ${pilha.topo()}`);
  console.log(`📏 Tamanho: ${pilha.tamanho()}`);
  pilha.imprimir();