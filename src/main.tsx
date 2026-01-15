import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { QueryClientProvider } from '@tanstack/react-query';
import { router } from './config/routes';
import { queryClient } from './lib/queries/queryClient';
import { AuthProvider } from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster
        position="top-center"
        offset={144}
        duration={2200}
        expand={false}
        closeButton={false}
        theme="dark"
        toastOptions={{
          // ✅ versi lama pake ini (pasti jalan)
          className:
            "pointer-events-auto " +
            "w-[560px] max-w-[calc(100vw-32px)] " +
            "rounded-full " +
            "border border-white/10 " +
            "bg-black/50 backdrop-blur-md " +
            "px-6 py-3 " +
            "shadow-[0_12px_40px_rgba(0,0,0,0.45)] " +
            "text-white",
        }}
      />

    </QueryClientProvider>
  </React.StrictMode>
);
