import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Copy, Trash2 } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  category: 'welcome' | 'promotional' | 'newsletter' | 'transactional' | 'custom';
  thumbnail: string;
  usageCount: number;
  created: string;
}

export default function Templates() {
  const [templates] = useState<Template[]>([
    {
      id: '1',
      name: 'Welcome Series',
      category: 'welcome',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 12,
      created: '2024-01-15',
    },
    {
      id: '2',
      name: 'Summer Promo',
      category: 'promotional',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 8,
      created: '2024-02-20',
    },
    {
      id: '3',
      name: 'Monthly Newsletter',
      category: 'newsletter',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 24,
      created: '2024-01-01',
    },
    {
      id: '4',
      name: 'Order Confirmation',
      category: 'transactional',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 156,
      created: '2024-01-10',
    },
    {
      id: '5',
      name: 'Product Launch',
      category: 'promotional',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 5,
      created: '2024-03-15',
    },
    {
      id: '6',
      name: 'Customer Feedback',
      category: 'custom',
      thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/email-builder-illustration-gzZWsc3m4oE5EiHuyC9uFq.webp',
      usageCount: 3,
      created: '2024-04-01',
    },
  ]);

  const getCategoryColor = (category: Template['category']) => {
    const colors = {
      welcome: 'bg-blue-100 text-blue-800',
      promotional: 'bg-primary/20 text-primary',
      newsletter: 'bg-purple-100 text-purple-800',
      transactional: 'bg-green-100 text-green-800',
      custom: 'bg-gray-100 text-gray-800',
    };
    return colors[category];
  };

  const getCategoryLabel = (category: Template['category']) => {
    const labels = {
      welcome: 'Bienvenue',
      promotional: 'Promotionnel',
      newsletter: 'Infolettre',
      transactional: 'Transactionnel',
      custom: 'Personnalisé',
    };
    return labels[category];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Bibliothèque de modèles</h1>
          <p className="text-muted-foreground">Explorez et créez des modèles d'emails réutilisables.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" />
          Créer un modèle
        </Button>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, idx) => (
          <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-all duration-200 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
            {/* Thumbnail */}
            <div className="h-40 bg-muted overflow-hidden">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-bold text-foreground mb-2">{template.name}</h3>
                <Badge className={getCategoryColor(template.category)}>
                  {getCategoryLabel(template.category)}
                </Badge>
              </div>

              <div className="text-sm text-muted-foreground">
                Utilisé {template.usageCount} fois
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => console.log('Use template:', template.id)}
                >
                  <Copy className="w-4 h-4" />
                  Utiliser
                </Button>
                <button className="p-2 hover:bg-destructive/10 rounded transition-colors text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State for Custom Templates */}
      <Card className="p-12 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">Créer un modèle personnalisé</h3>
        <p className="text-muted-foreground mb-4">
          Enregistrez vos designs d'email comme modèles réutilisables
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Créer maintenant
        </Button>
      </Card>
    </div>
  );
}
