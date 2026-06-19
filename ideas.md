# MailCraft - Concepts de Design

## Trois Approches Stylistes

### 1. **Minimalisme Corporatif Moderne**
**Intro:** Une approche épurée et professionnelle, centrée sur la clarté des données avec une palette neutre et des espaces généreux. Idéale pour les utilisateurs B2B sérieux.
**Probabilité:** 0.08

### 2. **Géométrie Dynamique & Gradient Subtil**
**Intro:** Design contemporain avec formes géométriques douces, gradients corail-blanc subtils et micro-interactions fluides. Transmet l'énergie et l'innovation.
**Probabilité:** 0.07

### 3. **Minimalisme Chaleureux avec Accent Corail**
**Intro:** Approche épurée mais accueillante, exploitant le corail comme accent principal sur un fond blanc pur avec charbon pour les textes. Équilibre entre professionnalisme et approche humaine.
**Probabilité:** 0.06

---

## Approche Sélectionnée : **Minimalisme Chaleureux avec Accent Corail**

### **Mouvement de Design**
Inspiré du **Scandinavian Minimalism** combiné à **Contemporary SaaS Design**. Privilégie la fonctionnalité, la clarté et l'accessibilité, tout en intégrant des accents visuels chaleureux pour humaniser l'interface.

### **Principes Fondamentaux**
1. **Clarté Radicale** : Chaque élément a un but. Pas de décoration gratuite.
2. **Respiration Généreuse** : Espaces blancs abondants pour réduire la charge cognitive.
3. **Hiérarchie Chromatique** : Le corail guide l'attention vers les actions principales.
4. **Accessibilité Première** : Contraste suffisant, typographie lisible, navigation intuitive.

### **Philosophie des Couleurs**
- **Blanc Pur** (oklch(1 0 0)) : Fond principal, crée une sensation de calme et de clarté.
- **Corail Vibrant** (oklch(0.65 0.22 30)) : Accent principal pour les CTA, les états actifs et les éléments importants. Transmet l'énergie et l'optimisme.
- **Charbon Profond** (oklch(0.235 0.015 65)) : Texte principal, crée un contraste fort et professionnel.
- **Gris Neutre Subtil** (oklch(0.92 0.004 286.32)) : Bordures, dividers et éléments secondaires.

### **Paradigme de Mise en Page**
- **Sidebar Persistant** : Navigation principale à gauche pour les outils d'administration.
- **Grille Asymétrique** : Mélange de colonnes 1/3 - 2/3 pour les sections de contenu.
- **Cartes Flottantes** : Utilisation de cartes avec ombres douces pour les données et les modules.
- **Sections Modulaires** : Chaque section (tableau de bord, campagnes, segments) est indépendante mais cohérente.

### **Éléments Signature**
1. **Ligne Corail Subtile** : Accent gauche sur les cartes sélectionnées ou actives.
2. **Icônes Minimalistes** : Utilisation de Lucide React avec poids léger et cohérent.
3. **Boutons Arrondis Doux** : Radius de 0.65rem pour un aspect moderne mais accessible.

### **Philosophie d'Interaction**
- **Transitions Fluides** : 150-200ms pour les changements d'état (hover, focus).
- **Feedback Immédiat** : Chaque action produit une réaction visuelle (couleur, ombre, mouvement).
- **États Clairs** : Distinction nette entre actif, inactif, désactivé et erreur.
- **Micro-interactions Subtiles** : Animations légères qui ne distraient pas mais enrichissent l'expérience.

### **Animation**
- **Entrée des Éléments** : Fade-in + légère translation vers le haut (200ms ease-out).
- **Hover sur Cartes** : Ombre légère qui s'accentue, pas de translation (150ms).
- **Transitions de Page** : Fade rapide (100ms) pour les changements de vue.
- **Chargement** : Spinner minimaliste avec animation de rotation lisse.
- **Respect de `prefers-reduced-motion`** : Animations désactivées si l'utilisateur le demande.

### **Système Typographique**
- **Titres** : Geist (sans-serif, poids 700) pour les en-têtes principaux - moderne et distinctif.
- **Sous-titres** : Inter (sans-serif, poids 600) pour les sections secondaires.
- **Corps** : Inter (sans-serif, poids 400) pour le texte principal - lisible et neutre.
- **Données** : Mono (poids 500) pour les chiffres et les codes - clarté technique.

**Hiérarchie :**
- H1 : 32px, poids 700, line-height 1.2
- H2 : 24px, poids 600, line-height 1.3
- H3 : 18px, poids 600, line-height 1.4
- Body : 14px, poids 400, line-height 1.6
- Caption : 12px, poids 400, line-height 1.5

### **Essence de la Marque**
**Positionnement :** MailCraft est la plateforme de marketing par email pour les équipes qui veulent des résultats sans complexité. Pour les marketeurs modernes qui refusent les outils usines à gaz.

**Personnalité :** Professionnel • Accessible • Innovant

### **Voix de Marque**
Ton direct, clair et encourageant. Pas de jargon inutile, pas de faux enthousiasme.

**Exemples :**
- ✅ "Créez votre première campagne en 2 minutes"
- ✅ "Vos données, clairement expliquées"
- ❌ "Bienvenue sur MailCraft"
- ❌ "Commencez dès aujourd'hui !"

### **Wordmark & Logo**
Logo : Symbole graphique distinctif - une enveloppe stylisée avec un trait corail qui s'échappe, suggérant le mouvement et l'efficacité. Pas de texte, juste le symbole.

### **Couleur de Marque Signature**
**Corail Primaire** : oklch(0.65 0.22 30) - Unmistakably MailCraft. Utilisé pour tous les CTA, les accents et les éléments de focus.
