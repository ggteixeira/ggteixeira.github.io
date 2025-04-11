---
title: Minimalismo Digital
summary: O Minimalismo Digital não está no Digital
draft: false
date: 09 apr 2025
tags:
  - buddling
---

![fifteen million merits](src/content/blog/05-minimalismo-digital/media/pedala-robinho.png)

# Introdução
Neste texto, eu apresento o que é e o que **não é** Minimalismo Digital, faço um resumo de algumas partes importantes de um livro importante e, por fim, listarei dicas de como aplicar esses princípios no digital para uma vida mais intencional e menos dependente de telas.

---
Depois que peguei COVID-19 no Réveillon de 2022, senti uma notável piora na minha capacidade de concentração. Não sei se é um _brain fog_ como sequela da Ômicron ou se é apenas uma coincidência e há outros fatores envolvidos — como o fato de eu ter me mudado para uma cidade nova e ter começado a morar sozinho pela primeira vez. De qualquer forma, nos últimos dias voltei a pensar sobre como implementar no dia a dia o minimalismo digital de forma estruturada e séria.

Relembrei um vídeo chamado “Digital Minimalism” de um videomaker chamado Kraig Adams. As táticas de levar ao extremo o minimalismo e eliminar qualquer poluição visual são brutais. Infelizmente hoje só é possível acessá-lo através de um *membership* no canal do autor. Por sorte, tenho anotados alguns dos pontos mostrados, muitos dos quais apliquei à minha rotina desde então.

---
### O problema do YouTube é o problema da internet
Minimalismo não é seguir páginas *✨ a e s t h e t i c s ✨* no Instagram, não é decoração escandinava em tons monocromáticos e cafés coados na V60. 

Na busca por conteúdos no YouTube especificamente sobre minimalismo digital relacionados a sistemas mobile e de desktop, observei um comportamento irritante a ponto de eu sentir vontade de abandonar a internet e ir morar numa caverna. Antes de decidir se irei ou não, resolvi escrever este texto.

Os influencers digitais do YouTube distorceram o conceito até ele chegar no patamar do irreconhecível. Os vídeos sobre celulares são iPhones com _home screens_ repletas de apps supérfluos. Os youtubers te ensinam a deixar a tela inicial lotada de ícones monocromáticos, combinando com a paleta do papel de parede. 

Em vez de refletir sobre como o uso excessivo do smartphone tornou nossa vida **pior**, gente autodeclarada minimalista digital ensina o público a usar mais apps, passar mais tempo olhando para telas e luzes, perdendo tempo com distrações, sob a alegação de que essas coisas tornam sua vida melhor. Pode ser que eu tenha aprendido tudo errado, mas até onde eu sei a grande pauta do minimalismo digital é aprender a preencher nosso tempo online com propósito. Tem a ver com precisar de cada vez menos apps, não mais. Ironicamente, o minimalista passa a maior parte do seu tempo no mundo físico porque o minimalismo digital é não estar no digital.

---

