import random

banco_palavras = ["remo", "paysandu", "belem", "introdução", "pomine"]

palavra = random.choice(banco_palavras)

seletorPalavra = ['_'] * len(palavra)

tentativas = 5

while tentativas > 0:
    print('\nPalavra: ' + ' '.join(seletorPalavra))
    chute = input('Digite uma letra: ').lower()
    
    if chute in palavra:
        for i in range(len(palavra)):
            if palavra[i] == chute:
                seletorPalavra[i] = chute
        print('Parabéns! Você acertou \o/')

    else: 
        tentativas -= 1
        print('Você errou ! tentativas restantes: ' + str(tentativas))

    if '_' not in seletorPalavra:
            print('\nParabéns! A palavra é: ' + palavra)
            break
        
if tentativas == 0 and '_' in seletorPalavra:
            print('\nSuas tentativas acabaram! A palavra era: ' + palavra)
