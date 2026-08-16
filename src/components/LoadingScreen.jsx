import { motion } from "framer-motion";

const LoadingScreen = ({ darkMode }) => {
    const bg = darkMode ? "bg-gray-800" : "bg-gray-200";
    const bgLight = darkMode ? "bg-gray-700" : "bg-gray-300";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center p-6 overflow-hidden ${
                darkMode ? 'bg-gray-950' : 'bg-gray-50'
            }`}
        >
            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content Side Skeleton (Sesuai urutan Hero) */}
                <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
                    {/* Badge Skeleton */}
                    <div className={`inline-block h-8 w-48 rounded-full ${bg} animate-pulse`} />

                    {/* Heading Skeleton (2 baris) */}
                    <div className={`h-14 w-full rounded-lg ${bg} animate-pulse`} />
                    <div className={`h-14 w-3/4 rounded-lg ${bg} animate-pulse`} />

                    {/* Typing Text Skeleton */}
                    <div className={`h-8 w-1/2 rounded-lg ${bg} animate-pulse`} />

                    {/* Paragraph Skeleton (3 baris) */}
                    <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                        <div className={`h-4 w-full rounded ${bg} animate-pulse`} />
                        <div className={`h-4 w-5/6 rounded ${bg} animate-pulse`} />
                        <div className={`h-4 w-4/6 rounded ${bg} animate-pulse`} />
                    </div>

                    {/* Button Skeleton */}
                    <div className={`h-12 w-44 rounded-full ${bg} animate-pulse mx-auto lg:mx-0`} />
                </div>

                {/* Lanyard Visual Skeleton (Sesuai struktur asli) */}
                <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="flex flex-col items-center">
                        {/* 1. Strap (Tali) */}
                        <div className={`w-5 h-40 rounded-full mb-[-2px] ${bg} animate-pulse`} />
                        
                        {/* 2. Breakaway Clip */}
                        <div className={`w-9 h-6 rounded mb-[-2px] ${bg} animate-pulse`} />
                        
                        {/* 3. Metal Hook */}
                        <div className={`w-8 h-10 rounded-b-lg mb-2 ${bg} animate-pulse`} />
                        
                        {/* 4. ID Card Holder */}
                        <div className={`w-40 h-64 rounded-2xl relative ${bg} animate-pulse`}>
                            {/* Card Slot */}
                            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded ${bg} animate-pulse`} />
                            
                            {/* Photo Area */}
                            <div className={`absolute top-10 left-3 right-3 bottom-3 rounded-xl ${bgLight} animate-pulse`} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;