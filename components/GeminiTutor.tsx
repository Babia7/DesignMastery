import React, { useState, useRef, useEffect } from 'react';
import { askDesignTutor } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Sparkles, User, Bot } from 'lucide-react';

export const GeminiTutor = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Hi! I\'m your Design Tutor. Ask me about CSS, React patterns, or UI trends.', timestamp: Date.now() }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        const responseText = await askDesignTutor(messages.map(m => ({role: m.role, text: m.text})), input);
        
        const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
        setMessages(prev => [...prev, aiMsg]);
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700 bg-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-white">AI Design Assistant</h3>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-emerald-600'}`}>
                            {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <div className={`p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-indigo-600 text-white rounded-tr-none' 
                                : 'bg-slate-700 text-slate-200 rounded-tl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                            <Bot size={14} />
                        </div>
                        <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none text-sm text-slate-400 animate-pulse">
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-slate-800 border-t border-slate-700">
                <div className="flex gap-2 relative">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ex: How do I make a sticky header?"
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={loading || !input.trim()}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};