Após esse choque amargo de realidade de constatar no que essa filosofia se tornou, decidi buscar a melhor fonte sobre o tema: o livro [Digital Minimalism, do Cal Newport](https://calnewport.com/writing/). Consumir qualquer outra fonte seria me tornar o protagonista de *15 Million Merits* (Black Mirror, S01E02).

compilar as mudanças que eu mesmo venho colocando em prática há anos e trazer uma reflexão inevitável sobre como os campos de distorção da realidade pertencentes às mídias digitais são poderosos a ponto de deformar tudo o que está dentro dela, incluindo filosofias como o próprio minimalismo, que em seu cerne nos ajudaria a viver uma vida menos dependente da Big Tech. É a vida imitando o episódio “15 Million Merits” do Black Mirror (S01E2).

Introduzido o assunto, vamos definir então o que **não** é minimalismo.



---
# Como eu aplico os conceitos

![arch](src/content/blog/05-minimalismo-digital/media/arch-desktop.png)
\[Meu desktop Linux, BTW\]

## Remova distrações visuais
- No seu navegador, você pode remover os ícones de extensões que não utiliza todos os dias. Se a extensão que você utiliza diariamente possui atalhos, você pode aprendê-los ao contrário de perder tempo todos os dias clicando em botões.
- Esconda o Dock do MacOS, a Superbar do Windows, a barra de ícones da sua distribuição Linux. Tudo que necessita da sua atenção está na sua frente, não na barra de ícones no canto da tela.
- Remova wallpapers: tela preta. Simples.
- Remova apps desnecessários da sua tray bar. No MacOS eu uso o Hidden Bar; no Linux eu escolho quais ícones aparecem na Polybar
- Remova da sua dock/barra de ícones todos os apps que não utiliza todos os dias. Simplesmente remova. Você sabe de cor o nome de todos os apps que utiliza diariamente e pode acessá-los através do Spotlight no Mac, do Windows Search no Windows e do Rofi, dmenu ou do Cerebro no Linux.
## Navegador

- Tela inicial: remover todos os ícones desnecessários, papeis de parede, links etc. Cada nova aba é uma folha em branco e a forma como você irá usá-la precisa se tornar um processo ativo. Não se deixe levar passivamente pelo conteúdo que o seu browser sugere. Em vez disso, tome as rédeas da sua presença online e digite na caixa de URL (como é o nome disso?) com propósito.
- Organização da barra de favoritos:
    - a ideia é deixar na barra de favoritos apenas os links indispensáveis referentes a projetos que sejam ao mesmo tempo atuais e temporários (por exemplo a tabela do front-end month, o classroom da disciplina da Carol etc.)
    - Todo o restante pode ir para dentro de pastas

![favoritos-antes](src/content/blog/05-minimalismo-digital/media/favoritos-antes.png)

![favoritos-depois](src/content/blog/05-minimalismo-digital/media/favoritos-depois.png)

- No tipo de uso do computador que pretendo atingir enquanto desenvolvedor e enquanto uma pessoa que gosta de escrever, o mouse é um item secundário. Isso significa que atalhos de teclado são muito importantes no meu dia a dia. Por isso, customizei o CSS presente no Firefox (o chamado FirefoxCSS) para remover itens desnecessários da UI do navegador. Por exemplo, os botões de “_back_” e “_forward_” são na maior parte do tempo inúteis. Há vários atalhos de teclado diferentes perfeitamente capazes de executar essas ações:
    
    - Usando o MacOS, basta usar `Command+[` (_back_) ou `Command+]` (_forward_)
    - Usando a extensão Vimium, basta usar `Shift+H` (_back_) ou `Shift+L` (_forward_)
    - Usando o Logitech MX Anywhere 2S, basta customizar qualquer botão usando o Logi Options
    

- Em casos limítrofes, quando o navegador se confunde ao tentar entender qual página (ou estado dela) está para trás ou para frente no tempo, a ferramenta de histórico do navegador está sempre à mão. No meu caso, basta usar `Command+Shift+H`.

![logitech-mouse](src/content/blog/05-minimalismo-digital/media/logitech-mouse.png)
## Inbox zero

- O Inbox Zero é uma prática que consiste em sentar para ler e organizar todos os seus e-mails, fazendo com que a sua caixa de entrada possua literalmente zero e-mails. Longe de ser um ideal, eu faço isso a cada três meses. Crie etiquetas/pastas, crie filtros inteligentes, visite as páginas de configurações dos apps que te mandam e-mails e impeça-os. Se não parar de receber dentro de alguns dias ou semanas, bloqueie o remetente ou marque-o como spammer. Eu fiz isso com a minha faculdade, que me enviava duas vezes o mesmo e-mail com as notícias principais do campus porque eu era aluno e ex-estagiário da universidade. Solicitei a remoção do meu e-mail de uma das listas e o setor de informática respondeu que isso não era possível. Bloqueei o remetente redundante e segui a vida.

No vídeo ele mostra como zerou distrações visuais do sistema operacional e de todos os apps que utiliza para trabalhar. Há táticas como

remover todos os botões do Finder e do Safari no MacOS, usar um papel de parede completamente preto, remover todos os
## Arch Linux

- O Arch Linux, ao lado de outras distros, pertence ao extremo do minimalismo no Linux. A ISO de instalação vem com algumas poucas ferramentas além do próprio kernel, que permitam ao usuário instalar apenas os pacotes de que precisará. O Arch não conta nem mesmo com uma interface gráfica, cabendo a você decidir livremente entre todas as DEs disponíveis no Linux. Optando pela conveniência da simplicidade, utilizo o Linux sem interface e sem botões, através de um gerenciador de janelas chamado i3wm.

# To-do:

- [ ] Falar sobre o Vimium (antes da seção de favoritos, onde ele é mencionado sem contexto)

# Bibliografia
