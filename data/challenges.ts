import { 
  MousePointer2, Touchpad, CreditCard, Bell,  BanIcon,
  Search, ShieldCheck, Zap, Layout, 
  MessageSquare, Trash2, Smartphone, Type 
} from 'lucide-react';

export const challenges = [
  {
    id: 'destructive',
    title: 'Critical Actions',
    problem: 'The user is about to delete their entire workspace. How do you design the final button?',
    options: [
      { id: '1', label: 'Simple "Delete"', isCorrect: false, icon: Trash2, color: 'text-slate-400', description: 'Too easy to click accidentally.' },
      { id: '2', label: 'Type "DELETE" to confirm', isCorrect: true, icon: ShieldCheck, color: 'text-rose-600', description: 'High-friction for high-risk.' }
    ],
    lessonTitle: 'Friction as a Feature',
    lessonBody: 'Not all friction is bad. For irreversible actions, intentional friction prevents catastrophic user errors.'
  },
  {
    id: 'fittslaw',
    title: 'Target Sizing',
    problem: 'Where should the primary "Buy Now" button go on a mobile product page?',
    options: [
      { id: '1', label: 'Top Right Corner', isCorrect: false, icon: MousePointer2, color: 'text-slate-400', description: 'Hard to reach with one hand.' },
      { id: '2', label: 'Sticky Bottom Bar', isCorrect: true, icon: Touchpad, color: 'text-indigo-600', description: 'Perfect for the thumb zone.' }
    ],
    lessonTitle: "Fitts's Law",
    lessonBody: 'The time to acquire a target is a function of the distance to and size of the target. Keep key actions near the thumb.'
  },
  {
    id: 'notifications',
    title: 'Permission Requests',
    problem: 'When should you ask a user for Push Notification permissions?',
    options: [
      { id: '1', label: 'Immediately on App Launch', isCorrect: false, icon: Bell, color: 'text-rose-500', description: 'Users usually click "Block".' },
      { id: '2', label: 'After a "Success" action', isCorrect: true, icon: Zap, color: 'text-amber-500', description: 'Ask when value is proven.' }
    ],
    lessonTitle: 'Contextual Consent',
    lessonBody: 'Users are 40% more likely to grant permissions if they understand the immediate benefit of doing so.'
  },
  {
    id: 'hickslaw',
    title: 'Decision Fatigue',
    problem: 'Your pricing page has 8 different tiers. What should you do?',
    options: [
      { id: '1', label: 'Show all 8 options', isCorrect: false, icon: Layout, color: 'text-slate-400', description: 'Causes choice paralysis.' },
      { id: '2', label: 'Highlight 3 "Best" options', isCorrect: true, icon: Zap, color: 'text-indigo-600', description: 'Reduces cognitive load.' }
    ],
    lessonTitle: "Hick's Law",
    lessonBody: 'The time it takes to make a decision increases with the number and complexity of choices.'
  },
  {
    id: 'forms-realtime',
    title: 'Input Validation',
    problem: 'A user is choosing a password. When do you show them it is too short?',
    options: [
      { id: '1', label: 'After they click "Submit"', isCorrect: false, icon: MessageSquare, color: 'text-slate-400', description: 'Frustrating "Go Back" loop.' },
      { id: '2', label: 'While they are typing', isCorrect: true, icon: Type, color: 'text-emerald-600', description: 'Immediate correction.' }
    ],
    lessonTitle: 'Inline Feedback',
    lessonBody: 'Real-time validation reduces form completion time and decreases user frustration.'
  },
  {
    id: 'social-proof',
    title: 'Trust Signals',
    problem: 'A user is on a "Sign Up" page. What increases conversion most?',
    options: [
      { id: '1', label: 'A "Secure SSL" badge', isCorrect: false, icon: ShieldCheck, color: 'text-slate-400', description: 'Expected, but invisible.' },
      { id: '2', label: '"Joined by 10k+ designers"', isCorrect: true, icon: MessageSquare, color: 'text-indigo-600', description: 'Social validation works.' }
    ],
    lessonTitle: 'Social Proof',
    lessonBody: 'People look to the behavior of others to determine their own actions, especially when uncertain.'
  },
  {
    id: 'search',
    title: 'Search UX',
    problem: 'The user clicks the search bar. What should happen immediately?',
    options: [
      { id: '1', label: 'Empty white space', isCorrect: false, icon: Search, color: 'text-slate-400', description: 'User has to think of a term.' },
      { id: '2', label: 'Show "Recent Searches"', isCorrect: true, icon: Zap, color: 'text-cyan-600', description: 'Memory retrieval is hard.' }
    ],
    lessonTitle: 'Recognition > Recall',
    lessonBody: 'It is easier for users to recognize an item from a list than to recall it from their own memory.'
  },
  {
    id: 'scrolling-2',
    title: 'Visual Cues',
    problem: 'Your landing page has a large "Hero" image that perfectly fits the screen.',
    options: [
      { id: '1', label: 'Keep it clean and centered', isCorrect: false, icon: Layout, color: 'text-slate-400', description: 'Users might not know to scroll.' },
      { id: '2', label: 'Show 10% of the next section', isCorrect: true, icon: Smartphone, color: 'text-indigo-600', description: 'Visual cue for more content.' }
    ],
    lessonTitle: 'The Illusion of Completeness',
    lessonBody: 'If a page looks complete, users stop scrolling. "Peeking" content encourages further exploration.'
  },
  {
    id: 'errors',
    title: 'Error Tone',
    problem: 'The user forgot to fill a required field. What should the error say?',
    options: [
      { id: '1', label: 'ERROR: Field is required', isCorrect: false, icon: BanIcon, color: 'text-rose-600', description: 'Robotic and accusatory.' },
      { id: '2', label: 'Please enter your name', isCorrect: true, icon: MessageSquare, color: 'text-slate-800', description: 'Human and helpful.' }
    ],
    lessonTitle: 'Human-Centric Copy',
    lessonBody: 'Microcopy should speak like a person. Avoid "System Speak" to keep the user calm and moving.'
  },
  {
    id: 'checkout-ux',
    title: 'Payment Flow',
    problem: 'A user is at the final "Pay" screen. How do you handle the price?',
    options: [
      { id: '1', label: 'Hide total until last click', isCorrect: false, icon: CreditCard, color: 'text-slate-400', description: 'Causes "Sticker Shock".' },
      { id: '2', label: 'Breakdown: Price + Tax + Ship', isCorrect: true, icon: Layout, color: 'text-indigo-600', description: 'Transparency builds trust.' }
    ],
    lessonTitle: 'Radical Transparency',
    lessonBody: 'Unexpected costs at checkout are the #1 reason for cart abandonment. Show the total early.'
  }
];