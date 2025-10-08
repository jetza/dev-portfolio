import { LucideIcon } from 'lucide-react';

export interface DemoCard {
  id: number;
  title: string;
  icon: LucideIcon;
  position: string;
  count: string;
  isSpecial?: 'idCard' | 'codeEditor' | 'envelope' | 'qrCode';
}
