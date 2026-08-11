# Hub de liens

Site statique, deux pages, aucune dépendance. Pas de build, pas de `npm install` :
tu ouvres `index.html` dans un navigateur et ça marche.

```
index.html     le hub (accueil)
montage.html   page client : montage vidéo / clipping
style.css      styles communs aux deux pages
links.js       TOUT le contenu du site (liens, titres, descriptions) + le rendu
assets/        images, favicon, images de partage
```

**Une seule règle à retenir : tout le contenu vit dans `links.js`.** Les fichiers
`.html` ne contiennent aucun lien ni aucun texte de contenu — juste des
emplacements vides que `links.js` remplit au chargement.

---

## 1. Modifier un lien, un texte, ajouter un projet

Ouvre `links.js`. Tout est dans l'objet `SITE`, en haut du fichier, découpé en
six sections numérotées et commentées. Chaque endroit à compléter porte un `TODO`.

### Changer un lien existant

Trouve l'entrée et change son `href`. Exemple, pour donner sa vraie URL à
TerraTrails :

```js
{
  title: "TerraTrails",
  description: "Randonnées hors des sentiers battus, en SwiftUI.",
  href: "https://github.com/tonpseudo/terratrails",
},
```

Les six projets partent avec `href: "#"`. Un lien resté sur `#` s'affiche en
grisé — c'est voulu : ça se voit tout de suite, et personne ne clique sur un
bouton mort sans comprendre pourquoi.

### Ajouter un projet

Copie n'importe quel bloc `{ … }` du tableau `projects.items`, colle-le, et
remplis-le. **L'ordre du tableau est l'ordre affiché** : pour faire remonter un
projet, déplace son bloc plus haut.

```js
projects: {
  title: "Projets",
  items: [
    { title: "TerraTrails", description: "…", href: "https://…" },
    { title: "Nouveau projet", description: "…", href: "https://…" }, // ← ajouté
  ],
},
```

Pour retirer un projet : supprime son bloc. Rien d'autre à toucher.

### Remplir les réalisations (page montage)

Le tableau `montage.works.items` contient quatre emplacements. Chacun a un `kind` :

| `kind` | Ce qu'il faut remplir | Rendu |
|---|---|---|
| `"youtube"` | `videoId` | lecteur YouTube intégré |
| `"instagram"` | `href` (URL du reel) et, si tu veux, `thumb` | vignette cliquable |
| autre / vide | rien | cadre en pointillés « Emplacement libre » |

L'identifiant d'une vidéo YouTube est ce qui suit `v=` dans son URL :
dans `https://www.youtube.com/watch?v=aqz-KE-bpKQ`, c'est `aqz-KE-bpKQ`.

Pour Instagram il n'y a pas d'intégration possible sans charger leurs scripts de
suivi. On affiche donc une vignette cliquable : dépose une image dans `assets/`
(une frame de ton reel) et mets son chemin dans `thumb`, par exemple
`thumb: "assets/reel-1.jpg"`. Sans `thumb`, la tuile reste sobre et seul le
libellé « Voir sur Instagram » s'affiche — ça fonctionne aussi.

Tu peux mettre plus ou moins de quatre réalisations : ajoute ou retire des blocs,
la grille s'adapte.

### Ton avatar sur le hub

Le hub démarre sans photo. Dépose ton image dans `assets/avatar.png` puis, dans
`links.js`, passe `profile.avatar.show` à `true`.

### Ton e-mail de contact

`montage.contact.email.address` vaut `contact@exemple.com` : remplace-le par
l'adresse que tu acceptes de rendre publique. C'est un `mailto:`, donc l'adresse
sera visible dans le code source de la page — utilise une adresse dédiée si tu
préfères garder ta boîte principale à l'abri.

### La seule chose qui n'est PAS dans links.js

Les balises `<title>`, `<meta name="description">` et Open Graph, qui restent
écrites dans les deux `.html`. Ce n'est pas un oubli : les robots de Facebook,
Instagram, WhatsApp, iMessage, X et Discord **ne lancent pas le JavaScript**.
Une balise injectée depuis `links.js` serait invisible pour eux, et l'aperçu de
ton lien partagé sortirait vide — précisément le cas qui compte quand tu mets ce
lien dans ta bio Instagram.

Ces balises sont regroupées en haut de chaque fichier, dans un bloc commenté.
Trois choses à y faire une fois pour toutes, avant de partager le lien :

1. remplacer `https://forrestthedump.vercel.app` par ton vrai domaine (`og:url`, `canonical`) ;
2. remplacer `assets/og-image.png` et `assets/og-montage.png` par tes propres
   images, en **1200 × 630 px** (celles fournies sont des placeholders unis) ;
