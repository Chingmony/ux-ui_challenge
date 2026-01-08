import { 
  MousePointer2, Touchpad, CreditCard, Bell, Ban,
  Search, ShieldCheck, Zap, Layout, Eye,
  MessageSquare, Trash2, Smartphone, Type,
  Layers, Filter, Clock, CheckCircle2, 
  HelpCircle, UserPlus, Fingerprint, Lock,
  LucideIcon 
} from 'lucide-react';

export interface ChallengeOption {
  id: string;
  label: string;
  isCorrect: boolean;
  icon: LucideIcon;
  color: string;
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  problem: string;
  icon: LucideIcon; // Required for the home grid
  options: ChallengeOption[];
  lessonTitle: string;
  lessonBody: string;
}

export const challenges: Challenge[] = [
  {
    id: 'destructive',
    title: 'Critical Actions',
    icon: Trash2,
    problem: 'The user is about to delete their entire workspace. How do you design the final button?',
    options: [
      { id: '1', label: 'Simple "Delete"', isCorrect: false, icon: Trash2, color: 'text-slate-400', description: 'Too easy to click accidentally.' },
      { id: '2', label: 'Type "DELETE" to confirm', isCorrect: true, icon: ShieldCheck, color: 'text-rose-600', description: 'High-friction for high-risk.' }
    ],
    lessonTitle: 'Friction as a Feature',
    lessonBody: 'For irreversible actions, intentional friction prevents catastrophic user errors.'
  },
  {
    id: 'fittslaw',
    title: 'Target Sizing',
    icon: Touchpad,
    problem: 'Where should the primary "Buy Now" button go on a mobile product page?',
    options: [
      { id: '1', label: 'Top Right Corner', isCorrect: false, icon: MousePointer2, color: 'text-slate-400', description: 'Hard to reach with one hand.' },
      { id: '2', label: 'Sticky Bottom Bar', isCorrect: true, icon: Touchpad, color: 'text-indigo-600', description: 'Perfect for the thumb zone.' }
    ],
    lessonTitle: "Fitts's Law",
    lessonBody: 'Keep key actions near the thumb. The time to acquire a target depends on distance and size.'
  },
  {
    id: 'notifications',
    title: 'Permission Requests',
    icon: Bell,
    problem: 'When should you ask a user for Push Notification permissions?',
    options: [
      { id: '1', label: 'Immediately on App Launch', isCorrect: false, icon: Bell, color: 'text-rose-500', description: 'Users usually click "Block".' },
      { id: '2', label: 'After a "Success" action', isCorrect: true, icon: Zap, color: 'text-amber-500', description: 'Ask when value is proven.' }
    ],
    lessonTitle: 'Contextual Consent',
    lessonBody: 'Users are more likely to grant permissions if they understand the immediate benefit.'
  },
  {
    id: 'hickslaw',
    title: 'Decision Fatigue',
    icon: Layout,
    problem: 'Your pricing page has 8 different tiers. What should you do?',
    options: [
      { id: '1', label: 'Show all 8 options', isCorrect: false, icon: Layout, color: 'text-slate-400', description: 'Causes choice paralysis.' },
      { id: '2', label: 'Highlight 3 "Best" options', isCorrect: true, icon: Zap, color: 'text-indigo-600', description: 'Reduces cognitive load.' }
    ],
    lessonTitle: "Hick's Law",
    lessonBody: 'Decision time increases with the number and complexity of choices.'
  },
  {
    id: 'forms-realtime',
    title: 'Input Validation',
    icon: Type,
    problem: 'A user is choosing a password. When do you show them it is too short?',
    options: [
      { id: '1', label: 'After they click "Submit"', isCorrect: false, icon: MessageSquare, color: 'text-slate-400', description: 'Frustrating "Go Back" loop.' },
      { id: '2', label: 'While they are typing', isCorrect: true, icon: Type, color: 'text-emerald-600', description: 'Immediate correction.' }
    ],
    lessonTitle: 'Inline Feedback',
    lessonBody: 'Real-time validation reduces form completion time and decreases frustration.'
  },
  {
    id: 'social-proof',
    title: 'Trust Signals',
    icon: MessageSquare,
    problem: 'A user is on a "Sign Up" page. What increases conversion most?',
    options: [
      { id: '1', label: 'A "Secure SSL" badge', isCorrect: false, icon: ShieldCheck, color: 'text-slate-400', description: 'Expected, but invisible.' },
      { id: '2', label: '"Joined by 10k+ designers"', isCorrect: true, icon: MessageSquare, color: 'text-indigo-600', description: 'Social validation works.' }
    ],
    lessonTitle: 'Social Proof',
    lessonBody: 'People look to the behavior of others to determine their own actions.'
  },
  {
    id: 'search',
    title: 'Search UX',
    icon: Search,
    problem: 'The user clicks the search bar. What should happen immediately?',
    options: [
      { id: '1', label: 'Empty white space', isCorrect: false, icon: Search, color: 'text-slate-400', description: 'User has to think of a term.' },
      { id: '2', label: 'Show "Recent Searches"', isCorrect: true, icon: Zap, color: 'text-cyan-600', description: 'Memory retrieval is hard.' }
    ],
    lessonTitle: 'Recognition > Recall',
    lessonBody: 'It is easier to recognize an item from a list than to recall it from memory.'
  },
  {
    id: 'scrolling-2',
    title: 'Visual Cues',
    icon: Smartphone,
    problem: 'Your landing page has a large "Hero" image that perfectly fits the screen.',
    options: [
      { id: '1', label: 'Keep it clean and centered', isCorrect: false, icon: Layout, color: 'text-slate-400', description: 'Users might not know to scroll.' },
      { id: '2', label: 'Show 10% of the next section', isCorrect: true, icon: Smartphone, color: 'text-indigo-600', description: 'Visual cue for more content.' }
    ],
    lessonTitle: 'The Illusion of Completeness',
    lessonBody: 'If a page looks complete, users stop. "Peeking" content encourages exploration.'
  },
  {
    id: 'errors',
    title: 'Error Tone',
    icon: Ban,
    problem: 'The user forgot to fill a required field. What should the error say?',
    options: [
      { id: '1', label: 'ERROR: Field is required', isCorrect: false, icon: Ban, color: 'text-rose-600', description: 'Robotic and accusatory.' },
      { id: '2', label: 'Please enter your name', isCorrect: true, icon: MessageSquare, color: 'text-slate-800', description: 'Human and helpful.' }
    ],
    lessonTitle: 'Human-Centric Copy',
    lessonBody: 'Microcopy should speak like a person. Avoid "System Speak" to keep users calm.'
  },
  {
    id: 'checkout-ux',
    title: 'Payment Flow',
    icon: CreditCard,
    problem: 'A user is at the final "Pay" screen. How do you handle the price?',
    options: [
      { id: '1', label: 'Hide total until last click', isCorrect: false, icon: CreditCard, color: 'text-slate-400', description: 'Causes sticker shock.' },
      { id: '2', label: 'Breakdown: Price + Tax', isCorrect: true, icon: Layout, color: 'text-indigo-600', description: 'Transparency builds trust.' }
    ],
    lessonTitle: 'Radical Transparency',
    lessonBody: 'Unexpected costs at checkout are the #1 reason for cart abandonment.'
  },
  {
    id: 'zeigarnik',
    title: 'Task Completion',
    icon: Layers,
    problem: 'A user is onboarding. How do you encourage them to finish their profile?',
    options: [
      { id: '1', label: 'Send an email reminder', isCorrect: false, icon: MessageSquare, color: 'text-slate-400', description: 'Easily ignored or marked as spam.' },
      { id: '2', label: 'Show a Progress Bar (60%)', isCorrect: true, icon: Layers, color: 'text-indigo-600', description: 'Unfinished tasks create tension.' }
    ],
    lessonTitle: 'Zeigarnik Effect',
    lessonBody: 'Unfinished tasks create mental tension. A progress bar triggers a need for closure.'
  },
  {
    id: 'millers-law',
    title: 'Information Groups',
    icon: Filter,
    problem: 'You are designing a long settings menu with 15 options. How do you present them?',
    options: [
      { id: '1', label: 'One long list', isCorrect: false, icon: Filter, color: 'text-slate-400', description: 'Overwhelms the working memory.' },
      { id: '2', label: 'Group into 4 categories', isCorrect: true, icon: Layout, color: 'text-cyan-600', description: 'Chunking makes info digestible.' }
    ],
    lessonTitle: "Miller's Law",
    lessonBody: 'People can only keep ~7 items in working memory. Grouping info helps significantly.'
  },
  {
    id: 'peak-end',
    title: 'Experience Memory',
    icon: Zap,
    problem: 'A user just finished a difficult process. How should the app end?',
    options: [
      { id: '1', label: 'Redirect to Dashboard', isCorrect: false, icon: Smartphone, color: 'text-slate-400', description: 'A missed emotional opportunity.' },
      { id: '2', label: 'Show "Congrats!" animation', isCorrect: true, icon: Zap, color: 'text-amber-500', description: 'Ends the journey on a high note.' }
    ],
    lessonTitle: 'Peak-End Rule',
    lessonBody: 'Users judge an experience based on how they felt at its peak and its end.'
  },
  {
    id: 'aesthetic-usability',
    title: 'Visual Trust',
    icon: Eye,
    problem: 'You have a fast ugly app vs a beautiful slightly slower app. Which feels better?',
    options: [
      { id: '1', label: 'Focus only on speed', isCorrect: false, icon: Clock, color: 'text-slate-400', description: 'Function alone feels "broken".' },
      { id: '2', label: 'Invest in UI Polish', isCorrect: true, icon: Eye, color: 'text-fuchsia-600', description: 'Beautiful things feel easier to use.' }
    ],
    lessonTitle: 'Aesthetic-Usability Effect',
    lessonBody: 'Users perceive aesthetically pleasing design as more usable design.'
  },
  {
    id: 'skeleton-screens',
    title: 'Perceived Speed',
    icon: Clock,
    problem: 'Your API takes 2 seconds to load a list. What do you show?',
    options: [
      { id: '1', label: 'A spinning loader', isCorrect: false, icon: Zap, color: 'text-slate-400', description: 'Focuses attention on the wait.' },
      { id: '2', label: 'Grey content skeletons', isCorrect: true, icon: Layout, color: 'text-indigo-600', description: 'Gives the illusion of progress.' }
    ],
    lessonTitle: 'Perceived Performance',
    lessonBody: 'Skeleton screens feel faster because they show structure before content arrives.'
  },
  {
    id: 'default-bias',
    title: 'Smart Defaults',
    icon: CheckCircle2,
    problem: 'In a long form, how should the "Interests" checkboxes start?',
    options: [
      { id: '1', label: 'All unchecked', isCorrect: false, icon: Ban, color: 'text-slate-400', description: 'Requires more work from the user.' },
      { id: '2', label: 'Check the most popular', isCorrect: true, icon: CheckCircle2, color: 'text-emerald-600', description: 'Reduces the number of clicks.' }
    ],
    lessonTitle: 'Default Bias',
    lessonBody: 'Users stick with defaults. Setting smart defaults reduces cognitive effort.'
  },
  {
    id: 'horror-vacui',
    title: 'White Space',
    icon: UserPlus,
    problem: 'You have a dashboard with extra empty space. What do you do?',
    options: [
      { id: '1', label: 'Add more widgets', isCorrect: false, icon: UserPlus, color: 'text-slate-400', description: 'Clutter creates anxiety.' },
      { id: '2', label: 'Leave it empty', isCorrect: true, icon: Smartphone, color: 'text-slate-800', description: 'Space guides focus.' }
    ],
    lessonTitle: 'Horror Vacui',
    lessonBody: 'The "fear of empty space" leads to clutter. White space improves readability.'
  },
  {
    id: 'mental-models',
    title: 'Familiarity',
    icon: HelpCircle,
    problem: 'You are designing an E-commerce cart. Where do you put the icon?',
    options: [
      { id: '1', label: 'Bottom Left', isCorrect: false, icon: HelpCircle, color: 'text-slate-400', description: 'Confuses user expectations.' },
      { id: '2', label: 'Top Right', isCorrect: true, icon: Smartphone, color: 'text-indigo-600', description: 'Aligns with existing habits.' }
    ],
    lessonTitle: "Jakob's Law",
    lessonBody: 'Users prefer your site to work like all the other sites they already know.'
  },
  {
    id: 'biometrics',
    title: 'Authentication',
    icon: Fingerprint,
    problem: 'Which is the best primary login method for a high-frequency app?',
    options: [
      { id: '1', label: 'Complex Password', isCorrect: false, icon: Lock, color: 'text-slate-400', description: 'High friction, hard to remember.' },
      { id: '2', label: 'FaceID / Fingerprint', isCorrect: true, icon: Fingerprint, color: 'text-cyan-600', description: 'Effortless and secure.' }
    ],
    lessonTitle: 'Least Resistance',
    lessonBody: 'Users choose the path that requires the least effort to achieve their goal.'
  },
  {
    id: 'cta-contrast',
    title: 'Visual Hierarchy',
    icon: ShieldCheck,
    problem: 'How should "Cancel" and "Save" buttons look side by side?',
    options: [
      { id: '1', label: 'Both same style', isCorrect: false, icon: Layers, color: 'text-slate-400', description: 'Forces user to read both.' },
      { id: '2', label: 'Save: Bold, Cancel: Ghost', isCorrect: true, icon: Zap, color: 'text-indigo-600', description: 'Highlights the primary action.' }
    ],
    lessonTitle: 'Visual Anchoring',
    lessonBody: 'The most distinct object is the one users will focus on and remember most.'
  }
];