import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { emailTemplates, searchTemplates, type EmailTemplate } from '@/lib/emailTemplates';
import { Download, Search, X } from 'lucide-react';

interface TemplateGalleryProps {
  onSelectTemplate: (template: EmailTemplate) => void;
  onClose: () => void;
}

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'welcome', label: 'Bienvenue' },
  { id: 'promotional', label: 'Promotion' },
  { id: 'newsletter', label: 'Newsletter' },
  { id: 'announcement', label: 'Annonce' },
  { id: 'event', label: 'Événement' },
  { id: 'transactional', label: 'Transactionnel' },
];

export default function TemplateGallery({ onSelectTemplate, onClose }: TemplateGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = selectedCategory === 'all'
    ? (searchQuery ? searchTemplates(searchQuery) : emailTemplates)
    : emailTemplates.filter(t => 
        t.category === selectedCategory &&
        (!searchQuery || searchTemplates(searchQuery).some(st => st.id === t.id))
      );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Galerie de Modèles</h2>
            <p className="text-sm text-muted-foreground mt-1">Choisissez un modèle pour commencer</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pt-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher des modèles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 pb-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none p-0 h-auto">
              {categories.map(cat => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-4 py-2"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {filteredTemplates.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Aucun modèle trouvé</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map(template => (
                <div
                  key={template.id}
                  className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-4xl">
                    {template.thumbnail}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {template.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {template.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Import Button */}
                    <Button
                      onClick={() => onSelectTemplate(template)}
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Importer
                    </Button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
