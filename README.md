# 🎲 Amigo Secreto App

## 📝 Descrição
Aplicativo web interativo para sortear amigos secretos, desenvolvido com HTML, CSS e JavaScript.

## ✨ Funcionalidades
- Adicionar amigos à lista
- Remover amigos individualmente
- Sortear amigos aleatoriamente
- Rastreamento de status de sorteio
- Prevenção de nomes duplicados
- Reiniciar jogo

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## 🔧 Regras de Validação
### Adição de Amigos
- Não permite nomes vazios
- Bloqueia nomes duplicados
- Cada nome adicionado recebe status "Não sorteado"

### Sorteio
- Só permite sortear amigos não sorteados, e quando sorteados recebem o texto de "sorteado" na coluna de status
- Impede sortear o mesmo amigo mais de uma vez
- Quando todos os amigos forem sorteados, mostra mensagem de conclusão e sugere que reinicie a aplicação para novas iterações

### Interface
- Botão de sortear fica oculto antes de adicionar o primeiro amigo
- Botão de reiniciar fica oculto antes de adicionar o primeiro amigo
- Ao reiniciar, todos os elementos de resultado são ocultados

## 🖥️ Como Usar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão à internet para fontes externas

### Passos para Clonar e Executar
1. Abra o terminal/cmd
2. Escolha um diretório para o projeto
3. Clone o repositório:
```bash
git clone https://github.com/anderson-snow/jogo_amigo_secreto.git
```
4. Navegue até o diretório do projeto:
```bash
cd jogo_amigo_secreto
```
5. Abra o arquivo `index.html` no navegador:
   - Método 1: Clique duplo no arquivo
   - Método 2: Arraste para uma janela do navegador
   - Método 3: Use um servidor local como Live Server no VSCode


### Tela Principal da Aplicação
![Captura de Tela do Projeto](screenshot.png)

## 🤝 Contribuições
Contribuições são bem-vindas! 
- Reporte bugs abrindo issues
- Envie pull requests com melhorias

## 📃 Licença
MIT License

## 👨‍💻 Autor
Anderson Miranda das Neves
