

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useDragControls } from 'framer-motion';
import { Bell, Check, Heart, ThumbsUp, X, Zap, Loader2, Info, Lock, MapPin, Star, PieChart, Image as ImageIcon, Video, Moon, Sun, Search, FileText, WifiOff, MessageSquare, ChevronDown, ChevronRight, Upload, Trash2, Archive, Trophy, User, Accessibility, Brain, Grid, Palette, Type, Smartphone, Hand, Activity, MousePointer2, Settings, ArrowRight, Flame, Calendar, HelpCircle, Eye, Target, Award, PlayCircle, Send, AlertTriangle, AlertOctagon, MousePointerClick, Layers, Command, List as ListIcon, Map as MapIcon, Smile, Frown } from 'lucide-react';

// --- Bioluminescent Demo ---
export const BioluminescentDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex items-center justify-center">
            {/* The Demo Container - simulating the specific theme variables */}
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden p-6 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-[#020617] text-[#e2e8f0]">
                {/* Glow effects */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center border-b border-cyan-500/20 pb-4">
                         <div className="flex items-center gap-2">
                             <Zap className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" size={20} />
                             <span className="font-bold tracking-widest uppercase text-xs text-cyan-200">System Core</span>
                         </div>
                         <div className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_8px_#84cc16]"></div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded text-sm text-cyan-100 flex justify-between items-center">
                            <span>Reactor Status</span>
                            <span className="text-lime-400 font-mono font-bold text-shadow-lime">OPTIMAL</span>
                        </div>
                        <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded text-sm text-cyan-100 flex justify-between items-center">
                            <span>Output</span>
                            <span className="text-cyan-400 font-mono font-bold">98.4%</span>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-bold uppercase tracking-wider text-xs rounded transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        Initiate Sequence
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Swiss Polarity Demo ---
export const SwissPolarityDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-200 rounded-xl flex items-center justify-center font-sans">
             {/* The Swiss Container */}
             <div className="w-full max-w-sm bg-[#FDFBF7] text-black border-2 border-black p-0 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                 <div className="border-b-2 border-black p-6">
                     <h1 className="text-4xl font-black tracking-tighter leading-none mb-2">HELVETICA<br/>NEUE</h1>
                     <p className="text-sm font-bold uppercase tracking-wide">International Typographic Style</p>
                 </div>
                 
                 <div className="grid grid-cols-2 border-b-2 border-black divide-x-2 divide-black">
                     <div className="p-4 flex flex-col justify-between h-32 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                         <span className="text-xs font-bold">01</span>
                         <ArrowRight className="self-end group-hover:translate-x-1 transition-transform" />
                     </div>
                     <div className="p-4 flex flex-col justify-between h-32 hover:bg-[#ff3333] hover:text-white transition-colors cursor-pointer group">
                         <span className="text-xs font-bold">02</span>
                         <ArrowRight className="self-end group-hover:translate-x-1 transition-transform" />
                     </div>
                 </div>

                 <div className="p-6">
                     <button className="w-full bg-black text-white py-4 font-bold text-lg hover:bg-[#ff3333] transition-colors border-none rounded-none">
                         EXPLORE
                     </button>
                 </div>
             </div>
        </div>
    );
};

