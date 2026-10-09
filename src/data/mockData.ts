import { Achievement, Program, ChessEvent, GalleryItem, Testimonial, Resource, Statistic, Service } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    title: 'State Champion 2025',
    winnerName: 'Aditya Varma',
    category: 'U-12 Category',
    tournament: 'Andhra Pradesh State Chess Championship',
    badge: 'WINNER',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200',
    description: 'Secured 1st position with an undefeated 8.5/9 score in the state championship.',
    year: 2025,
    featured: true
  },
  {
    id: 'ach-2',
    title: 'National Blitz Gold',
    winnerName: 'Sreya Kolluri',
    category: 'U-14 Girls Category',
    tournament: 'All India National Junior Blitz Championship',
    badge: 'GOLD MEDAL',
    imageUrl: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=1200',
    description: 'Demonstrated exceptional speed and tactical accuracy across 11 rounds.',
    year: 2025
  },
  {
    id: 'ach-3',
    title: 'National Junior Silver',
    winnerName: 'Rohan Mehta',
    category: 'U-10 Open Category',
    tournament: 'National School Chess Championship',
    badge: 'SILVER MEDAL',
    imageUrl: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=1200',
    description: 'Outstanding performance securing 2nd rank in a field of 300+ prodigies.',
    year: 2025
  },
  {
    id: 'ach-4',
    title: 'FIDE Rated Top Junior',
    winnerName: 'Kavya Reddy',
    category: 'U-16 Category',
    tournament: 'International FIDE Open Tournament',
    badge: 'BRONZE MEDAL',
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1200',
    description: 'Gained +140 FIDE ELO rating points competing against rated masters.',
    year: 2024
  }
];

export const statisticsData: Statistic[] = [
  {
    id: 'stat-1',
    value: '500+',
    label: 'Students Trained',
    iconName: 'GraduationCap'
  },
  {
    id: 'stat-2',
    value: '100+',
    label: 'Tournaments Participated',
    iconName: 'Trophy'
  },
  {
    id: 'stat-3',
    value: '50+',
    label: 'Medals Won',
    iconName: 'Award'
  },
  {
    id: 'stat-4',
    value: '10+',
    label: 'Years of Excellence',
    iconName: 'TrendingUp'
  }
];

export const programsData: Program[] = [
  {
    id: 'prog-1',
    title: 'Pawn to King (Foundations)',
    level: 'Kids',
    ageGroup: 'Ages 5 – 8',
    duration: '3 Months (2x weekly)',
    description: 'Playful and structured introduction to piece movements, basic checkmates, board vision, and etiquette.',
    highlights: ['Interactive chessboard stories', 'Basic piece value & captures', 'Fun mini-puzzles', 'Focus & attention building'],
    coachingFormat: 'Small Groups (Max 6 kids)',
    iconName: 'Crown',
    popular: true
  },
  {
    id: 'prog-2',
    title: 'Strategic Mastery (Intermediate)',
    level: 'Intermediate',
    ageGroup: 'Ages 8 – 14',
    duration: '6 Months (3x weekly)',
    description: 'Deep dive into tactical patterns, middle-game plans, pawn structures, and FIDE rating preparation.',
    highlights: ['Pin, fork, & skewer tactics', 'Basic opening principles', 'Rook & Pawn endgames', 'Tournament rules & clock play'],
    coachingFormat: 'Group Coaching & Analysis',
    iconName: 'Zap'
  },
  {
    id: 'prog-3',
    title: 'Grandmaster Blueprint (Advanced)',
    level: 'Advanced',
    ageGroup: 'Ages 10+',
    duration: 'Ongoing Annual Program',
    description: 'Intensive competitive training for aspiring FIDE rated tournament players aiming for state and national titles.',
    highlights: ['Deep engine opening analysis', 'Prophylaxis & positional sacrifice', 'Complex calculation training', 'Psychological match preparation'],
    coachingFormat: '1-on-1 GM & IM Mentorship',
    iconName: 'Trophy',
    popular: true
  },
  {
    id: 'prog-4',
    title: 'Tournament Prep & Opening Lab',
    level: 'Tournament Prep',
    ageGroup: 'All Competitive Players',
    duration: '4-Week Intensive Camp',
    description: 'Customized opening repertoire preparation and mock high-stress tournament matches with grandmasters.',
    highlights: ['Personalized repertoire builder', 'Opponent scouting techniques', 'Blitz & Rapid clock mastery', 'Post-game computer analysis'],
    coachingFormat: 'Simul & Match Seminars',
    iconName: 'Target'
  }
];

