export interface Achievement {
  id: string;
  title: string;
  winnerName: string;
  category: string;
  tournament: string;
  badge: string;
  imageUrl: string;
  description: string;
  year: number;
  featured?: boolean;
  objectPosition?: string;
}

export interface Program {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Kids' | 'Tournament Prep';
  ageGroup: string;
  duration: string;
  description: string;
  highlights: string[];
  coachingFormat: string;
  iconName: string;
  popular?: boolean;
}

export interface ChessEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Tournament' | 'Workshop' | 'Simul' | 'Masterclass';
  description: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  entryFee?: string;
  maxParticipants?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training' | 'Tournaments' | 'Events' | 'Academy';
  imageUrl: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  role: string; // e.g. "Parent of Arjun (U-10 Champ)", "FIDE Rated Student"
  rating: number;
  avatarUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'Openings' | 'Endgames' | 'Tactics' | 'Guides' | 'Psychology';
  readTime: string;
  summary: string;
  content: string;
  pdfUrl?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Master';
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  benefits: string[];
  fullDetails?: {
    overview: string;
    schedule: string;
    targetAudience: string;
    coachingRatio: string;
  };
}
