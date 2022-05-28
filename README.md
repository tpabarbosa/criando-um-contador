# Mas é apenas mais um contador Javascript...

![js](docs/Countdown_on_the_traffic_lights.jpg?raw=true)

Recentemente decidi dar uma grande virada na minha vida. Fui professora ao longo dos últimos 18 anos, mas atingindo a maioridade, e impulsionada pela quarentena, concluí que era hora de retomar uma grande paixão: a programação!

Não posso dizer que sou iniciante nesta área, afinal sempre flertei com ela, às vezes mais, às vezes menos, mas sempre me mantive praticando esta "arte". Tão pouco posso dizer que sou experiente, pois nunca trabalhei na área, a não ser pra mim mesma, ou pra alguns amigos próximos.

De qualquer forma, decidi largar tudo e me atirar. Neste momento estou fazendo alguns cursos e _bootcamps_, afinal preciso "provar" que possuo alguma qualificação, já que fui sempre autodidata nesta área.

E acontece com frequência de me deparar com aulas que trazem conceitos "simples" - simples para mim, que já os estudei e os pratiquei, é claro!. Mas tento extrair dali, do simples, algo que possa me fazer avançar.

Ontem assisti a uma aula de Introdução ao Javascript, e em certo momento, a professora propõe a criação de um contador. Pela proposta são 2 botões, um para aumentar o valor e um para diminui-lo, e um elemento para mostrar o valor do contador.

Pausei o vídeo, fui pra fora, pensando... como poderia implementar um contador que me fizesse avançar um pouco mais, aprender mais?

Daí me veio a ideia de um **display de 7 segmentos**, nunca havia feito um. Este display é formado por 7 partes, nomeadas de "a" a "g", como na figura. Estes segmentos podem estar iluminados ou apagados, formando os números que queremos.

![7-segments display](docs/mic0434_0003.png?raw=true)

## Vamos aos códigos

O primeiro desafio que encontrei neste projeto foi criar a estrutura do HTML + CSS que deixasse cada segmento no formato que eu desejava:
![7-segments display](docs/display.png?raw=true) ![7-segments display](docs/segment-v.png?raw=true) ![7-segments display](docs/segment-h.png?raw=true)

A solução que encontrei foi semelhante a que usamos para fazer um [triângulo](https://medium.com/horadecodar/como-fazer-um-tri%C3%A2ngulo-com-css-8621d57f4d35), mas neste caso cada segmento é formado por 2 trapézios verticais ou 2 horizontais, que se juntam formando o hexágono que eu queria.
![7-segments display](docs/segment-v-2.png?raw=true) ![7-segments display](docs/segment-h-2.png?raw=true)

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

## Javascript, afinal!

Finalizado HTML + CSS, agora é hora de dar vida ao contador utilizando o Javascript.

Comecei criando uma variável global para guardar o valor do contador e também as funções que são chamadas quando o cliente clica nos botões para aumentar e diminuir este valor:

![js](docs/buttons_js.png?raw=true)

Cada uma das funções anteriores chama a função de atualização que:

- altera a variável global,
- avalia se o número tem um ou dois dígitos, e
- chama para cada dígito uma função que é responsável por iluminar cada um dos segmentos do algarismo que deve ser mostrado.

Para, finalmente, alterar o contador na tela do cliente, precisei da coleção de elementos HTML que representam os segmentos de cada um dos dígitos e utilizei uma constante que contém a informação de quais segmentos devem ser iluminados para cada algarismo:

![js](docs/update_js.png?raw=true)
![js](docs/digit_js.png?raw=true)
![js](docs/constant_js.png?raw=true)

## E ficou pronto o meu contador!!! 😁

![js](docs/counter.gif?raw=true)

> **Para testar: [https://tpabarbosa.github.io/criando-um-contador/](https://tpabarbosa.github.io/criando-um-contador/)**
>
> **Código completo: [https://github.com/tpabarbosa/criando-um-contador](https://github.com/tpabarbosa/criando-um-contador)**

## Sempre podemos ir além

Eu não parei por aí! Melhorei um pouco o código, fiz esse texto e até implementei outra solução completamente diferente.

Essa outra solução é parecida com a que ocorre nos circuitos eletrônicos, a explicação fica para outra hora, por que daí já é muita complexidade pra resolver um problema tão pequeno... para quem se interessar: [BCD to 7-Segment Display Decoder – Construction, Circuit & Operation](https://www.electricaltechnology.org/2018/05/bcd-to-7-segment-display-decoder.html)

#### Crédito da imagem de capa:

Date 28 January 2010, 09:32
Source [Countdown on the traffic lights](https://www.flickr.com/photos/renaissancechambara/4311329050/)
Author [Ged Carroll](https://www.flickr.com/people/39435232@N00)
