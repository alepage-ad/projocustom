# PROJO Custom — Notes projet

## Déploiement

Le site **projocustom.com** est hébergé sur **GitHub Pages**.

- Branche déployée : `main`
- Domaine custom : `projocustom.com` (configuré via `CNAME`)
- Tout push sur `main` déclenche un déploiement automatique.
- Le fichier `netlify.toml` à la racine est un résidu legacy, il n'est pas utilisé.

## Structure des branches

| Branche | Rôle |
|---|---|
| `main` | **Production** — site live déployé sur GitHub Pages |
| `v2-dev` | **Développement** — V2 du site (`index-v2.html`) |
| `v1-archive` | Archive de la V1 |

## URLs

- `https://projocustom.com/` → site live (`index.html` sur `main`)
- `https://projocustom.com/index-v2.html` → V2 en développement (partageable)

## Workflow

- Modifications du site live → pousser sur `main`
- Développement V2 → travailler sur `v2-dev`, puis merger `index-v2.html` sur `main` pour le rendre visible en ligne
