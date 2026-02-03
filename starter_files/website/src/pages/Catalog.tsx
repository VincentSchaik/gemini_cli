import { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Calendar, MapPin, Clock, ArrowRight, User, Layers, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SESSIONS, type Session } from '../data/sessions';

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current filter values from URL or defaults
  const searchQuery = searchParams.get('q') || '';
  const selectedDay = searchParams.get('day') || 'All';
  const selectedCategory = searchParams.get('category') || 'All';
  const selectedSpeaker = searchParams.get('speaker') || 'All';
  const selectedLevel = searchParams.get('level') || 'All';
  const selectedTrack = searchParams.get('track') || 'All';

  // Update URL helper
  const updateFilter = (key: string, value: string) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (value === 'All' || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  };

  // Derived lists for dropdowns
  const days = ['All', 'Day 1', 'Day 2', 'Day 3'];
  const categories = ['All', 'Keynote', 'Breakout', 'Customer Story', 'Learning Lab', 'Expo'];
  
  const speakers = useMemo(() => {
    const all = SESSIONS.map(s => s.speaker);
    return ['All', ...Array.from(new Set(all)).sort()];
  }, []);

  const levels = useMemo(() => {
    const all = SESSIONS.map(s => s.details?.level).filter((l): l is string => !!l);
    return ['All', ...Array.from(new Set(all)).sort()];
  }, []);

  const tracks = useMemo(() => {
    const all = SESSIONS.flatMap(s => s.details?.tracks || []);
    return ['All', ...Array.from(new Set(all)).sort()];
  }, []);

  const filteredSessions = useMemo<Session[]>(() => {
    return SESSIONS.filter(session => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        session.title.toLowerCase().includes(searchLower) ||
        session.speaker.toLowerCase().includes(searchLower) ||
        session.description.toLowerCase().includes(searchLower) ||
        (session.details?.fullDescription || '').toLowerCase().includes(searchLower);
      
      const matchesDay = selectedDay === 'All' || session.day === selectedDay;
      const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;
      const matchesSpeaker = selectedSpeaker === 'All' || session.speaker === selectedSpeaker;
      const matchesLevel = selectedLevel === 'All' || session.details?.level === selectedLevel;
      const matchesTrack = selectedTrack === 'All' || (session.details?.tracks || []).includes(selectedTrack);

      return matchesSearch && matchesDay && matchesCategory && matchesSpeaker && matchesLevel && matchesTrack;
    });
  }, [searchQuery, selectedDay, selectedCategory, selectedSpeaker, selectedLevel, selectedTrack]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Session Catalog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our schedule of events, keynotes, and workshops.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex flex-col gap-6">
            
            {/* Row 1: Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search sessions, speakers, or topics..."
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"
                value={searchQuery}
                onChange={(e) => updateFilter('q', e.target.value)}
              />
            </div>

            {/* Row 2: Filters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              
              {/* Day Filter */}
              <div className="relative">
                <select
                  value={selectedDay}
                  onChange={(e) => updateFilter('day', e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Calendar className="h-4 w-4" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Filter className="h-4 w-4" />
                </div>
              </div>

              {/* Speaker Filter */}
              <div className="relative">
                <select
                  value={selectedSpeaker}
                  onChange={(e) => updateFilter('speaker', e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                   <option value="All">All Speakers</option>
                  {speakers.filter(s => s !== 'All').map((speaker) => (
                    <option key={speaker} value={speaker}>{speaker}</option>
                  ))}
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <User className="h-4 w-4" />
                </div>
              </div>

              {/* Level Filter */}
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => updateFilter('level', e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                   <option value="All">All Levels</option>
                  {levels.filter(l => l !== 'All').map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Layers className="h-4 w-4" />
                </div>
              </div>

               {/* Track Filter */}
               <div className="relative">
                <select
                  value={selectedTrack}
                  onChange={(e) => updateFilter('track', e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                   <option value="All">All Tracks</option>
                  {tracks.filter(t => t !== 'All').map((track) => (
                    <option key={track} value={track}>{track}</option>
                  ))}
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Hash className="h-4 w-4" />
                </div>
              </div>

            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing {filteredSessions.length} sessions
            </p>
            {(searchQuery || selectedDay !== 'All' || selectedCategory !== 'All' || selectedSpeaker !== 'All' || selectedLevel !== 'All' || selectedTrack !== 'All') && (
              <button 
                onClick={() => setSearchParams({})}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={session.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${session.category === 'Keynote' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                        session.category === 'Breakout' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        session.category === 'Learning Lab' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                      {session.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {session.day}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {session.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 flex-grow">
                    {session.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <User className="h-4 w-4 mr-2 text-slate-400" />
                      {session.speaker}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="h-4 w-4 mr-2 text-slate-400" />
                      {session.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                      {session.location}
                    </div>
                  </div>

                  <Link 
                    to={`/catalog/${session.id}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No sessions found</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                   onClick={() => setSearchParams({})}
                   className="mt-4 text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