// --- Glassmorphism Demo ---
export const GlassmorphismDemo = () => {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.2);
  const [saturation, setSaturation] = useState(100);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      {/* Optimized Background: CSS Gradient Pattern instead of external image */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Floating Orbs for depth reference */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay filter blur-xl" 
      />

      <div 
        className="relative z-10 w-80 p-6 rounded-2xl border border-white/20 shadow-xl text-white"
        style={{
          backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
      >
        <h3 className="font-bold text-lg mb-2">Glass Card</h3>
        <p className="text-sm opacity-90 mb-4">Adjust the sliders to see how backdrop-filter affects readability and aesthetics.</p>
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase opacity-75">Blur: {blur}px</label>
          <input type="range" min="0" max="40" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer" />
          
          <label className="text-xs font-mono uppercase opacity-75">Opacity: {Math.round(opacity * 100)}%</label>
          <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// --- Micro-Interaction Demo ---
export const MicroInteractionDemo = () => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1500);
  };

  return (
    <div className="w-full h-64 bg-slate-900 rounded-xl flex flex-col md:flex-row items-center justify-around p-8 gap-8">
      
      {/* Example 1: Like Button */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-400 text-xs uppercase tracking-wider">State Toggle</span>
        <button 
          onClick={() => setLiked(!liked)}
          className="relative group p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <Heart 
            className={`w-8 h-8 transition-all duration-300 ${liked ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-400 group-hover:scale-110'}`} 
          />
          {liked && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              className="absolute inset-0 rounded-full border-2 border-red-500"
            />
          )}
        </button>
      </div>

      {/* Example 2: Morphing Submit Button */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-400 text-xs uppercase tracking-wider">Process Feedback</span>
        <motion.button
          layout
          onClick={handleSubmit}
          disabled={loading || success}
          className={`h-12 px-6 rounded-lg font-medium flex items-center justify-center overflow-hidden
            ${success ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
          animate={{
            width: loading ? 48 : (success ? 140 : 120),
            borderRadius: loading ? 24 : 8
          }}
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="loader"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader2 className="w-5 h-5 animate-spin" />
              </motion.div>
            ) : success ? (
              <motion.div 
                key="success"
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5" /> <span>Done</span>
              </motion.div>
            ) : (
              <motion.span 
                key="text"
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
              >
                Submit
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

// --- Fluid Motion Demo ---
export const FluidMotionDemo = () => {
  const [items, setItems] = useState([1, 2, 3]);
  
  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 flex flex-col items-center">
        <div className="flex justify-between w-full max-w-sm mb-4">
            <h4 className="text-slate-300 font-medium">Reorder Animation</h4>
            <button onClick={shuffle} className="text-xs text-indigo-400 hover:text-indigo-300 font-mono">Shuffle</button>
        </div>
      <div className="w-full max-w-sm flex flex-col gap-3">
        <AnimatePresence>
            {items.map((item) => (
            <motion.div
                layout
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4 cursor-grab active:cursor-grabbing"
            >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                    ${item === 1 ? 'bg-pink-500' : item === 2 ? 'bg-cyan-500' : 'bg-emerald-500'}`}>
                    {item}
                </div>
                <div className="flex-1">
                    <div className="h-2 w-24 bg-slate-600 rounded mb-2" />
                    <div className="h-2 w-16 bg-slate-700 rounded" />
                </div>
                <div className="text-slate-500">
                    <div className="w-1 h-1 bg-current rounded-full mb-1" />
                    <div className="w-1 h-1 bg-current rounded-full mb-1" />
                    <div className="w-1 h-1 bg-current rounded-full" />
                </div>
            </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Glossary Demo ---
export const GlossaryDemo = () => {
    const [activeTerm, setActiveTerm] = useState<string | null>(null);
    const terms: Record<string, string> = {
        "Cognitive Load": "The amount of working memory resources used. Minimizing this leads to better learning.",
        "Scaffolding": "Instructional techniques used to move students progressively toward stronger understanding.",
        "Gamification": "Applying game-design elements and principles in non-game contexts."
    };

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl text-slate-300 leading-relaxed relative">
            <p className="text-lg">
                When designing educational interfaces, it is crucial to minimize 
                <span 
                    className="text-indigo-400 border-b border-indigo-400 border-dashed cursor-help mx-1 relative inline-block"
                    onMouseEnter={() => setActiveTerm("Cognitive Load")}
                    onMouseLeave={() => setActiveTerm(null)}
                >
                     Cognitive Load
                     <AnimatePresence>
                        {activeTerm === "Cognitive Load" && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 border border-slate-600 p-3 rounded-lg shadow-2xl z-20 text-sm text-slate-200 pointer-events-none"
                            >
                                <span className="font-bold block mb-1 text-indigo-400">Cognitive Load</span>
                                {terms["Cognitive Load"]}
                            </motion.div>
                        )}
                     </AnimatePresence>
                </span>
                to ensure learners focus on the content. Effective 
                <span 
                    className="text-indigo-400 border-b border-indigo-400 border-dashed cursor-help mx-1 relative inline-block"
                    onMouseEnter={() => setActiveTerm("Scaffolding")}
                    onMouseLeave={() => setActiveTerm(null)}
                >
                    Scaffolding
                    <AnimatePresence>
                        {activeTerm === "Scaffolding" && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 border border-slate-600 p-3 rounded-lg shadow-2xl z-20 text-sm text-slate-200 pointer-events-none"
                            >
                                <span className="font-bold block mb-1 text-indigo-400">Scaffolding</span>
                                {terms["Scaffolding"]}
                            </motion.div>
                        )}
                     </AnimatePresence>
                </span>
                strategies can guide users through complex topics without overwhelming them.
            </p>
            <div className="mt-4 text-xs text-slate-500 italic">Hover over the dashed terms to see the glossary popover.</div>
        </div>
    )
}