3. garder l'URL de l'image **absolue** (`https://tondomaine.com/assets/…`) : les
   robots ne résolvent pas les chemins relatifs.

Après un changement de ces balises, les réseaux gardent l'ancien aperçu en cache.
Pour forcer la mise à jour : [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
et [X Card Validator](https://cards-dev.twitter.com/validator).

### Changer les couleurs

Tout en haut de `style.css`, dans le bloc `:root`. Une seule variable à changer
pour reteindre le site : `--accent`. Le fond, les bordures et les gris en
découlent séparément et sont commentés un par un.

---

## 2. Déployer sur Vercel depuis un repo GitHub

Le site est purement statique : il n'y a rien à compiler et aucune variable
d'environnement à configurer.

**a. Mettre le dossier sur GitHub**

```bash
cd link-hub
git init
git add .
git commit -m "Hub de liens"
```

Crée un repo vide sur GitHub (sans README, sans .gitignore), puis :

```bash
git remote add origin https://github.com/TON-PSEUDO/TON-REPO.git
git branch -M main
git push -u origin main
```

**b. Importer dans Vercel**

1. [vercel.com](https://vercel.com) → connexion avec GitHub.
2. **Add New… → Project**, puis **Import** sur ton repo.
3. Écran de configuration : **ne touche à rien.**
   - Framework Preset : `Other`
   - Build Command : **vide**
   - Output Directory : **vide** (ou `.`)
   - Root Directory : la racine, sauf si `index.html` est dans un sous-dossier —
     dans ce cas indique ce sous-dossier (par exemple `link-hub`).
4. **Deploy**. Une trentaine de secondes plus tard tu as une URL en
   `ton-projet.vercel.app`.

**c. Mettre à jour le site**

Chaque `git push` sur `main` redéploie automatiquement. Le cycle normal est donc :
tu édites `links.js`, tu vérifies en ouvrant `index.html` en local, tu pousses.

```bash
git add links.js
git commit -m "Ajoute l'URL de TerraTrails"
git push
```

---

## 3. Brancher un nom de domaine perso

**a. Acheter le domaine** chez n'importe quel registrar (OVH, Namecheap,
Cloudflare, Gandi…). Vercel en vend aussi, ce qui évite toute manipulation DNS.

**b. Le déclarer dans Vercel** : ton projet → **Settings → Domains → Add**, puis
saisis `tondomaine.com`. Vercel affiche alors les enregistrements à créer.

**c. Créer les enregistrements DNS** chez ton registrar :

| Type | Nom | Valeur |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Prends toujours les valeurs affichées par Vercel plutôt que ce tableau : ce sont
celles de ton projet, et elles peuvent changer.

Autre possibilité, si ton registrar le permet : déléguer les serveurs de noms
(nameservers) à Vercel. Tu n'as alors plus aucun enregistrement à gérer à la main.

**d. Attendre la propagation** — quelques minutes en général, jusqu'à 48 h dans
le pire des cas. Vercel émet le certificat HTTPS tout seul, gratuitement.

**e. Choisir la version canonique** : dans **Domains**, décide si `www` redirige
vers le domaine nu ou l'inverse, et garde une seule des deux formes comme
principale.

**f. Ne pas oublier** de repasser dans `index.html` et `montage.html` remplacer
`https://forrestthedump.vercel.app` par ton domaine réel, dans `canonical`, `og:url` et les
URL d'images de partage. Tant que tu ne l'as pas fait, l'aperçu du lien partagé
pointera vers un domaine d'exemple.

---

## Ce que ce site ne fait pas

Volontairement, et ça n'est pas près de changer :

- **aucun tracker, aucun script tiers, aucun CDN.** Le hub ne fait que trois
  requêtes : le HTML, le CSS et le JS. Rien d'externe.
- **aucune police téléchargée.** Uniquement la police système (SF Pro sur
  iPhone et Mac, Segoe UI sur Windows, Roboto sur Android) : rien à charger,
  donc rien qui clignote au premier affichage.
- **aucun formulaire, aucun backend.** Le contact passe par `mailto:` et par
  les DM Instagram.
- **une seule exception à la règle « rien d'externe » :** le lecteur YouTube des
  réalisations, quand tu renseignes un `videoId`. Il passe par
  `youtube-nocookie.com` et en chargement différé (`loading="lazy"`) — donc rien
  n'est demandé à YouTube tant que la tuile n'est pas à l'écran. Le hub, lui,
  reste totalement autonome.
