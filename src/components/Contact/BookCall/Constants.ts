import { Phone, Video, MessageCircle } from 'lucide-react';

export const COLORS = {
  primary: '#2e0f84',
  secondary: '#F6D663',
  primaryHover: '#3d1bad',
};

export const PLATFORMS = [
  { id: 'phone', label: 'Téléphone', icon: Phone },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { id: 'visio', label: 'Visio', icon: Video },
];

export const INTERESTS = [
  { id: 'web', label: 'Site Web' },
  { id: 'design', label: 'Design UI/UX' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'seo', label: 'Référencement' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'conseil', label: 'Conseil' },
];

export const STEPS_CONFIG = [
  { title: 'Informations personnelles', validateFields: ['firstName', 'lastName', 'email', 'phone'] },
  { title: 'Plateforme de rendez-vous', validateFields: ['platform'] },
  { title: "Centres d'intérêt", validateFields: ['interests'] },
  { title: 'Créneau horaire', validateFields: ['timeSlot'] },
  { title: 'Confirmation', validateFields: ['acceptTerms'] }
];