export const eventsData: ChessEvent[] = [
  {
    id: 'evt-1',
    title: 'Velocity Annual State Rapid Championship 2026',
    date: 'November 15, 2026',
    time: '09:00 AM - 05:00 PM IST',
    location: 'Velocity Grand Hall, Hyderabad',
    type: 'Tournament',
    description: 'FIDE recognized 7-round Swiss system rapid tournament with total cash prize of ₹1,50,000 + trophies.',
    status: 'Upcoming',
    entryFee: '₹750',
    maxParticipants: 150
  },
  {
    id: 'evt-2',
    title: 'GM Masterclass: Positional Sacrifices & Endgame Mastery',
    date: 'November 22, 2026',
    time: '02:00 PM - 06:00 PM IST',
    location: 'Interactive Online Studio & On-site',
    type: 'Masterclass',
    description: 'Exclusive 4-hour workshop conducted by International Master Srikanth V. focusing on modern endgame play.',
    status: 'Upcoming',
    entryFee: '₹500',
    maxParticipants: 50
  },
  {
    id: 'evt-3',
    title: 'Saturday Junior Blitz Arena (U-12 & U-16)',
    date: 'Every Saturday',
    time: '04:00 PM - 06:30 PM IST',
    location: 'Velocity Chess Academy Arena',
    type: 'Workshop',
    description: 'Weekly competitive blitz matches with live time controls, electronic boards, and Instant analysis.',
    status: 'Ongoing',
    entryFee: 'Free for Academy Students',
    maxParticipants: 40
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'State Championship Finals 2025',
    category: 'Tournaments',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200',
    caption: 'Aditya Varma focusing during the final round of AP State Championship.'
  },
  {
    id: 'gal-2',
    title: 'Luxury Academy Training Studio',
    category: 'Academy',
    imageUrl: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=1200',
    caption: 'Sunlit training environment equipped with DGT electronic boards and wooden chess sets.'
  },
  {
    id: 'gal-3',
    title: 'Junior Tactics Masterclass',
    category: 'Training',
    imageUrl: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=1200',
    caption: 'Young prodigies analyzing tactical combinations on interactive demonstration boards.'
  },
  {
    id: 'gal-4',
    title: 'Annual Awards & Trophy Ceremony',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1200',
    caption: 'Celebrating our gold and silver medalists at the annual Velocity gala.'
  },
  {
    id: 'gal-5',
    title: 'Simultaneous Exhibition (Simul)',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1200',
    caption: 'Grandmaster playing against 20 top academy students simultaneously.'
  },
  {
    id: 'gal-6',
    title: 'One-on-One Mentorship',
    category: 'Training',
    imageUrl: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=1200',
    caption: 'Personalized opening preparation and computer analysis with senior coaches.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Velocity Chess Academy transformed my son's concentration and academic confidence within 6 months. Aditya winning the U-12 State Championship was a proud moment for our entire family!",
    authorName: 'Ramesh Varma',
    role: 'Parent of Aditya Varma (State Champion 2025)',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    quote: "The strategic thinking I learned here helped me not just cross 1800 FIDE rating, but also excel in mathematics and logical problem-solving at school.",
    authorName: 'Ananya Sharma',
    role: 'National Junior Silver Medalist',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    quote: "The environment is world-class. From warm lighting to Grandmaster coaches, Velocity provides an inspiring space for kids to cultivate passion for chess.",
    authorName: 'Dr. Meera Patel',
    role: 'Parent & Educationist',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];

export const resourcesData: Resource[] = [
  {
    id: 'res-1',
    title: 'Essential Chess Tactics: The 10 Patterns Every Beginner Must Master',
    category: 'Tactics',
    readTime: '8 min read',
    summary: 'Master forks, pins, skewers, discovered attacks, and double checks with step-by-step visual examples.',
    content: `Chess tactics form 90% of beginner and intermediate games. Understanding fundamental tactical patterns enables you to turn neutral positions into decisive wins.

### 1. The Knight Fork
Because knights move in an 'L' shape and can leap over pieces, they are lethal for multi-piece attacks. A fork occurs when a single piece attacks two or more opponent pieces simultaneously.

### 2. Absolute & Relative Pins
A pin restricts an enemy piece from moving because doing so would expose a higher-value piece (or King) behind it.

### 3. Discovered Check & Double Check
Moving one piece unmasks an attack from a Queen, Rook, or Bishop behind it. Double checks force the enemy King to move immediately!`,
    pdfUrl: '#download-tactics-pdf',
    difficulty: 'Beginner'
  },
  {
    id: 'res-2',
    title: 'The Modern Italian Repertoire for White',
    category: 'Openings',
    readTime: '12 min read',
    summary: 'A solid, active opening system with 1.e4 e5 2.Nf3 Nc6 3.Bc4 designed for rapid development and tactical king safety.',
    content: `The Italian Game is one of the oldest and most trusted chess openings. It teaches fundamental principles: central control, rapid piece development, and early castling.

### Key Move Order:
1. e4 e5
2. Nf3 Nc6
3. Bc4 Bc5
4. c3 Nf6
5. d3 d6

This setup gives White harmonious piece placement and a durable positional foundation.`,
    pdfUrl: '#download-italian-repertoire-pdf',
    difficulty: 'Intermediate'
  },
  {
    id: 'res-3',
    title: 'King & Pawn Endgames: The Rule of the Square & Opposition',
    category: 'Endgames',
    readTime: '10 min read',
    summary: 'Learn essential endgame concepts: Opposition, Outflanking, Key Squares, and calculating passed pawns.',
    content: `Endgames decide close matches. When all minor and major pieces are traded off, the King transforms into a powerful attacking piece.

### Key Concepts:
- **The Rule of the Square**: Calculate instantly whether your King can stop a passed pawn without counting moves.
- **Direct Opposition**: Placing your King facing the enemy King with one square between them when it is your opponent's turn to move.`,
    pdfUrl: '#download-endgame-pdf',
    difficulty: 'Intermediate'
  }
];

export const servicesData: Service[] = [
  {
    id: 'service-1',
    title: 'Regular Chess Classes',
    description: 'Structured online and offline classes for all age groups with expert coaches and a step-by-step curriculum.',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
    iconName: 'Users',
    benefits: [
      'Beginner to advanced levels',
      'Interactive learning methods',
      'Small group & 1-on-1 options'
    ],
    fullDetails: {
      overview: 'Our Regular Chess Classes offer systematic group instruction combining opening principles, middle-game tactics, and endgame fundamentals.',
      schedule: '2 to 3 sessions per week (Offline & Online batches available)',
      targetAudience: 'Kids (Ages 5+) and Adults aiming for structured progress',
      coachingRatio: 'Max 6 students per batch'
    }
  },
  {
    id: 'service-2',
    title: 'Personalized Coaching',
    description: "One-on-one training tailored to each student's strengths, weaknesses, and learning goals.",
    imageUrl: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800',
    iconName: 'TrendingUp',
    benefits: [
      'Customized training plans',
      'Regular progress tracking',
      'Focused skill development'
    ],
    fullDetails: {
      overview: 'Direct 1-on-1 mentorship with International Masters and Grandmasters focusing on personalized opening prep and deep game analysis.',
      schedule: 'Flexible private schedules (Weekdays & Weekends)',
      targetAudience: 'Competitive players & rating aspirants seeking rapid improvement',
      coachingRatio: '1-on-1 Private Mentorship'
    }
  },
  {
    id: 'service-3',
    title: 'Tournament Preparation',
    description: 'Specialized training to help students perform confidently in state, national, and international tournaments.',
    imageUrl: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Trophy',
    benefits: [
      'Opening & endgame strategies',
      'Time management practice',
      'Mock tournaments & analysis'
    ],
    fullDetails: {
      overview: 'Intensive pre-tournament bootcamps featuring opponent scouting, psychological prep, rapid blitz arenas, and engine analysis.',
      schedule: '4-Week Pre-Tournament Camps & Weekend Arenas',
      targetAudience: 'State, National, & FIDE Rated Tournament Participants',
      coachingRatio: 'Simul & Masterclass Sessions'
    }
  },
  {
    id: 'service-4',
    title: 'Online Chess Programs',
    description: 'Live interactive classes from anywhere with flexible timings and personalized guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800',
    iconName: 'Laptop',
    benefits: [
      'Live online classes (1-on-1 & group)',
      'Recorded sessions & resources',
      'Global access from anywhere'
    ],
    fullDetails: {
      overview: 'State-of-the-art virtual classroom platform with interactive DGT digital boards, screen sharing, recorded video archives, and homework modules.',
      schedule: '24/7 Global Timezone Batches',
      targetAudience: 'International students & remote learners across all timezones',
      coachingRatio: 'Interactive Virtual Batches & Private Rooms'
    }
  }
];
