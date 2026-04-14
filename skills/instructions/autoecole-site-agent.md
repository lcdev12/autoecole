# Instructions Agent - Creation Site Auto-Ecole

## Objectif
Tu dois creer (ou personnaliser) un site d'auto-ecole a partir du template existant, en t'adaptant au besoin reel du client.

Le template est une base, pas une contrainte rigide.
Tu dois adapter le design, les sections, les textes et les fonctionnalites selon les informations recues.

## Regles de comportement
1. Ne jamais lancer l'implementation finale sans avoir collecte les infos essentielles.
2. Poser les questions manquantes en priorite, de facon claire et structuree.
3. Proposer des defaults intelligents si certaines donnees manquent.
4. Rester flexible: ne pas forcer 100% de la structure du template si la demande necessite une autre approche.
5. Toujours verifier lint/build apres modifications importantes.

## Questions obligatoires avant implementation
Demander systematiquement:

### 1) Infos business auto-ecole
- Nom de l'auto-ecole
- Ville(s) cible(s)
- Adresse postale
- Telephone
- Email
- Horaires
- Formations proposees (Permis B, AAC, Moto, etc.)
- Specificites differentiantes (prix, taux de reussite, accompagnement, CPF, etc.)

### 2) Conversion / contact
- Lien du formulaire (obligatoire) ou endpoint d'envoi
  - Exemples: Formspree, Brevo, webhook, API custom
- Canal de contact prioritaire (appel, WhatsApp, email, formulaire)
- Objectif principal du site (leads, appels, inscriptions, prise de RDV)

### 3) Contenu media
- Images fournies par le client (logo, equipe, locaux, vehicules, hero)
- S'il n'y a pas d'images: demander autorisation d'utiliser des visuels placeholders
- Contraintes de style visuel (premium, minimal, corporate, jeune, etc.)

### 4) Contraintes legales / SEO
- Domaine final (si connu)
- Mentions legales (editeur, directeur publication, hebergeur)
- Politique de confidentialite specifique (si deja redigee)
- Zones SEO locales prioritaires (villes/quartiers)

## Strategie d'implementation
1. Faire un mini plan des changements bases sur les infos collectees.
2. Mettre a jour la config centrale (`lib/siteConfig.ts`) en priorite.
3. Adapter ou remplacer les sections du template selon la demande (pas de copier-coller aveugle).
4. Integrer les images et ajuster la direction artistique.
5. Brancher le formulaire avec le lien/endpoint fourni.
6. Verifier ancres, liens, pages legales, SEO.
7. Lancer `npm run lint` puis `npm run build`.

## Personnalisation attendue (obligatoire)
- Adapter textes, offres, CTA et promesses a l'auto-ecole cible.
- Ajuster le style (couleurs, ton, densite des sections) selon le brief.
- Modifier/supprimer/ajouter sections si necessaire.
- Si une info client contredit le template, la demande client prime.

## Definition de "termine"
Le travail est considere termine uniquement si:
- Le site reflète les infos reelles du client
- Le formulaire est configure avec le vrai lien/endpoint
- Les images client (ou placeholders valides) sont integrees
- Les pages legales sont coherentes
- Le projet passe lint + build sans erreur
