

import React, { useState, useEffect, Suspense, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { lessons } from './data';
import { Category } from './types';
import { StaticVisual } from './components/StaticVisuals';
import { AdminPage } from './components/AdminPage';
import { 
  Menu, X, Layout, Zap, PenTool, BookOpen, ChevronRight, ArrowLeft, Download, 
  Settings, Loader2, Search, LayoutGrid, List as ListIcon, Check, ChevronDown, 
  Palette, Monitor, Grid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Theme Context ---
type Theme = 'default' | 'bioluminescent' | 'swiss';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'default', setTheme: () => {} });

// --- Lazy Load Demos ---
const lazyDemo = (name: string) => React.lazy(() => import('./components/InteractiveDemos').then(m => ({ default: (m as any)[name] })));

const DEMO_MAP: Record<string, React.LazyExoticComponent<any>> = {
  Glassmorphism: lazyDemo('GlassmorphismDemo'),
  MicroInteraction: lazyDemo('MicroInteractionDemo'),
  FluidMotion: lazyDemo('FluidMotionDemo'),
  GlossaryDemo: lazyDemo('GlossaryDemo'),
  Performance: lazyDemo('PerformanceDemo'),
  FlashcardDemo: lazyDemo('FlashcardDemo'),
  BentoGrid: lazyDemo('BentoGridDemo'),
  SkeletonLoader: lazyDemo('SkeletonLoaderDemo'),
  ScrollAnimation: lazyDemo('ScrollAnimationDemo'),
  MasteryPath: lazyDemo('MasteryPathDemo'),
  DarkMode: lazyDemo('DarkModeDemo'),
  EmptyState: lazyDemo('EmptyStateDemo'),
  Neumorphism: lazyDemo('NeumorphismDemo'),
  ProgressiveDisclosure: lazyDemo('ProgressiveDisclosureDemo'),
  VariableFonts: lazyDemo('VariableFontsDemo'),
  Toast: lazyDemo('ToastDemo'),
  SwipeAction: lazyDemo('SwipeActionDemo'),
  FileUpload: lazyDemo('FileUploadDemo'),
  Onboarding: lazyDemo('OnboardingTourDemo'),
  Leaderboard: lazyDemo('LeaderboardDemo'),
  FocusDemo: lazyDemo('FocusDemo'),
  HicksLawDemo: lazyDemo('HicksLawDemo'),
  AtomicDesignDemo: lazyDemo('AtomicDesignDemo'),
  ColorRuleDemo: lazyDemo('ColorRuleDemo'),
  TypographyDemo: lazyDemo('TypographyDemo'),
  ThumbZoneDemo: lazyDemo('ThumbZoneDemo'),
  WebVitalsDemo: lazyDemo('WebVitalsDemo'),
  DebounceDemo: lazyDemo('DebounceDemo'),
  VirtualizationDemo: lazyDemo('VirtualizationDemo'),
  FittsLawDemo: lazyDemo('FittsLawDemo'),
  DesignTokensDemo: lazyDemo('DesignTokensDemo'),
  ComponentPropsDemo: lazyDemo('ComponentPropsDemo'),
  ConfidenceDemo: lazyDemo('ConfidenceDemo'),
  ChunkingDemo: lazyDemo('ChunkingDemo'),
  ScaffoldingDemo: lazyDemo('ScaffoldingDemo'),
  StreakDemo: lazyDemo('StreakDemo'),
  VisualEssay: lazyDemo('VisualEssayDemo'),
  CelebrationDemo: lazyDemo('CelebrationDemo'),
  MistakeAnalysisDemo: lazyDemo('MistakeAnalysisDemo'),
  GoalSettingDemo: lazyDemo('GoalSettingDemo'),
  OptimisticUIDemo: lazyDemo('OptimisticUIDemo'),
  SerialPositionDemo: lazyDemo('SerialPositionDemo'),
  GradientMeshDemo: lazyDemo('GradientMeshDemo'),
  ColorBlindnessDemo: lazyDemo('ColorBlindnessDemo'),
  MysteryNavigationDemo: lazyDemo('MysteryNavigationDemo'),
  ScrollJackingDemo: lazyDemo('ScrollJackingDemo'),
  GestaltProximityDemo: lazyDemo('GestaltProximityDemo'),
  GestaltCommonRegionDemo: lazyDemo('GestaltCommonRegionDemo'),
  LinearCommandPalette: lazyDemo('LinearCommandPalette'),
  DuolingoMascot: lazyDemo('DuolingoMascot'),
  AirbnbMapToggle: lazyDemo('AirbnbMapToggle'),
  ImprintTap: lazyDemo('ImprintTap'),
  BioluminescentDemo: lazyDemo('BioluminescentDemo'),
  SwissPolarityDemo: lazyDemo('SwissPolarityDemo')
};

