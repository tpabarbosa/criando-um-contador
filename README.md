# Mas é apenas um contador...

Recentemente decidi dar uma grande virada na minha vida. Fui professora ao longo dos últimos 18 anos, mas atingindo a maioridade, e impulsionada pela quarentena, concluí que era hora de retomar uma grande paixão: a programação!

Não posso dizer que sou iniciante nesta área, afinal sempre flertei com ela, às vezes mais, às vezes menos, mas sempre me mantive praticando esta "arte". Tão pouco posso dizer que sou experiente, pois nunca trabalhei na área, a não ser pra mim mesma, ou pra alguns amigos próximos.

De qualquer forma, decidi largar tudo e me atirar. Neste momento estou fazendo alguns cursos e bootcamps, afinal preciso "provar" que possuo alguma qualificação, já que fui sempre autodidata nesta área.

E acontece com frequência de me deparar com aulas que trazem conceitos "simples" - simples para mim, que já os estudei e os pratiquei, é claro!. Mas tento extrair dali, do simples, algo que possa me fazer avançar.

Ontem assisti uma aula de Introdução ao Javascript, e em certo momento, a professora propõe a criação de um contador. Existem 2 botões, um para aumentar o valor e um para diminuir o valor, e um elemento para mostrar o valor do contador.

Pausei o vídeo, fui pra fora, pensando... como poderia implementar um contador que me fizesse avançar um pouco mais, aprender mais?

## Vamos ao código

Daí me veio a ideia de um **display de 7 segmentos**, nunca havia feito um. Este display é formado por 7 partes, nomeadas de "a" a "g", como na figura. Estes segmentos podem estar iluminados ou apagados, formando os números que queremos.

![7-segments display](docs/mic0434_0003.png?raw=true)

O primeiro desafio que encontrei neste projeto foi criar a estrutura do HTML + CSS que deixasse cada segmento no formato hexagonal que eu desejava. A solução que eu encontrei foi semelhante a que usamos para fazer um [triângulo](https://medium.com/horadecodar/como-fazer-um-tri%C3%A2ngulo-com-css-8621d57f4d35), mas neste caso são 2 trapézios verticais e 2 horizontais.

No código a seguir, a classe `seg-h` forma um trapézio horizontal enquanto a classe `seg-compl` forma um trapézio horizontal com a base invertida, deslocado para se encaixar no primeiro. De maneira análoga, `seg-v` é um trapézio vertical e `seg-compl` é invertido em relação à ele. As classes `seg-a`, `seg-b`, ..., `seg-g` simplesmente posicionam os segmentos nos lugares corretos.

![segment html](docs/segment_html.png?raw=true)
![segment css](docs/segment_css.png?raw=true)
![segment css](docs/segment_css_position.png?raw=true)

Também criei uma classe para dar o efeito de "iluminar" o segmento. Eu queria não só aplicar uma cor viva para representar o estado iluminado, mas também queria uma sombra que simulasse a luz se dispersando. Aqui o desafio foi aplicar o filtro `drop-shadow`, uma vez que o `box-shadow` não funcionou como eu desejava:

- Sem nenhum tipo de sombra:

  ![7-segments display zero](docs/zero_without_shadow.png?raw=true)

- Com `box-shadow`:

  ![7-segments display zero](docs/zero_with_box_shadow.png?raw=true)

- Com `filter: drop-shadow`:

  ![7-segments display zero](docs/zero.png?raw=true)

  ![segment css](docs/segment_css_on.png?raw=true)

Para cada dígito, o HTML final ficou assim, apenas variando o `id`:
![segment css](docs/digit_html.png?raw=true)

Finalizado HTML + CSS, agora era hora de dar vida ao contador utilizando o Javascript. Comecei criando uma variável global para guardar o valor do contador e também as funções que são chamadas quando o cliente clica nos botões para aumentar e diminuir este valor:

![js](docs/buttons_js.png?raw=true)

Cada uma das funções anteriores chama a função de atualização que muda a variável global, avalia se o número tem um ou 2 dígitos e chama a função que é responsável por ligar ou desligar cada um dos segmentos conforme o dígito e o algarismo.

Para alterar o contador na tela do cliente, precisei da coleção de elementos HTML que representam os segmentos de cada um dos dígitos. Também utilizei uma constante que contém a informação de quais segmentos devem ser iluminados para cada algarismo:

![js](docs/update_js.png?raw=true)
![js](docs/digit_js.png?raw=true)
![js](docs/constant_js.png?raw=true)

E ficou pronto o meu contador!!! 😁
![js](docs/counter.gif?raw=true)

> **Para testar [https://tpabarbosa.github.io/indiana-genius-game/](https://tpabarbosa.github.io/indiana-genius-game/)**

Eu mesma não parei por aí! Tentei outra solução parecida com a que ocorre nos circuitos eletrônicos, mas fica para outra hora... para quem se interessar:[BCD to 7-Segment Display Decoder – Construction, Circuit & Operation](https://www.electricaltechnology.org/2018/05/bcd-to-7-segment-display-decoder.html)
