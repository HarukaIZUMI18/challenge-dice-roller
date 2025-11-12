# Dice roller

:game_die: Cette fois-ci on va créer un programme pour lancer des dés. C'est parti ! :game_die:

## Commençons par créer un dé

On va créer un dé en JavaScript, écris ton code dans `app.js`.

- Créé un élément HTML de type `div`.

- Ajoute lui une classe `dice`.
  - _Eh, ça tombe bien_ ! Tous les styles (y compris `.dice`) sont déjà _définis_ dans `styles.css` pour dimensionner et appliquer une image d'arrière-plan à l'élément qui porte cette classe.
  - _Tiens d'ailleurs_ ! L'image appliquée en arrière plan est ce qu'on appelle un **sprite** : c'est une image comportant en fait plusieurs images. On n'affichera qu'une partie de l'image en arrière plan. Et jouant sur la position de l'arrière-plan, on affichera telle ou telle portion de l'image (en partie 2). Les sprites, c'est très pratique pour ne charger qu'une seule image au lieu de plusieurs et améliorer ainsi l'expérience utilisateur.

- Insère cette `div` dans le DOM. Ajoute la dans la `div` déjà présente dans le HTML qui possède l'id `player`.

<details>
<summary>✔ Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça !</summary>

![Etape 1](docs/screenshots/etape1.png)

</details>

## Tirer un nombre aléatoire

Bon c'est bien beau tout ça mais ça n'affiche que la face 1 du dé :confounded:

- Créé une fonction `generateDice` qui va : 
  - générer un nombre aléatoire entre 1 et 6
  - créer le dé (reprends le code de l'étape précédente)
  - utiliser le nombre obtenu pour modifier la position de l'arrière plan du dé *(pour info chaque face de dé fait exactement 100px de large sur le sprite)*
  - ajoute le dé dans le DOM (là aussi tu l'a déjà fait à l'étape précédente ;)) 

- Execute cette fonction juste après sa définition, teste que ça fonctionne bien en rechargeant plusieurs fois la page, la face du dé doit changer aléatoirement.

<details>
<summary>✔ Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça !</summary>

![Etape 2](docs/screenshots/etape2.png)

</details>

## Lancer plusieurs dés

Chouette on y est presque ! Maintenant faudrait lancer plusieurs dés.

- Avec la fonction `prompt`, demande à l'utilisateur de saisir combien de dés il veut lancer lorsqu'il arrive sur la page.
- Execute ta fonction `generateDice` autant de fois que de dés demandés par l'utilisateur.

<details>
<summary>✔ Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça !</summary>

![Etape 3](docs/screenshots/etape3.png)

</details>

---

<details>
<summary>
  Bonus <strong>facultatif</strong>
</summary>

## Ajouter un adversaire

On va faire un deuxième lancer aléatoire

- On ajoute une `div` après la `div` possédant l'id `player`, on lui met une classe `board` et un id `dealer`. 
  - Note: on peut le faire en HTML, mais ce n'est pas interdit de le faire en JavaScript pour s'entraîner !
  - Si tout va bien on doit voir 2 zones oranges prenant chacune la moitié de l'écran.
- L'objectif est de générer un tirage dans la zone du joueur ET un tirage dans la zone du dealer:
  - On pourrait pour cela ajouter un paramètre à notre fonction de génération de dé pour récupérer l'id de l'élément à cibler : soit la div `player`, soit la div `dealer`.

<details>
<summary>✔ Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça !</summary>

![Etape 4](docs/screenshots/etape4.png)

</details>

</details>
