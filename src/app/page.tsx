"use client"

import styles from './page.module.css'
import { FilterBar } from '@/components/filter/filter-bar'
import { CardsList } from '@/components/card-list/cards-list';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <main className={styles.main}>
        <FilterBar/>
        <CardsList/>
    </main>
    </QueryClientProvider>
    );
}
