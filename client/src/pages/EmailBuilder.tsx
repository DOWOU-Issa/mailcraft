import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Type, Image, Zap, Columns2, Minus } from 'lucide-react';

interface EmailBlock {
  id: string;
  type: 'text' | 'image' | 'button' | 'divider' | 'columns';
  content?: string;
}

export default function EmailBuilder() {
  const [blocks, setBlocks] = useState<EmailBlock[]>([
    { id: '1', type: 'text', content: 'Votre titre ici' },
  ]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>('1');

  const addBlock = (type: EmailBlock['type']) => {
    const newBlock: EmailBlock = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? 'Nouveau texte' : undefined,
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(newBlock.id);
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    setSelectedBlock(null);
  };

  const blockIcons = {
    text: <Type className="w-5 h-5" />,
    image: <Image className="w-5 h-5" />,
    button: <Zap className="w-5 h-5" />,
    columns: <Columns2 className="w-5 h-5" />,
    divider: <Minus className="w-5 h-5" />,
  };

  const blockLabels = {
    text: 'Texte',
    image: 'Image',
    button: 'Bouton',
    columns: 'Colonnes',
    divider: 'Séparateur',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Générateur d'emails</h1>
        <p className="text-muted-foreground">Créez vos emails en glissant et déposant des blocs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-8">
            <h3 className="font-bold text-foreground mb-4">Blocs</h3>
            <div className="space-y-2">
              {(Object.keys(blockLabels) as Array<keyof typeof blockLabels>).map((type) => (
                <button
                  key={type}
                  onClick={() => addBlock(type)}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm text-foreground"
                >
                  {blockIcons[type]}
                  {blockLabels[type]}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Canvas */}
        <div className="lg:col-span-2">
          <Card className="p-8 min-h-96 bg-white border-2 border-dashed border-border">
            <div className="space-y-3">
              {blocks.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Commencez par ajouter des blocs</p>
                </div>
              ) : (
                blocks.map((block) => (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlock(block.id)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedBlock === block.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {blockIcons[block.type]}
                        <span className="font-medium text-foreground capitalize">
                          {blockLabels[block.type]}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeBlock(block.id);
                        }}
                        className="text-destructive hover:bg-destructive/10 p-2 rounded"
                      >
                        ×
                      </button>
                    </div>
                    {block.content && (
                      <p className="text-sm text-muted-foreground mt-2">{block.content}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Properties */}
        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-8">
            <h3 className="font-bold text-foreground mb-4">Propriétés</h3>
            {selectedBlock ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Type
                  </label>
                  <p className="text-sm text-muted-foreground capitalize">
                    {blockLabels[blocks.find(b => b.id === selectedBlock)?.type || 'text']}
                  </p>
                </div>
                {blocks.find(b => b.id === selectedBlock)?.type === 'text' && (
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Contenu
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                      defaultValue={blocks.find(b => b.id === selectedBlock)?.content}
                    />
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => removeBlock(selectedBlock)}
                >
                  Supprimer
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Sélectionnez un bloc pour éditer</p>
            )}
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline">Annuler</Button>
        <Button className="bg-primary hover:bg-primary/90">Enregistrer et continuer</Button>
      </div>
    </div>
  );
}
