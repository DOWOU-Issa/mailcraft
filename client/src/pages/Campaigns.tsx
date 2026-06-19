import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Send, Calendar, Users, TrendingUp } from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'scheduled' | 'sent' | 'active';
  recipients: number;
  openRate: number;
  clickRate: number;
  scheduledDate?: string;
  sentDate?: string;
}

export default function Campaigns() {
  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Welcome Series',
      status: 'sent',
      recipients: 2500,
      openRate: 32.1,
      clickRate: 8.7,
      sentDate: '2024-05-15',
    },
    {
      id: '2',
      name: 'Product Launch',
      status: 'sent',
      recipients: 3200,
      openRate: 29.3,
      clickRate: 7.1,
      sentDate: '2024-05-18',
    },
    {
      id: '3',
      name: 'Newsletter May',
      status: 'active',
      recipients: 4100,
      openRate: 26.8,
      clickRate: 6.3,
    },
    {
      id: '4',
      name: 'Summer Promotion',
      status: 'scheduled',
      recipients: 3800,
      openRate: 0,
      clickRate: 0,
      scheduledDate: '2024-06-01',
    },
    {
      id: '5',
      name: 'Customer Feedback',
      status: 'draft',
      recipients: 0,
      openRate: 0,
      clickRate: 0,
    },
  ]);

  const getStatusBadge = (status: Campaign['status']) => {
    const variants = {
      draft: 'bg-muted text-muted-foreground',
      scheduled: 'bg-blue-100 text-blue-800',
      active: 'bg-primary/20 text-primary',
      sent: 'bg-green-100 text-green-800',
    };
    const labels = {
      draft: 'Brouillon',
      scheduled: 'Planifiée',
      active: 'Active',
      sent: 'Envoyée',
    };
    return (
      <Badge className={variants[status]}>
        {labels[status]}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Campagnes</h1>
          <p className="text-muted-foreground">Gérez et suivez toutes vos campagnes d'email.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Send className="w-4 h-4" />
          Nouvelle campagne
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: campaigns.length, icon: <Send className="w-5 h-5" /> },
          { label: 'Actives', value: campaigns.filter(c => c.status === 'active').length, icon: <TrendingUp className="w-5 h-5" /> },
          { label: 'Planifiées', value: campaigns.filter(c => c.status === 'scheduled').length, icon: <Calendar className="w-5 h-5" /> },
          { label: 'Brouillons', value: campaigns.filter(c => c.status === 'draft').length, icon: <Users className="w-5 h-5" /> },
        ].map((stat, idx) => (
          <Card key={idx} className="p-4 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-primary">{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border hover:bg-transparent">
                <TableHead className="text-foreground font-bold">Nom</TableHead>
                <TableHead className="text-foreground font-bold">Statut</TableHead>
                <TableHead className="text-foreground font-bold text-right">Destinataires</TableHead>
                <TableHead className="text-foreground font-bold text-right">Taux d'ouverture</TableHead>
                <TableHead className="text-foreground font-bold text-right">Taux de clics</TableHead>
                <TableHead className="text-foreground font-bold">Date</TableHead>
                <TableHead className="text-foreground font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium text-foreground">{campaign.name}</TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell className="text-right text-foreground">{campaign.recipients.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-foreground">
                    {campaign.openRate > 0 ? `${campaign.openRate}%` : '—'}
                  </TableCell>
                  <TableCell className="text-right text-foreground">
                    {campaign.clickRate > 0 ? `${campaign.clickRate}%` : '—'}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {campaign.sentDate || campaign.scheduledDate || '—'}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
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
