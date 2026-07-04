export interface EmailBlock {
  id: string;
  type: 'text' | 'image' | 'button' | 'divider' | 'columns';
  content?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  category: 'welcome' | 'promotional' | 'newsletter' | 'announcement' | 'event' | 'transactional';
  thumbnail?: string;
  blocks: EmailBlock[];
  tags: string[];
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'welcome-1',
    name: 'Bienvenue Classique',
    description: 'Un email de bienvenue simple et professionnel',
    category: 'welcome',
    thumbnail: '🎉',
    blocks: [
      { id: '1', type: 'text', content: 'Bienvenue chez MailCraft!' },
      { id: '2', type: 'text', content: 'Nous sommes ravis de vous accueillir. Découvrez comment créer des campagnes email exceptionnelles.' },
      { id: '3', type: 'button', buttonText: 'Commencer maintenant', buttonUrl: '#' },
      { id: '4', type: 'divider' },
      { id: '5', type: 'text', content: 'À bientôt!' },
    ],
    tags: ['welcome', 'simple', 'professionnel'],
  },
  {
    id: 'promo-1',
    name: 'Promotion Flash',
    description: 'Email de promotion avec offre limitée',
    category: 'promotional',
    thumbnail: '🔥',
    blocks: [
      { id: '1', type: 'text', content: 'OFFRE SPÉCIALE - 50% DE RÉDUCTION' },
      { id: '2', type: 'text', content: 'Durée limitée : 48 heures seulement!' },
      { id: '3', type: 'divider' },
      { id: '4', type: 'text', content: 'Profitez de nos meilleurs produits à prix réduit.' },
      { id: '5', type: 'button', buttonText: 'OBTENIR L\'OFFRE', buttonUrl: '#' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'text', content: 'Offre valide jusqu\'au 31 décembre 2024' },
    ],
    tags: ['promotion', 'vente', 'urgence'],
  },
  {
    id: 'newsletter-1',
    name: 'Newsletter Mensuelle',
    description: 'Template pour newsletter avec plusieurs sections',
    category: 'newsletter',
    thumbnail: '📰',
    blocks: [
      { id: '1', type: 'text', content: 'Votre Newsletter du Mois' },
      { id: '2', type: 'divider' },
      { id: '3', type: 'text', content: 'Article Principal' },
      { id: '4', type: 'text', content: 'Découvrez notre dernier article sur les tendances du marketing digital.' },
      { id: '5', type: 'button', buttonText: 'Lire l\'article', buttonUrl: '#' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'text', content: 'Actualités' },
      { id: '8', type: 'text', content: '• Nouvelle fonctionnalité lancée\n• Mise à jour de sécurité\n• Amélioration des performances' },
      { id: '9', type: 'button', buttonText: 'Voir toutes les actualités', buttonUrl: '#' },
    ],
    tags: ['newsletter', 'contenu', 'mensuel'],
  },
  {
    id: 'announcement-1',
    name: 'Annonce Importante',
    description: 'Email d\'annonce pour informer les utilisateurs',
    category: 'announcement',
    thumbnail: '📢',
    blocks: [
      { id: '1', type: 'text', content: 'ANNONCE IMPORTANTE' },
      { id: '2', type: 'divider' },
      { id: '3', type: 'text', content: 'Nous avons le plaisir d\'annoncer...' },
      { id: '4', type: 'text', content: 'Détails complets de l\'annonce ici. Cela va changer votre expérience.' },
      { id: '5', type: 'button', buttonText: 'En savoir plus', buttonUrl: '#' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'text', content: 'Merci de votre attention!' },
    ],
    tags: ['annonce', 'information', 'important'],
  },
  {
    id: 'event-1',
    name: 'Invitation à un Événement',
    description: 'Email d\'invitation pour un événement ou webinaire',
    category: 'event',
    thumbnail: '🎪',
    blocks: [
      { id: '1', type: 'text', content: 'VOUS ÊTES INVITÉ!' },
      { id: '2', type: 'text', content: 'Rejoignez-nous pour un événement exclusif' },
      { id: '3', type: 'divider' },
      { id: '4', type: 'text', content: 'Événement: [Nom de l\'événement]\nDate: [Date]\nHeure: [Heure]\nLieu: [Lieu ou lien en ligne]' },
      { id: '5', type: 'button', buttonText: 'RÉSERVER VOTRE PLACE', buttonUrl: '#' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'text', content: 'Nombre de places limitées - Inscrivez-vous maintenant!' },
    ],
    tags: ['événement', 'invitation', 'webinaire'],
  },
  {
    id: 'transactional-1',
    name: 'Confirmation de Commande',
    description: 'Email de confirmation de commande',
    category: 'transactional',
    thumbnail: '✅',
    blocks: [
      { id: '1', type: 'text', content: 'Merci pour votre commande!' },
      { id: '2', type: 'text', content: 'Numéro de commande: #12345\nDate: 19 juin 2024' },
      { id: '3', type: 'divider' },
      { id: '4', type: 'text', content: 'Détails de la commande' },
      { id: '5', type: 'text', content: 'Produit 1 - €29.99\nProduit 2 - €49.99\nTotal: €79.98' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'button', buttonText: 'Suivre votre commande', buttonUrl: '#' },
      { id: '8', type: 'text', content: 'Vous recevrez un email de confirmation d\'expédition bientôt.' },
    ],
    tags: ['commande', 'confirmation', 'transactionnel'],
  },
  {
    id: 'welcome-2',
    name: 'Bienvenue Premium',
    description: 'Email de bienvenue avec design premium',
    category: 'welcome',
    thumbnail: '👑',
    blocks: [
      { id: '1', type: 'text', content: 'Bienvenue dans notre communauté premium!' },
      { id: '2', type: 'divider' },
      { id: '3', type: 'text', content: 'Vous avez accès à des avantages exclusifs' },
      { id: '4', type: 'text', content: '✨ Accès anticipé aux nouvelles fonctionnalités\n✨ Support prioritaire\n✨ Contenu exclusif\n✨ Remises spéciales' },
      { id: '5', type: 'button', buttonText: 'Explorer les avantages', buttonUrl: '#' },
      { id: '6', type: 'divider' },
      { id: '7', type: 'text', content: 'Nous sommes heureux de vous avoir parmi nous!' },
    ],
    tags: ['welcome', 'premium', 'exclusif'],
  },
  {
    id: 'promo-2',
    name: 'Réactivation Client',
    description: 'Email pour réactiver les clients inactifs',
    category: 'promotional',
    thumbnail: '🔔',
    blocks: [
      { id: '1', type: 'text', content: 'On vous a manqué!' },
      { id: '2', type: 'text', content: 'Cela fait un moment que nous ne vous avons pas vu. Revenez et découvrez les nouveautés.' },
      { id: '3', type: 'divider' },
      { id: '4', type: 'text', content: 'OFFRE SPÉCIALE POUR VOUS' },
      { id: '5', type: 'text', content: 'Code promo: WELCOME20 - 20% de réduction' },
      { id: '6', type: 'button', buttonText: 'Utiliser mon code', buttonUrl: '#' },
      { id: '7', type: 'divider' },
      { id: '8', type: 'text', content: 'Valide jusqu\'au 31 décembre 2024' },
    ],
    tags: ['réactivation', 'promotion', 'client'],
  },
];

export const getTemplatesByCategory = (category: EmailTemplate['category']) => {
  return emailTemplates.filter(t => t.category === category);
};

export const searchTemplates = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return emailTemplates.filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