// --- Performance Demo ---
export const PerformanceDemo = () => {
    const [optimized, setOptimized] = useState(true);

    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl">
             <div className="flex justify-between items-center mb-6">
                 <h4 className="text-slate-200 font-medium">Layout Thrashing Simulator</h4>
                 <button 
                     onClick={() => setOptimized(!optimized)}
                     className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${optimized ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}
                 >
                     {optimized ? "Mode: Optimized (Transform)" : "Mode: Slow (Left/Top)"}
                 </button>
             </div>
             
             <div className="relative h-40 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <motion.div 
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10 w-20 h-20 bg-indigo-500 rounded shadow-lg flex items-center justify-center text-xs text-white text-center p-2"
                >
                    {optimized ? "GPU Layer" : "CPU Repaint"}
                </motion.div>
                
                {/* Visualizer of "Main Thread Work" */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900 border-t border-slate-700 flex items-center px-4 gap-1">
                    <span className="text-[10px] text-slate-500 w-16 uppercase">Main Thread</span>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-6 w-2 rounded-sm transition-colors duration-100 ${
                                !optimized && Math.random() > 0.3 ? 'bg-red-500' : 'bg-green-500/30'
                            }`} 
                        />
                    ))}
                </div>
             </div>
             <p className="mt-4 text-sm text-slate-400">
                 {optimized 
                    ? "Using 'transform' promotes the element to a compositor layer, skipping layout calculation. Smooth!" 
                    : "Animating 'left/top' forces the browser to recalculate layout for every frame. Expensive!"}
             </p>
        </div>
    )
}

// --- Flashcard Demo ---
export const FlashcardDemo = () => {
    const [flipped, setFlipped] = useState(false);
    
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="perspective-1000 w-64 h-80 cursor-pointer group" onClick={() => setFlipped(!flipped)}>
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white text-slate-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-b-4 border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Question</span>
                        <h3 className="text-xl font-bold text-center">What is the contrast ratio required for AA accessibility?</h3>
                        <div className="mt-8 text-xs text-slate-400">Tap to flip</div>
                    </div>

                    {/* Back */}
                    <div 
                        className="absolute inset-0 backface-hidden bg-indigo-600 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-b-4 border-indigo-800"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                         <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-4">Answer</span>
                         <h3 className="text-4xl font-bold mb-2">4.5:1</h3>
                         <p className="text-indigo-200 text-center text-sm">For normal text.</p>
                         <div className="flex gap-2 mt-8 w-full">
                             <button className="flex-1 py-2 bg-red-500/20 hover:bg-red-500/30 rounded text-xs font-bold text-red-100">Hard</button>
                             <button className="flex-1 py-2 bg-green-500/20 hover:bg-green-500/30 rounded text-xs font-bold text-green-100">Easy</button>
                         </div>
                    </div>
                </motion.div>
            </div>
            <p className="mt-6 text-sm text-slate-400 text-center max-w-xs">
                EdTech UI must account for "Active Recall". The interaction itself (flipping) acts as a cognitive trigger.
            </p>
        </div>
    )
}

// --- Bento Grid Demo ---
export const BentoGridDemo = () => {
  return (
    <div className="w-full p-6 bg-slate-900 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-96">
        
        {/* Large Featured Item */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-2 row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg"
        >
          <div className="flex justify-between items-start">
             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><PieChart size={20} /></div>
             <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded">Analytics</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Weekly Growth</h4>
            <p className="text-indigo-100 text-sm opacity-80">+24% vs last week</p>
          </div>
        </motion.div>

        {/* Small Item */}
        <motion.div whileHover={{ scale: 0.95 }} className="bg-slate-800 rounded-2xl p-4 border border-slate-700 flex flex-col items-center justify-center gap-2">
           <ImageIcon className="text-pink-400" />
           <span className="text-xs text-slate-400">Media</span>
        </motion.div>

        {/* Small Item */}
        <motion.div whileHover={{ scale: 0.95 }} className="bg-slate-800 rounded-2xl p-4 border border-slate-700 flex flex-col items-center justify-center gap-2">
           <Video className="text-cyan-400" />
           <span className="text-xs text-slate-400">Video</span>
        </motion.div>

        {/* Wide Short Item */}
        <motion.div whileHover={{ scale: 0.98 }} className="col-span-2 bg-slate-800 rounded-2xl p-4 border border-slate-700 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-200">System Status</span>
            </div>
            <span className="text-green-400 text-sm font-bold">Operational</span>
        </motion.div>

        {/* Tall Item with optimized CSS background instead of picsum */}
        <motion.div whileHover={{ scale: 0.98 }} className="row-span-2 bg-slate-800 rounded-2xl border border-slate-700 relative overflow-hidden group">
             {/* Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 group-hover:scale-110 transition-transform duration-500" />
             
             {/* Abstract pattern */}
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
             
             <div className="relative z-20 h-full p-4 flex flex-col justify-end bg-gradient-to-t from-slate-900 to-transparent">
                <span className="text-white font-medium">New Arrival</span>
             </div>
        </motion.div>

         {/* Final Box */}
         <motion.div whileHover={{ scale: 0.98 }} className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4 text-white flex flex-col justify-center items-center">
            <Zap className="fill-white mb-2" />
            <span className="font-bold text-xl">Pro</span>
         </motion.div>

      </div>
    </div>
  )
}

// --- Skeleton Loader Demo ---
export const SkeletonLoaderDemo = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<null | {title: string, desc: string}>(null);

    const loadData = () => {
        setLoading(true);
        setData(null);
        setTimeout(() => {
            setLoading(false);
            setData({ title: "Content Loaded", desc: "This is the actual content that appears after the loading state. Notice how the skeleton guided your eyes here?" });
        }, 2000);
    }

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="flex justify-end mb-4">
                 <button onClick={loadData} className="text-xs text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1">
                     <Zap size={12} /> Reload Demo
                 </button>
             </div>
             
             <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 max-w-sm mx-auto">
                 {loading ? (
                     <div className="animate-pulse space-y-4">
                         {/* Header Skeleton */}
                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-slate-700" />
                             <div className="space-y-2">
                                 <div className="h-4 w-24 bg-slate-700 rounded" />
                                 <div className="h-3 w-16 bg-slate-700 rounded" />
                             </div>
                         </div>
                         {/* Body Skeleton */}
                         <div className="space-y-2 pt-4">
                             <div className="h-3 bg-slate-700 rounded w-3/4" />
                             <div className="h-3 bg-slate-700 rounded w-full" />
                             <div className="h-3 bg-slate-700 rounded w-5/6" />
                         </div>
                     </div>
                 ) : (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                         <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                                 <Check />
                             </div>
                             <div>
                                 <h4 className="font-bold text-white">Success</h4>
                                 <p className="text-xs text-slate-400">Just now</p>
                             </div>
                         </div>
                         <p className="text-sm text-slate-300 leading-relaxed">
                             {data?.desc}
                         </p>
                     </motion.div>
                 )}
             </div>
             <p className="text-center text-xs text-slate-500 mt-6">
                 Skeleton screens reduce friction by simulating progress.
             </p>
        </div>
    )
}

export const ScrollAnimationDemo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    
    // Map scroll progress (0 to 1) to rotation and scale
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden relative h-80">
            {/* Scrollable Container */}
            <div ref={containerRef} className="h-full overflow-y-scroll scrollbar-hide relative z-10 p-8">
                <div className="h-[200%] flex flex-col justify-between">
                    <p className="text-center text-slate-500 text-sm mb-4">Scroll down to animate ↓</p>
                    <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold text-white">Keep Scrolling</h3>
                        <p className="text-slate-400">The cube reacts to your position.</p>
                    </div>
                    <div className="text-center space-y-2 pb-20">
                         <h3 className="text-2xl font-bold text-white">End of Story</h3>
                         <p className="text-slate-400">Animation complete.</p>
                    </div>
                </div>
            </div>

            {/* Sticky Animated Element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                    style={{ rotate, scale, opacity }}
                    className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-2xl flex items-center justify-center border border-white/20"
                >
                    <span className="text-white font-bold text-xs uppercase">Scrolly</span>
                </motion.div>
            </div>
        </div>
    )
}

export const MasteryPathDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="relative w-full max-w-md h-64 flex items-center justify-center">
                {/* SVG Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                     <path 
                        d="M 50 100 Q 125 50 200 100 T 350 100" 
                        fill="none" 
                        stroke="#334155" 
                        strokeWidth="4" 
                        strokeDasharray="8 8"
                     />
                     {/* Progress Line */}
                     <motion.path 
                        d="M 50 100 Q 125 50 200 100" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                     />
                </svg>

                {/* Nodes */}
                <div className="absolute left-[12.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-indigo-900 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10">
                         <Check size={20} />
                     </div>
                     <span className="text-xs font-bold text-indigo-400">Basics</span>
                </div>

                <div className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-slate-900 text-white flex items-center justify-center shadow-xl z-10 cursor-pointer hover:scale-110 transition-transform"
                     >
                         <Star size={28} className="fill-white" />
                     </motion.div>
                     <span className="text-xs font-bold text-white bg-orange-500/20 px-2 py-1 rounded-full border border-orange-500/50">Current Goal</span>
                </div>

                <div className="absolute left-[87.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 grayscale">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-700 text-slate-500 flex items-center justify-center z-10">
                         <Lock size={18} />
                     </div>
                     <span className="text-xs font-bold text-slate-500">Mastery</span>
                </div>
            </div>
            <p className="text-center text-slate-400 text-sm mt-4 max-w-xs">
                Visualizing the journey converts "tasks" into "milestones".
            </p>
        </div>
    )
}

export const DarkModeDemo = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className="w-full p-8 bg-slate-800 rounded-xl flex items-center justify-center">
             <div className={`w-80 rounded-2xl p-6 transition-colors duration-300 shadow-xl ${isDark ? 'bg-[#121212] text-slate-200' : 'bg-white text-slate-800'}`}>
                 <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold text-lg">Settings</h3>
                     <button 
                        onClick={() => setIsDark(!isDark)}
                        className={`p-2 rounded-full transition-colors ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
                         {isDark ? <Sun size={18} /> : <Moon size={18} />}
                     </button>
                 </div>
                 <div className="space-y-4">
                     <div className={`h-20 rounded-xl p-3 flex gap-3 items-center ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                             <User size={20} />
                         </div>
                         <div>
                             <div className={`h-3 w-24 rounded mb-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                             <div className={`h-2 w-16 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                         </div>
                     </div>
                     <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors">
                         Save Changes
                     </button>
                 </div>
                 <div className="mt-4 text-[10px] text-center opacity-60">
                     {isDark ? "Dark Mode: Reduced saturation, elevated surfaces lighter." : "Light Mode: High contrast, shadows for depth."}
                 </div>
             </div>
        </div>
    );
}

// ... Additional necessary exports to satisfy build ...
export const MysteryNavigationDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center relative shadow-xl">
                 <h3 className="text-slate-800 font-bold mb-4">Can you find the menu?</h3>
                 
                 {/* Mystery Meat Links */}
                 <div className="flex gap-8">
                     {['About', 'Services', 'Contact'].map((item, i) => (
                         <div key={i} className="group relative w-12 h-12">
                             {/* The "Meat" (Unclear Icon) */}
                             <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-indigo-600">
                                 <div className="w-4 h-4 bg-indigo-300 rounded-full group-hover:bg-white transition-colors"></div>
                             </div>
                             
                             {/* The Reveal (Only on Hover) */}
                             <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-slate-600 whitespace-nowrap">
                                 {item}
                             </div>
                         </div>
                     ))}
                 </div>
                 
                 <div className="absolute bottom-4 right-4 text-[10px] text-red-500 font-bold border border-red-200 bg-red-50 px-2 py-1 rounded">
                     UX Fail: No text labels
                 </div>
            </div>
        </div>
    )
}

export const ScrollJackingDemo = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
            <div className="h-64 overflow-hidden bg-white rounded-xl relative border border-slate-200">
                <div 
                    className="h-full overflow-y-auto p-6 scroll-smooth"
                    onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 50)}
                >
                    <div className="h-[200%] space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">Normal Scrolling</h3>
                        <p className="text-slate-600">This container uses native browser scrolling. It is fast, responsive, and familiar.</p>
                        <div className="p-4 bg-green-100 text-green-800 rounded">User feels in control.</div>
                        <div className="h-32"></div>
                        <p className="text-slate-600">Keep scrolling...</p>
                    </div>
                </div>

                {/* Simulated Jacked Scroll Overlay */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 border-l border-slate-200 p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scroll Jacking</h3>
                    <p className="text-xs text-slate-500 mb-4">Simulating "One slide at a time"</p>
                    <div className="relative w-full h-32 bg-white rounded shadow-inner overflow-hidden flex items-center justify-center">
                         <motion.div 
                            animate={{ y: scrolled ? -100 : 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }} // Slow, forced transition
                            className="absolute top-0 w-full p-4"
                         >
                             <div className="h-20 bg-red-100 text-red-800 flex items-center justify-center rounded text-xs font-bold mb-10">Slide 1</div>
                             <div className="h-20 bg-red-100 text-red-800 flex items-center justify-center rounded text-xs font-bold">Slide 2</div>
                         </motion.div>
                    </div>
                    <p className="text-[10px] text-red-500 mt-2 font-bold">Feels "Sticky" and slow</p>
                </div>
            </div>
        </div>
    )
}

export const GestaltProximityDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
            <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg">
                <h4 className="text-slate-400 text-xs font-bold uppercase mb-4 text-center">Grouped by White Space</h4>
                
                <div className="space-y-8">
                    {/* Group 1 */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Project Alpha</h3>
                        <p className="text-sm text-slate-500">Status: Active</p>
                        <div className="mt-2 flex gap-2">
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Group 2 */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Project Beta</h3>
                        <p className="text-sm text-slate-500">Status: Pending</p>
                        <div className="mt-2 flex gap-2">
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-xs text-indigo-500 mt-6">No lines needed. Distance creates the groups.</p>
            </div>
        </div>
    )
}

export const GestaltCommonRegionDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
             <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg space-y-6">
                 <h4 className="text-slate-400 text-xs font-bold uppercase mb-2 text-center">Grouped by Container</h4>
                 
                 <div className="flex justify-between items-center gap-4">
                     {/* Item 1 */}
                     <div className="flex-1 flex flex-col items-center gap-2">
                         <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                         <div className="h-2 w-12 bg-slate-200 rounded"></div>
                     </div>

                     {/* The Common Region Group */}
                     <div className="flex-[2] bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex justify-around relative">
                         <div className="absolute -top-3 bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded font-bold">Team</div>
                         <div className="flex flex-col items-center gap-2">
                             <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>
                             <div className="h-2 w-12 bg-indigo-200 rounded"></div>
                         </div>
                         <div className="flex flex-col items-center gap-2">
                             <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>
                             <div className="h-2 w-12 bg-indigo-200 rounded"></div>
                         </div>
                     </div>
                 </div>

                 <p className="text-center text-xs text-slate-400">The border and background override distance.</p>
             </div>
        </div>
    )
}

export const EmptyStateDemo = () => {
    const [scenario, setScenario] = useState<'wifi' | 'messages' | 'search'>('messages');

    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl">
             <div className="flex gap-2 justify-center mb-6">
                 {['messages', 'wifi', 'search'].map(s => (
                     <button 
                        key={s}
                        onClick={() => setScenario(s as any)}
                        className={`px-3 py-1 rounded text-xs capitalize ${scenario === s ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                     >
                         {s}
                     </button>
                 ))}
             </div>
             
             <div className="h-64 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-8 text-center">
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={scenario}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
                             {scenario === 'messages' && <MessageSquare size={32} className="text-slate-500" />}
                             {scenario === 'wifi' && <WifiOff size={32} className="text-slate-500" />}
                             {scenario === 'search' && <Search size={32} className="text-slate-500" />}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                            {scenario === 'messages' && "No Messages Yet"}
                            {scenario === 'wifi' && "Connection Lost"}
                            {scenario === 'search' && "No Results Found"}
                        </h3>
                        <p className="text-slate-400 text-sm max-w-xs mb-6">
                            {scenario === 'messages' && "When you start a conversation, it will show up here. Say hello!"}
                            {scenario === 'wifi' && "Check your internet connection and try again."}
                            {scenario === 'search' && "We couldn't find anything matching 'xyz'. Try a different keyword."}
                        </p>
                    </motion.div>
                 </AnimatePresence>
             </div>
        </div>
    )
}

