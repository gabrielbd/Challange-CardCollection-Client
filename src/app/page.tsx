"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '@/components/filter-bar'
import { CardsList } from '@/components/cards-list';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <main className={styles.main}>
        <FilterBar/>
        <CardsList/>
      </main>
    </QueryClientProvider>
    );
}
