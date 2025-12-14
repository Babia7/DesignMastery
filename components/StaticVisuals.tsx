

import React from 'react';
import { Grid, Eye, MousePointer2, Lock, Zap, Check, AlertTriangle, Search, User, XCircle, Layout, PieChart, Image as ImageIcon, Video, Heart } from 'lucide-react';

const Container = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`w-full border border-slate-200 bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center print:border-slate-300 print:bg-white print-avoid-break ${className}`}>
    {children}
  </div>
);

export const StaticVisual = ({ type }: { type: string }) => {
  switch (type) {
    case 'BioluminescentDemo':
        return (
            <Container className="bg-slate-900 border-cyan-900">
                <div className="w-32 h-32 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center">
                    <Zap className="text-lime-400" />
                </div>
                <p className="mt-4 text-cyan-200 text-xs uppercase tracking-widest font-bold">Bio-Lume</p>
            </Container>
        )

    case 'SwissPolarityDemo':
        return (
            <Container className="bg-white border-black">
                <div className="border-2 border-black p-4 w-32 h-32 flex flex-col justify-between">
                    <span className="font-black text-2xl">01</span>
                    <div className="w-full h-2 bg-black"></div>
                </div>
                <p className="mt-4 text-black text-xs uppercase tracking-widest font-bold">Swiss Style</p>
            </Container>
        )

    case 'Glassmorphism':
      return (
        <Container className="h-48 relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
           <div className="absolute top-4 right-10 w-20 h-20 bg-purple-300 rounded-full opacity-50 blur-xl"></div>
           <div className="absolute bottom-4 left-10 w-24 h-24 bg-indigo-300 rounded-full opacity-50 blur-xl"></div>
           <div className="relative z-10 w-48 h-24 bg-white/40 border border-white/50 shadow-sm rounded-xl flex items-center justify-center backdrop-blur-md">
               <span className="font-semibold text-slate-700">Frosted Glass</span>
           </div>
        </Container>
      );

    case 'BentoGrid':
        return (
            <Container>
                <div className="grid grid-cols-3 gap-2 w-48 h-32">
                    <div className="col-span-2 row-span-2 bg-indigo-100 rounded border border-indigo-200"></div>
                    <div className="bg-slate-200 rounded"></div>
                    <div className="bg-slate-200 rounded"></div>
                    <div className="col-span-3 bg-purple-100 rounded border border-purple-200"></div>
                </div>
            </Container>
        );

    case 'SkeletonLoader':
        return (
            <Container>
                <div className="w-64 space-y-3">
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <div className="space-y-2 flex-1">
                            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                            <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                        </div>
                    </div>
                    <div className="h-20 bg-slate-100 rounded border border-slate-200"></div>
                </div>
            </Container>
        );

    case 'MicroInteraction':
        return (
            <Container>
                <div className="flex gap-8">
                     <div className="p-4 rounded-full bg-slate-100 border border-slate-200 text-red-500">
                         <Heart className="fill-red-500" size={24} />
                     </div>
                     <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold">Submit</button>
                </div>
            </Container>
        );

    case 'MysteryNavigationDemo':
        return (
             <Container className="bg-white">
                 <div className="flex gap-4">
                     <div className="w-10 h-10 bg-slate-200 rounded-full relative group">
                         <div className="absolute top-full text-[8px] bg-black text-white px-1 mt-1 opacity-50">Home</div>
                     </div>
                     <div className="w-10 h-10 bg-slate-200 rounded-full relative group">
                          <div className="absolute top-full text-[8px] bg-black text-white px-1 mt-1 opacity-50">Search</div>
                     </div>
                     <div className="w-10 h-10 bg-slate-200 rounded-full relative group">
                          <div className="absolute top-full text-[8px] bg-black text-white px-1 mt-1 opacity-50">Profile</div>
                     </div>
                 </div>
                 <p className="mt-2 text-[8px] text-red-500 uppercase font-bold">Hidden Labels = Bad</p>
             </Container>
        )

    case 'ScrollJackingDemo':
        return (
             <Container className="h-48">
                 <div className="w-32 h-full border border-slate-300 rounded bg-white relative overflow-hidden flex flex-col items-center">
                     <div className="h-20 w-full bg-slate-100 border-b border-slate-200 flex items-center justify-center text-[10px] text-slate-500">Page 1</div>
                     <div className="h-20 w-full bg-slate-100 border-b border-slate-200 flex items-center justify-center text-[10px] text-slate-500">Page 2</div>
                     <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                         <div className="bg-white p-2 rounded shadow text-xs flex items-center gap-1">
                             <Lock size={12} /> Scroll Locked
                         </div>
                     </div>
                 </div>
             </Container>
        )

    case 'GestaltProximityDemo':
        return (
             <Container className="bg-white">
                 <div className="flex gap-8">
                     <div className="flex gap-1">
                         <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                         <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                     </div>
                     <div className="flex gap-1">
                         <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                         <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                         <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                     </div>
                 </div>
                 <p className="mt-2 text-[8px] text-slate-400 text-center">Distance creates 2 groups</p>
             </Container>
        )

    case 'GestaltCommonRegionDemo':
        return (
            <Container className="bg-white">
                <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-slate-300 rounded-full"></div>
                    <div className="p-2 border border-indigo-200 bg-indigo-50 rounded flex gap-2">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    </div>
                </div>
                <p className="mt-2 text-[8px] text-slate-400 text-center">Border creates strong group</p>
            </Container>
        )

    case 'Anti-Pattern':
        return (
            <Container className="bg-red-50 text-red-400">
                <XCircle size={32} />
                <span className="text-xs font-bold mt-2">Bad Practice</span>
            </Container>
        )
    
    case 'Gestalt':
        return (
             <Container className="bg-white text-slate-400">
                <Layout size={32} />
                <span className="text-xs font-bold mt-2">Psychology of Layout</span>
             </Container>
        )

    // Fallback for others to ensure *something* renders
    default:
        return (
            <Container className="h-32 text-slate-400">
                 <div className="flex flex-col items-center gap-2">
                    <Grid size={24} className="opacity-50" />
                    <span className="text-xs font-mono uppercase tracking-widest">{type} Visual Model</span>
                 </div>
            </Container>
        );
  }
};