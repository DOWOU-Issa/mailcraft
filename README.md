# MailCraft - Plateforme SaaS de Marketing par Email

Une plateforme SaaS moderne et intuitive pour créer, gérer et suivre les campagnes de marketing par email. Construite avec React 19, Tailwind CSS 4, et shadcn/ui.

![MailCraft](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## 🎯 Fonctionnalités Principales

### 📊 Tableau de Bord Analytique
- **Métriques en temps réel** : Taux d'ouverture, taux de clics, croissance des abonnés
- **Graphiques interactifs** : Visualisation des performances au fil du temps
- **Statistiques détaillées** : Emails envoyés, livrés, rebonds, désinscriptions

### ✉️ Générateur d'Emails Drag-and-Drop
- **Interface intuitive** : Glissez-déposez les blocs pour construire vos emails
- **Blocs modulaires** : Texte, Image, Bouton, Colonnes, Séparateur
- **Édition en temps réel** : Modifiez le contenu et les propriétés instantanément
- **Persistance locale** : Vos brouillons sont sauvegardés automatiquement

### 📚 Galerie de Modèles Pré-conçus
- **8 templates professionnels** : Bienvenue, Promotion, Newsletter, Annonce, Événement, Transactionnel, etc.
- **Import en un clic** : Importez un modèle et personnalisez-le rapidement
- **Catégorisation intelligente** : Filtrez par type et recherchez facilement

### 📋 Gestion des Campagnes
- **Liste complète** : Visualisez toutes vos campagnes avec statuts
- **Statuts** : Brouillon, Planifiée, Active, Envoyée
- **Planification** : Programmez vos campagnes pour plus tard

### 👥 Gestion des Segments d'Abonnés
- **Tableau interactif** : Visualisez tous vos segments
- **Niveaux d'engagement** : Classez vos abonnés par engagement
- **Filtrage avancé** : Créez des segments personnalisés

### 🎨 Design Minimaliste et Professionnel
- **Palette de couleurs** : Corail vibrant, blanc pur, charbon profond
- **Animations fluides** : Transitions de 150-250ms pour une UX premium
- **Responsive** : Fonctionne parfaitement sur tous les appareils

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/DOWOU-Issa/mailcraft.git
cd mailcraft

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Le site sera accessible à `http://localhost:3000`

### Build pour la Production

```bash
pnpm build
pnpm preview
```

## 📁 Structure du Projet

```
mailcraft/
├── client/
│   ├── src/
│   │   ├── pages/           # Pages principales (Dashboard, EmailBuilder, etc.)
│   │   ├── components/      # Composants réutilisables
│   │   ├── hooks/           # Hooks personnalisés (useEmailDraft)
│   │   ├── lib/             # Utilitaires et données (emailTemplates)
│   │   ├── contexts/        # Contextes React
│   │   ├── App.tsx          # Routeur principal
│   │   └── index.css        # Styles globaux et design tokens
│   ├── public/              # Fichiers statiques
│   └── index.html           # Template HTML
├── server/                  # Serveur Express (placeholder)
├── package.json             # Dépendances du projet
└── README.md               # Ce fichier
```

## 🛠️ Technologies Utilisées

### Frontend
- **React 19** - Framework UI moderne
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Composants UI accessibles et personnalisables
- **Wouter** - Routeur léger pour React
- **Framer Motion** - Animations fluides
- **Recharts** - Graphiques interactifs
- **react-beautiful-dnd** - Drag-and-drop intuitif
- **Sonner** - Notifications toast élégantes
- **Lucide React** - Icônes minimalistes

### Styling
- **Tailwind CSS 4** avec variables CSS OKLCH
- **Design tokens** personnalisés pour la cohérence
- **Animations CSS** pour les micro-interactions

### Outils de Développement
- **Vite** - Bundler ultra-rapide
- **TypeScript** - Typage statique
- **Prettier** - Formatage du code
- **ESLint** - Linting

## 📖 Guide d'Utilisation

### Créer un Email

1. **Accédez au Générateur** : Cliquez sur "Générateur" dans la navigation
2. **Ajoutez des blocs** : Cliquez sur les boutons de blocs disponibles (Texte, Image, Bouton, etc.)
3. **Réorganisez** : Glissez-déposez les blocs pour les réorganiser
4. **Éditez** : Cliquez sur un bloc pour éditer son contenu dans le panneau de propriétés
5. **Sauvegardez** : Votre brouillon est sauvegardé automatiquement

### Utiliser un Modèle

1. **Ouvrez la galerie** : Cliquez sur "Galerie" dans le générateur
2. **Sélectionnez** : Parcourez les modèles par catégorie ou recherchez
3. **Importez** : Cliquez sur "Importer" pour charger le modèle
4. **Personnalisez** : Modifiez le contenu selon vos besoins

### Gérer les Campagnes

1. **Accédez à Campagnes** : Cliquez sur "Campagnes" dans la navigation
2. **Créez une nouvelle** : Cliquez sur "Nouvelle Campagne"
3. **Configurez** : Définissez le titre, la description, et le statut
4. **Planifiez** : Choisissez la date et l'heure d'envoi

## 🎨 Design et UX

### Philosophie de Design
- **Minimalisme Chaleureux** : Clarté radicale avec accent corail vibrant
- **Respiration Généreuse** : Espaces blancs abondants pour réduire la charge cognitive
- **Interactions Fluides** : Transitions 150-250ms pour une sensation premium
- **Typographie Intentionnelle** : Geist pour les titres, Inter pour le corps

### Palette de Couleurs
- **Corail Primaire** : `#FF6B5B` - Actions et éléments actifs
- **Blanc Pur** : `#FFFFFF` - Fonds et espacements
- **Charbon Profond** : `#2C2C2C` - Textes et contrastes

## 🔄 Persistance des Données

### localStorage
- Les brouillons d'emails sont sauvegardés automatiquement dans `localStorage`
- Les données persistent entre les sessions
- Utilisez le bouton "Réinitialiser" pour effacer le brouillon

### Améliorations Futures
- Intégration d'une base de données pour la persistance serveur
- Synchronisation multi-appareils
- Historique des versions

## 📦 Dépendances Principales

```json
{
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "tailwindcss": "^4.1.14",
  "@radix-ui/*": "dernière version",
  "react-beautiful-dnd": "^13.1.1",
  "recharts": "^2.15.2",
  "sonner": "^2.0.7",
  "framer-motion": "^12.23.22",
  "lucide-react": "^0.453.0"
}
```

## 🚀 Déploiement

### Déployer sur Manus
Le projet est prêt à être déployé sur la plateforme Manus avec un clic.

### Déployer ailleurs
```bash
# Build
pnpm build

# Le dossier dist/ contient les fichiers prêts pour la production
# Déployez-le sur votre hébergeur préféré (Vercel, Netlify, etc.)
```

## 🐛 Dépannage

### Le brouillon ne se sauvegarde pas
- Vérifiez que localStorage est activé dans votre navigateur
- Videz le cache et rechargez la page

### Les animations sont saccadées
- Assurez-vous que votre navigateur supporte les animations CSS3
- Vérifiez que le GPU acceleration est activé

### Les modèles ne s'importent pas
- Rechargez la page
- Vérifiez la console pour les erreurs

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**DOWOU Issa**
- GitHub : [@DOWOU-Issa](https://github.com/DOWOU-Issa)
- Portfolio : [Votre portfolio]

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 🗺️ Roadmap

- [ ] Intégration d'une base de données (PostgreSQL)
- [ ] Authentification utilisateur
- [ ] Aperçu en temps réel du rendu HTML
- [ ] Export en HTML/PDF
- [ ] Intégration d'outils d'email (Mailgun, SendGrid)
- [ ] Éditeur WYSIWYG avancé
- [ ] Gestion des listes de diffusion
- [ ] Analytics détaillées
- [ ] A/B Testing
- [ ] Automatisation des campagnes

## 📞 Support

Pour toute question ou problème, veuillez :
1. Vérifier les [Issues existantes](https://github.com/DOWOU-Issa/mailcraft/issues)
2. Créer une nouvelle [Issue](https://github.com/DOWOU-Issa/mailcraft/issues/new)
3. Me contacter directement

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Wouter Router](https://github.com/molefrog/wouter)

---

**Fait  par DOWOU Issa**
