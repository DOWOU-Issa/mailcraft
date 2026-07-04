import { useState, useEffect } from 'react';

interface EmailBlock {
  id: string;
  type: 'text' | 'image' | 'button' | 'divider' | 'columns';
  content?: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface EmailDraft {
  blocks: EmailBlock[];
  lastSaved: number;
}

const DRAFT_KEY = 'mailcraft_email_draft';

export function useEmailDraft(initialBlocks: EmailBlock[]) {
  const [blocks, setBlocks] = useState<EmailBlock[]>(initialBlocks);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Charger le brouillon au montage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const draft: EmailDraft = JSON.parse(saved);
        setBlocks(draft.blocks);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du brouillon:', error);
    }
    setHasLoaded(true);
  }, []);

  // Sauvegarder le brouillon à chaque changement
  useEffect(() => {
    if (!hasLoaded) return;

    try {
      const draft: EmailDraft = {
        blocks,
        lastSaved: Date.now(),
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du brouillon:', error);
    }
  }, [blocks, hasLoaded]);

  const clearDraft = () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
      setBlocks(initialBlocks);
    } catch (error) {
      console.error('Erreur lors de la suppression du brouillon:', error);
    }
  };

  const getDraftInfo = () => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const draft: EmailDraft = JSON.parse(saved);
        return {
          exists: true,
          lastSaved: new Date(draft.lastSaved),
        };
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des infos du brouillon:', error);
    }
    return { exists: false };
  };

  return {
    blocks,
    setBlocks,
    clearDraft,
    getDraftInfo,
    hasLoaded,
  };
}
