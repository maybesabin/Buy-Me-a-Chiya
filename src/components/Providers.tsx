'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                refetchOnWindowFocus: false
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    );
}
