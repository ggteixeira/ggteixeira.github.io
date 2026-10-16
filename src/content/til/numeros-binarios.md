---
title: "Como calcular números binários"
summary: ""
date: 15 oct 2026
updatedDate: 15 oct 2026
tags: []
---

Hoje eu aprendi a converter números inteiros positivos em binários, primeiro usando o cérebro e depois usando Python. Embora ainda não tenha entendido completamente o formalismo por trás da ideia, entendi o método de conversão em si.

Funciona assim: se você quer saber `bin(6)`, por exemplo, basta:

1. Fazer uma divisão inteira do número 6 pelo 2 (`6//2 == 3`) e coletar o resto da divisão (`6%2 == 0`). O primeiro binário que obtemos é `0` porque `6` é par e, por isso, o resto de `6%2` é `0`. Em seguida, você deve usar o resultado da divisão (no caso, `3`) como dividendo, mantendo o 2 como divisor.
2. Então iniciamos a próxima divisão, substituindo o dividendo original: `3//2 == 1`, sendo o cálculo do resto `3%2 == 1`. O binário extraído deste passo é `1`.
3. Repetimos o processo até o quociente atingir `0`. A próxima iteração é `1//2 == 0`. É o fim da repetição de divisões inteiras. Extraímos o binário `1` porque `1%2 == 1`.
4. O passo final é inverter a lista de restos. Como a lista atualmente é `[0, 1, 1]`, o binário de `6` é `110`.

Ao final das divisões, percebemos que, ao realizar divisões inteiras de números naturais por 2, só é possível obter zeros e uns como resto.
