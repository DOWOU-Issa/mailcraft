import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Plus, Edit2, Trash2 } from 'lucide-react';

interface Segment {
  id: string;
  name: string;
  description: string;
  subscribers: number;
  engagement: 'high' | 'medium' | 'low';
  created: string;
  lastUpdated: string;
}

export default function Segments() {
  const [segments] = useState<Segment[]>([
    {
      id: '1',
      name: 'Clients actifs',
      description: 'Utilisateurs ayant ouvert un email dans les 30 derniers jours',
      subscribers: 2850,
      engagement: 'high',
      created: '2024-01-15',
      lastUpdated: '2024-05-20',
    },
    {
      id: '2',
      name: 'Nouveau clients',
      description: 'Inscrits depuis moins de 30 jours',
      subscribers: 420,
      engagement: 'high',
      created: '2024-03-10',
      lastUpdated: '2024-05-20',
    },
    {
      id: '3',
      name: 'Clients inactifs',
      description: 'N\'ont pas ouvert d\'email depuis 90 jours',
      subscribers: 1200,
      engagement: 'low',
      created: '2024-02-01',
      lastUpdated: '2024-05-19',
    },
    {
      id: '4',
      name: 'Clients premium',
      description: 'Clients avec abonnement premium actif',
      subscribers: 650,
      engagement: 'high',
      created: '2024-01-20',
      lastUpdated: '2024-05-20',
    },
    {
      id: '5',
      name: 'Intéressés par les produits',
      description: 'Ont cliqué sur des liens produits',
      subscribers: 1850,
      engagement: 'medium',
      created: '2024-02-15',
      lastUpdated: '2024-05-18',
    },
  ]);

  const getEngagementColor = (engagement: Segment['engagement']) => {
    const colors = {
      high: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-red-100 text-red-800',
    };
    return colors[engagement];
  };

  const getEngagementLabel = (engagement: Segment['engagement']) => {
    const labels = {
      high: 'Élevé',
      medium: 'Moyen',
      low: 'Faible',
    };
    return labels[engagement];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Segments d'abonnés</h1>
          <p className="text-muted-foreground">Organisez vos abonnés en segments pour des campagnes ciblées.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" />
          Nouveau segment
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Total d'abonnés</p>
              <p className="text-3xl font-bold text-foreground">
                {segments.reduce((sum, s) => sum + s.subscribers, 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </Card>
        <Card className="p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">Segments actifs</p>
            <p className="text-3xl font-bold text-foreground">{segments.length}</p>
          </div>
        </Card>
        <Card className="p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">Engagement moyen</p>
            <p className="text-3xl font-bold text-foreground">62%</p>
          </div>
        </Card>
      </div>

      {/* Segments Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border hover:bg-transparent">
                <TableHead className="text-foreground font-bold">Nom</TableHead>
                <TableHead className="text-foreground font-bold">Description</TableHead>
                <TableHead className="text-foreground font-bold text-right">Abonnés</TableHead>
                <TableHead className="text-foreground font-bold">Engagement</TableHead>
                <TableHead className="text-foreground font-bold">Créé</TableHead>
                <TableHead className="text-foreground font-bold">Mis à jour</TableHead>
                <TableHead className="text-foreground font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {segments.map((segment) => (
                <TableRow key={segment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium text-foreground">{segment.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{segment.description}</TableCell>
                  <TableCell className="text-right text-foreground font-medium">
                    {segment.subscribers.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getEngagementColor(segment.engagement)}`}>
                      {getEngagementLabel(segment.engagement)}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{segment.created}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{segment.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-muted rounded transition-colors text-foreground">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded transition-colors text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
