import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Type, Image, Zap, Columns2, Minus, GripVertical, Trash2 } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

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
  const [editContent, setEditContent] = useState<string>('');

  const addBlock = (type: EmailBlock['type']) => {
    const newBlock: EmailBlock = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? 'Nouveau texte' : undefined,
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(newBlock.id);
    setEditContent(newBlock.content || '');
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    if (selectedBlock === id) {
      setSelectedBlock(null);
    }
  };

  const updateBlockContent = (id: string, content: string) => {
    setBlocks(blocks.map(b => (b.id === id ? { ...b, content } : b)));
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Si on drop en dehors d'une zone valide
    if (!destination) {
      return;
    }

    // Si on drop à la même position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Réorganiser les blocs
    const newBlocks = Array.from(blocks);
    const [movedBlock] = newBlocks.splice(source.index, 1);
    newBlocks.splice(destination.index, 0, movedBlock);
    setBlocks(newBlocks);
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

  const handleSelectBlock = (blockId: string) => {
    setSelectedBlock(blockId);
    const block = blocks.find(b => b.id === blockId);
    setEditContent(block?.content || '');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Générateur d'emails</h1>
        <p className="text-muted-foreground">Créez vos emails en glissant et déposant des blocs. Réorganisez-les facilement.</p>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Blocs disponibles */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-8">
              <h3 className="font-bold text-foreground mb-4">Blocs disponibles</h3>
              <div className="space-y-2">
                {(Object.keys(blockLabels) as Array<keyof typeof blockLabels>).map((type) => (
                  <button
                    key={type}
                    onClick={() => addBlock(type)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm text-foreground hover:border-primary"
                  >
                    {blockIcons[type]}
                    {blockLabels[type]}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Canvas - Zone de construction */}
          <div className="lg:col-span-2">
            <Card className="p-8 min-h-96 bg-white border-2 border-dashed border-border">
              <Droppable droppableId="email-canvas">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`space-y-3 transition-all duration-200 rounded-lg ${
                      snapshot.isDraggingOver ? 'bg-primary/10 p-4 ring-2 ring-primary/30' : 'p-4'
                    }`}
                  >
                    {blocks.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">Commencez par ajouter des blocs</p>
                      </div>
                    ) : (
                      blocks.map((block, index) => (
                        <Draggable key={block.id} draggableId={block.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={`transition-all duration-200 ${
                                snapshot.isDragging
                                  ? 'shadow-2xl bg-primary/10 rounded-lg scale-105 rotate-1'
                                  : 'bg-white hover:shadow-md'
                              }`}
                            >
                              <div
                                onClick={() => handleSelectBlock(block.id)}
                                className={`p-4 rounded-lg border-2 transition-all duration-150 cursor-pointer flex items-center justify-between ${
                                  selectedBlock === block.id
                                    ? 'border-primary bg-primary/5 shadow-sm'
                                    : 'border-border hover:border-primary/50 hover:bg-muted/30'
                                }`}
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <div
                                    {...provided.dragHandleProps}
                                    className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    <GripVertical className="w-5 h-5" />
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {blockIcons[block.type]}
                                    <span className="font-medium text-foreground capitalize">
                                      {blockLabels[block.type]}
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeBlock(block.id);
                                  }}
                                  className="text-destructive hover:bg-destructive/10 p-2 rounded transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              {block.content && (
                                <p className="text-sm text-muted-foreground mt-2 ml-12 line-clamp-2">
                                  {block.content}
                                </p>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Card>
          </div>

          {/* Properties Panel */}
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
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        rows={4}
                        value={editContent}
                        onChange={(e) => {
                          setEditContent(e.target.value);
                          updateBlockContent(selectedBlock, e.target.value);
                        }}
                      />
                    </div>
                  )}
                  <Button
                    variant="outline"
                    className="w-full text-destructive hover:bg-destructive/10"
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
      </DragDropContext>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline">Annuler</Button>
        <Button className="bg-primary hover:bg-primary/90">Enregistrer et continuer</Button>
      </div>
    </div>
  );
}