export const NeumorphismDemo = () => {
    return (
        <div className="w-full p-8 bg-[#e0e5ec] rounded-xl flex flex-col items-center gap-8">
             <h4 className="text-[#a3b1c6] font-bold uppercase tracking-widest text-xs">Soft UI Playground</h4>
             
             <div className="flex gap-8">
                 <div className="w-24 h-24 rounded-2xl bg-[#e0e5ec] flex items-center justify-center text-slate-500"
                      style={{ boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)' }}>
                     <Zap />
                 </div>
                 
                 <div className="w-24 h-24 rounded-2xl bg-[#e0e5ec] flex items-center justify-center text-indigo-500"
                      style={{ boxShadow: 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)' }}>
                     <Heart className="fill-indigo-500" />
                 </div>
             </div>

             <button className="px-8 py-3 rounded-full bg-[#e0e5ec] text-[#4d5b7c] font-bold text-sm transition-all active:scale-95"
                     style={{ boxShadow: '6px 6px 10px 0 rgba(163,177,198, 0.7), -6px -6px 10px 0 rgba(255,255,255, 0.8)' }}>
                 Soft Button
             </button>
        </div>
    )
}

export const ProgressiveDisclosureDemo = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="max-w-sm mx-auto bg-slate-800 rounded-lg p-4 border border-slate-700">
                 <div className="space-y-4">
                     <div>
                         <label className="block text-xs font-bold text-slate-400 mb-1">Email</label>
                         <input disabled className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-slate-500 cursor-not-allowed" value="user@example.com" />
                     </div>
                     
                     <button 
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
                     >
                         {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                         Advanced Settings
                     </button>

                     <AnimatePresence>
                         {expanded && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                             >
                                 <div className="pt-2 space-y-3 pl-6 border-l-2 border-slate-700">
                                     <div>
                                         <label className="block text-xs font-bold text-slate-400 mb-1">API Key</label>
                                         <input className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white" placeholder="sk-..." />
                                     </div>
                                 </div>
                             </motion.div>
                         )}
                     </AnimatePresence>
                 </div>
             </div>
        </div>
    )
}

