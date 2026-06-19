import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Mail, MousePointer, Users } from 'lucide-react';

// Mock data
const performanceData = [
  { date: 'May 1', openRate: 28, clickRate: 8 },
  { date: 'May 6', openRate: 32, clickRate: 9 },
  { date: 'May 11', openRate: 26, clickRate: 7 },
  { date: 'May 16', openRate: 30, clickRate: 8 },
  { date: 'May 21', openRate: 29, clickRate: 8 },
  { date: 'May 26', openRate: 31, clickRate: 9 },
  { date: 'May 31', openRate: 28, clickRate: 8 },
];

const campaignData = [
  { name: 'Welcome Series', openRate: 32, clickRate: 9 },
  { name: 'Product Launch', openRate: 29, clickRate: 7 },
  { name: 'Newsletter May', openRate: 27, clickRate: 6 },
  { name: 'Promotional', openRate: 25, clickRate: 5 },
];

export default function Dashboard() {
  const metrics = [
    {
      title: 'Taux d\'ouverture',
      value: '28.6%',
      change: '+4.3%',
      icon: <Mail className="w-8 h-8 text-primary" />,
      trend: 'up',
    },
    {
      title: 'Taux de clics',
      value: '7.4%',
      change: '+1.2%',
      icon: <MousePointer className="w-8 h-8 text-primary" />,
      trend: 'up',
    },
    {
      title: 'Croissance des abonnés',
      value: '+1,250',
      change: '+18.7%',
      icon: <Users className="w-8 h-8 text-primary" />,
      trend: 'up',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur MailCraft. Voici un aperçu de vos performances.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-200 animate-fade-in-up group" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium mb-1">{metric.title}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg transition-transform duration-200 group-hover:scale-110">{metric.icon}</div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-border/50">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{metric.change} vs Apr 1 - Apr 30</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Over Time */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Performances au fil du temps</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="openRate"
                stroke="#FF6B5B"
                strokeWidth={2}
                dot={{ fill: '#FF6B5B', r: 4 }}
                activeDot={{ r: 6 }}
                name="Taux d'ouverture (%)"
              />
              <Line
                type="monotone"
                dataKey="clickRate"
                stroke="#3C3C3C"
                strokeWidth={2}
                dot={{ fill: '#3C3C3C', r: 4 }}
                activeDot={{ r: 6 }}
                name="Taux de clics (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Campaign Performance */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Performance des campagnes</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="openRate" fill="#FF6B5B" name="Taux d'ouverture (%)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clickRate" fill="#3C3C3C" name="Taux de clics (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Emails envoyés', value: '12,543', change: '+8.9%' },
          { label: 'Emails livrés', value: '11,892', change: '94.8%' },
          { label: 'Rebonds', value: '651', change: '5.2%' },
          { label: 'Désinscriptions', value: '102', change: '0.81%' },
        ].map((item, idx) => (
          <Card key={idx} className="p-4 text-center hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: `${(idx + 3) * 100}ms` }}>
            <p className="text-xs text-muted-foreground font-medium mb-2 uppercase">{item.label}</p>
            <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
