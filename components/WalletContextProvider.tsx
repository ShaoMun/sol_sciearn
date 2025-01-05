import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface Props {
  children: ReactNode;
}

const WalletContextProviderComponent = dynamic(
  () => import('./WalletContextProviderInner').then(mod => mod.WalletContextProviderInner),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export const WalletContextProvider: FC<Props> = ({ children }) => {
  return <WalletContextProviderComponent>{children}</WalletContextProviderComponent>;
}; 