// --- Helper Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SimpleMarkdown = React.memo(({ content }: { content: string }) => {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
      {content.split('\n').map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} className="text-3xl mt-8 mb-4">{line.replace('# ', '')}</h1>;
        if (line.startsWith('## ')) return <h2 key={i} className="text-2xl mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">{line.replace('## ', '')}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} className="text-xl mt-6 mb-3 text-slate-800 dark:text-slate-200">{line.replace('### ', '')}</h3>;
        if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-indigo-500 pl-4 italic my-6 bg-indigo-50 dark:bg-indigo-900/20 py-2 pr-2 rounded-r">{line.replace('> ', '')}</blockquote>;
        if (line.startsWith('* ')) return <li key={i} className="ml-4 list-disc marker:text-indigo-500">{line.replace('* ', '')}</li>;
        if (line.match(/^\d\./)) return <li key={i} className="ml-4 list-decimal marker:text-indigo-500">{line.replace(/^\d\./, '')}</li>;
        if (line.startsWith('```')) return null; 
        if (line.trim() === '') return <br key={i} />;
        return <p key={i} className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">{line}</p>
      })}
    </div>
  );
});

// --- Pages ---

const EbookPage = () => {
  useEffect(() => {
    document.title = "DesignMastery_Curriculum.pdf";
    const timer = setTimeout(() => {
        window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen p-8 max-w-[210mm] mx-auto print:max-w-none print:p-0">
       <div className="h-[297mm] flex flex-col justify-center items-center text-center print-break-after">
           <div className="w-32 h-32 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mb-8">
               <span className="text-6xl font-bold">L</span>
           </div>
           <h1 className="text-5xl font-bold mb-4 text-slate-900">DesignMastery</h1>
           <p className="text-2xl text-slate-500 mb-12">Modern UI Engineering Curriculum</p>
           <div className="text-sm text-slate-400">Generated on {new Date().toLocaleDateString()}</div>
       </div>

       <div className="print-break-after min-h-[297mm] py-12">
           <h2 className="text-3xl font-bold mb-8 border-b-2 border-slate-900 pb-4">Table of Contents</h2>
           <div className="columns-2 gap-8">
               {lessons.map(lesson => (
                   <div key={lesson.id} className="mb-2 break-inside-avoid">
                       <span className="text-slate-400 text-xs uppercase tracking-wider mr-2">{lesson.category}</span>
                       <span className="font-medium">{lesson.title}</span>
                   </div>
               ))}
           </div>
       </div>

       <div className="space-y-12">
           {lessons.map(lesson => (
               <article key={lesson.id} className="print-break-before py-8">
                   <div className="mb-6 border-b border-slate-200 pb-4">
                       <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{lesson.category}</span>
                       <h2 className="text-3xl font-bold mt-2 text-slate-900">{lesson.title}</h2>
                   </div>
                   
                   <div className="mb-8 print-avoid-break">
                       <div className="border border-slate-200 rounded-lg p-1 bg-slate-50 static-visual-container">
                           <div className="bg-white p-4 rounded border border-slate-100">
                               <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-4 text-center">Visual Model</h4>
                               <StaticVisual type={lesson.interactiveComponent || lesson.category} />
                           </div>
                       </div>
                   </div>

                   <SimpleMarkdown content={lesson.content} />
               </article>
           ))}
       </div>

       <div className="print-footer hidden print:flex fixed bottom-0 left-0 right-0 justify-between px-8 py-4 border-t border-slate-200 bg-white text-xs text-slate-400">
           <span>DesignMastery Curriculum</span>
           <span>Page <span className="pageNumber"></span></span>
       </div>
    </div>
  );
}

const Home = () => {
    const [search, setSearch] = useState('');
    const [selectedCat, setSelectedCat] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const location = useLocation();
    const categories: Category[] = Array.from(new Set(lessons.map(l => l.category)));

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('cat');
        if (cat) setSelectedCat(cat);
    }, [location]);

    const filteredLessons = lessons.filter(l => {
        const matchesSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.description.toLowerCase().includes(search.toLowerCase());
        const matchesCat = selectedCat === 'All' || l.category === selectedCat;
        return matchesSearch && matchesCat;
    });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="relative rounded-3xl bg-slate-900 text-white p-6 md:p-10 overflow-hidden border border-slate-800 shadow-2xl">
                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                     <div className="max-w-2xl">
                         <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
                             Master Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">UI Engineering</span>
                         </h1>
                         <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                             An interactive encyclopedia of design patterns, UX psychology, and frontend performance techniques.
                         </p>
                     </div>
                     <div className="flex gap-6 border-l border-slate-700 pl-6 hidden md:flex">
                        <div>
                            <div className="text-2xl font-bold font-mono text-white">{lessons.length}</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Lessons</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-mono text-indigo-400">{categories.length}</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Topics</div>
                        </div>
                     </div>
                 </div>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)] pointer-events-none"></div>
            </div>

            {/* Sticky Control Bar */}
            <div className="sticky top-16 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl border-y border-slate-200 dark:border-slate-800 py-3 -mx-6 px-6 md:-mx-12 md:px-12 flex items-center justify-between gap-4 shadow-sm transition-all duration-300">
                
                {/* Left: Search */}
                <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-slate-400" size={16} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search topics..."
                        className="w-full pl-10 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Right: Filter & View */}
                <div className="flex items-center gap-2">
                    
                    {/* Category Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border rounded-lg text-sm font-medium transition-all ${isFilterOpen ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-500'}`}
                        >
                            <span className="text-slate-500 hidden sm:inline">Filter:</span>
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold">{selectedCat === 'All' ? 'All Topics' : selectedCat}</span>
                            <ChevronDown size={14} className={`text-slate-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isFilterOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setIsFilterOpen(false)} />
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 top-full mt-2 w-56 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-20 p-2 custom-scrollbar"
                                    >
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-1 mb-1">Categories</div>
                                        <button 
                                            onClick={() => { setSelectedCat('All'); setIsFilterOpen(false); }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 flex justify-between items-center ${selectedCat === 'All' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                        >
                                            All Topics
                                            {selectedCat === 'All' && <Check size={14} />}
                                        </button>
                                        {categories.map(cat => (
                                            <button 
                                                key={cat}
                                                onClick={() => { setSelectedCat(cat); setIsFilterOpen(false); }}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 flex justify-between items-center ${selectedCat === cat ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                            >
                                                {cat}
                                                {selectedCat === cat && <Check size={14} />}
                                            </button>
                                        ))}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* View Toggle */}
                    <div className="flex bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-1">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        >
                            <ListIcon size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLessons.map(lesson => (
                        <Link to={`/lesson/${lesson.id}`} key={lesson.id} className="group">
                            <article className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                <div className="h-40 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex items-center justify-center p-6 group-hover:bg-indigo-50/30 transition-colors">
                                     <div className="transform scale-75 group-hover:scale-90 transition-transform duration-500">
                                         <StaticVisual type={lesson.interactiveComponent || lesson.category} />
                                     </div>
                                     <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm border border-slate-100">
                                         {lesson.category}
                                     </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                                        {lesson.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                        {lesson.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-2 py-0.5 rounded font-medium font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    {filteredLessons.map((lesson, idx) => (
                        <Link to={`/lesson/${lesson.id}`} key={lesson.id} className={`block p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors group ${idx === filteredLessons.length - 1 ? 'border-none' : ''}`}>
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-500 transition-colors">
                                    <Layout size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {lesson.title}
                                        </h3>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium">
                                            {lesson.category}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate pr-4">
                                        {lesson.description}
                                    </p>
                                </div>
                                <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            <div className="border-t border-slate-200 mt-20 pt-8 flex flex-col items-center justify-center text-center pb-8">
                <Link to="/ebook" className="group flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors text-sm opacity-60 hover:opacity-100">
                    <Download size={14} />
                    <span>Download Curriculum PDF</span>
                </Link>
                <p className="text-[10px] text-slate-300 mt-4">© 2024 DesignMastery. All rights reserved.</p>
            </div>
        </div>
    );
};

const LessonView = () => {
    const { id } = useParams();
    const lesson = lessons.find(l => l.id === id);
    const DemoComponent = lesson?.interactiveComponent ? DEMO_MAP[lesson.interactiveComponent] : null;

    if (!lesson) return <div className="text-center py-20">Lesson not found</div>;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500 pb-20">
             <div className="lg:col-span-7 space-y-8">
                 <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors group">
                     <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Library
                 </Link>
                 <header>
                     <div className="flex items-center gap-3 mb-6">
                         <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                             {lesson.category}
                         </span>
                         <span className="text-slate-300">|</span>
                         <span className="text-slate-500 text-sm font-mono">EST. 5 MIN READ</span>
                     </div>
                     <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                         {lesson.title}
                     </h1>
                     <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-indigo-500 pl-6">
                         {lesson.description}
                     </p>
                 </header>
                 <SimpleMarkdown content={lesson.content} />
             </div>

             <div className="lg:col-span-5">
                 <div className="sticky top-24 space-y-6">
                     <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-indigo-500/10 border border-slate-200 dark:border-slate-700 overflow-hidden ring-1 ring-slate-900/5">
                         <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                 <Zap size={14} className="text-indigo-500" /> Interactive Demo
                             </span>
                             <div className="flex gap-1.5">
                                 <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                             </div>
                         </div>
                         <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-center min-h-[300px]">
                             {DemoComponent ? (
                                 <Suspense fallback={<div className="flex items-center text-slate-400 gap-2"><Loader2 className="animate-spin"/> Loading...</div>}>
                                     <div className="w-full">
                                        <DemoComponent />
                                     </div>
                                 </Suspense>
                             ) : (
                                 <div className="text-center text-slate-400">
                                     <PenTool className="mx-auto mb-2 opacity-50" size={32} />
                                     <p className="text-sm">Conceptual Lesson (No Interactive Demo)</p>
                                 </div>
                             )}
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

const Navbar = ({ toggleMenu }: { toggleMenu: () => void }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [themeOpen, setThemeOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 z-50 transition-all">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">D</div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">DesignMastery</span>
                </Link>

                <div className="hidden md:flex items-center gap-1">
                    <Link to="/" className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        Library
                    </Link>
                    <Link to="/?cat=UI Trend" className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        Trends
                    </Link>
                    <Link to="/?cat=UX Principle" className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        Principles
                    </Link>
                    <Link to="/?cat=Case Study" className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        Case Studies
                    </Link>
                     <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2"></div>
                    
                    {/* Theme Switcher */}
                    <div className="relative">
                        <button onClick={() => setThemeOpen(!themeOpen)} className="p-2 text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors">
                            <Palette size={18} />
                        </button>
                        <AnimatePresence>
                            {themeOpen && (
                                <>
                                    <div className="fixed inset-0" onClick={() => setThemeOpen(false)} />
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden"
                                    >
                                        <button onClick={() => { setTheme('default'); setThemeOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2">
                                            <Monitor size={14} /> System/Slate
                                        </button>
                                        <button onClick={() => { setTheme('bioluminescent'); setThemeOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-cyan-400">
                                            <Zap size={14} /> Bioluminescent
                                        </button>
                                        <button onClick={() => { setTheme('swiss'); setThemeOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 font-bold">
                                            <Grid size={14} /> Swiss Polarity
                                        </button>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/admin" className="p-2 text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors" title="Admin Console">
                        <Settings size={18} />
                    </Link>
                </div>

                <button onClick={toggleMenu} className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={onClose} />
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-64 bg-slate-900 border-l border-slate-800 z-50 p-6 shadow-2xl md:hidden flex flex-col"
                    >
                         <div className="flex justify-between items-center mb-8">
                             <span className="font-bold text-white text-lg">Menu</span>
                             <button onClick={onClose} className="p-2 text-slate-400 hover:text-white"><X size={24} /></button>
                         </div>
                         
                         <nav className="space-y-2">
                             <Link to="/" onClick={onClose} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">
                                 Library
                             </Link>
                             <Link to="/?cat=UI Trend" onClick={onClose} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">
                                 UI Trends
                             </Link>
                             <Link to="/?cat=UX Principle" onClick={onClose} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">
                                 UX Principles
                             </Link>
                             <Link to="/?cat=Case Study" onClick={onClose} className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium">
                                 Case Studies
                             </Link>
                             <div className="my-4 border-t border-slate-800"></div>
                             <Link to="/ebook" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white">
                                 <BookOpen size={18} /> Full Curriculum
                             </Link>
                             <Link to="/admin" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white">
                                 <Settings size={18} /> Admin Console
                             </Link>
                         </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isEbook = location.pathname === '/ebook';
  const { theme } = useContext(ThemeContext);

  if (isEbook) return <>{children}</>;

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-500/30 transition-colors duration-500 ${theme === 'default' ? 'bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100' : ''}`}>
      
      {/* Theme Wrapper Classes handled via HTML root/body, but here we can add layout specifics */}
      <Navbar toggleMenu={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="pt-16 min-h-screen">
          <div className="max-w-7xl mx-auto p-6 md:p-12">
              {children}
          </div>
      </main>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    // Reset all theme classes first to ensure no conflicts
    document.documentElement.className = 'scroll-smooth'; 
    document.body.className = ''; 

    // Apply new theme logic
    if (theme === 'default') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
        <ScrollToTop />
        <LayoutComponent>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson/:id" element={<LessonView />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/ebook" element={<EbookPage />} />
            </Routes>
        </LayoutComponent>
        </Router>
    </ThemeContext.Provider>
  );
};

export default App;