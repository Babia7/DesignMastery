

export type Category = 'UI Trend' | 'UX Principle' | 'Performance' | 'EdTech' | 'Accessibility' | 'Psychology' | 'Design Systems' | 'Color Theory' | 'Typography' | 'Mobile UX' | 'Anti-Pattern' | 'Gestalt' | 'Case Study' | 'Theme';

export interface Lesson {
  id: string;
  title: string;
  category: Category;
  description: string;
  content: string; // Markdown supported
  interactiveComponent?: 'Glassmorphism' | 'MicroInteraction' | 'FluidMotion' | 'GlossaryDemo' | 'Performance' | 'FlashcardDemo' | 'BentoGrid' | 'SkeletonLoader' | 'ScrollAnimation' | 'MasteryPath' | 'DarkMode' | 'EmptyState' | 'Neumorphism' | 'ProgressiveDisclosure' | 'VariableFonts' | 'Toast' | 'SwipeAction' | 'FileUpload' | 'Onboarding' | 'Leaderboard' | 'FocusDemo' | 'HicksLawDemo' | 'AtomicDesignDemo' | 'ColorRuleDemo' | 'TypographyDemo' | 'ThumbZoneDemo' | 'WebVitalsDemo' | 'DebounceDemo' | 'VirtualizationDemo' | 'FittsLawDemo' | 'DesignTokensDemo' | 'ComponentPropsDemo' | 'ConfidenceDemo' | 'ChunkingDemo' | 'ScaffoldingDemo' | 'StreakDemo' | 'VisualEssay' | 'CelebrationDemo' | 'MistakeAnalysisDemo' | 'GoalSettingDemo' | 'OptimisticUIDemo' | 'SerialPositionDemo' | 'GradientMeshDemo' | 'ColorBlindnessDemo' | 'MysteryNavigationDemo' | 'ScrollJackingDemo' | 'GestaltProximityDemo' | 'GestaltCommonRegionDemo' | 'LinearCommandPalette' | 'DuolingoMascot' | 'AirbnbMapToggle' | 'ImprintTap' | 'BioluminescentDemo' | 'SwissPolarityDemo';
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}