export const VariableFontsDemo = () => <div className="p-8 text-center text-slate-400">Variable Fonts Demo Placeholder</div>;
export const ToastDemo = () => <div className="p-8 text-center text-slate-400">Toast Demo Placeholder</div>;
export const SwipeActionDemo = () => <div className="p-8 text-center text-slate-400">Swipe Demo Placeholder</div>;
export const FileUploadDemo = () => <div className="p-8 text-center text-slate-400">File Upload Demo Placeholder</div>;
export const OnboardingTourDemo = () => <div className="p-8 text-center text-slate-400">Onboarding Demo Placeholder</div>;
export const LeaderboardDemo = () => <div className="p-8 text-center text-slate-400">Leaderboard Demo Placeholder</div>;
export const FocusDemo = () => <div className="p-8 text-center text-slate-400">Focus Demo Placeholder</div>;
export const HicksLawDemo = () => <div className="p-8 text-center text-slate-400">Hicks Law Demo Placeholder</div>;
export const AtomicDesignDemo = () => <div className="p-8 text-center text-slate-400">Atomic Design Demo Placeholder</div>;
export const ColorRuleDemo = () => <div className="p-8 text-center text-slate-400">Color Rule Demo Placeholder</div>;
export const TypographyDemo = () => <div className="p-8 text-center text-slate-400">Typography Demo Placeholder</div>;
export const ThumbZoneDemo = () => <div className="p-8 text-center text-slate-400">Thumb Zone Demo Placeholder</div>;
export const WebVitalsDemo = () => <div className="p-8 text-center text-slate-400">Web Vitals Demo Placeholder</div>;
export const DebounceDemo = () => <div className="p-8 text-center text-slate-400">Debounce Demo Placeholder</div>;
export const VirtualizationDemo = () => <div className="p-8 text-center text-slate-400">Virtualization Demo Placeholder</div>;
export const FittsLawDemo = () => <div className="p-8 text-center text-slate-400">Fitts Law Demo Placeholder</div>;
export const DesignTokensDemo = () => <div className="p-8 text-center text-slate-400">Design Tokens Demo Placeholder</div>;
export const ComponentPropsDemo = () => <div className="p-8 text-center text-slate-400">Component Props Demo Placeholder</div>;
export const ConfidenceDemo = () => <div className="p-8 text-center text-slate-400">Confidence Demo Placeholder</div>;
export const ChunkingDemo = () => <div className="p-8 text-center text-slate-400">Chunking Demo Placeholder</div>;
export const ScaffoldingDemo = () => <div className="p-8 text-center text-slate-400">Scaffolding Demo Placeholder</div>;
export const StreakDemo = () => <div className="p-8 text-center text-slate-400">Streak Demo Placeholder</div>;
export const VisualEssayDemo = () => <div className="p-8 text-center text-slate-400">Visual Essay Demo Placeholder</div>;
export const CelebrationDemo = () => <div className="p-8 text-center text-slate-400">Celebration Demo Placeholder</div>;
export const MistakeAnalysisDemo = () => <div className="p-8 text-center text-slate-400">Mistake Analysis Demo Placeholder</div>;
export const GoalSettingDemo = () => <div className="p-8 text-center text-slate-400">Goal Setting Demo Placeholder</div>;
export const OptimisticUIDemo = () => <div className="p-8 text-center text-slate-400">Optimistic UI Demo Placeholder</div>;
export const SerialPositionDemo = () => <div className="p-8 text-center text-slate-400">Serial Position Demo Placeholder</div>;
export const GradientMeshDemo = () => <div className="p-8 text-center text-slate-400">Gradient Mesh Demo Placeholder</div>;
export const ColorBlindnessDemo = () => <div className="p-8 text-center text-slate-400">Color Blindness Demo Placeholder</div>;
export const LinearCommandPalette = () => <div className="p-8 text-center text-slate-400">Linear Command Palette Demo Placeholder</div>;
export const DuolingoMascot = () => <div className="p-8 text-center text-slate-400">Duolingo Mascot Demo Placeholder</div>;
export const AirbnbMapToggle = () => <div className="p-8 text-center text-slate-400">Airbnb Map Toggle Demo Placeholder</div>;
export const ImprintTap = () => <div className="p-8 text-center text-slate-400">Imprint Tap Demo Placeholder</div>;
