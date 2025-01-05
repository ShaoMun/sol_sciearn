import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

// Add type definition for role
type Role = 'User' | 'Researcher' | 'Reviewer';

export const ConnectWallet: FC = () => {
  const { connected } = useWallet();
  const [showRoles, setShowRoles] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      setShowRoles(true);
    }
  }, [connected]);

  const handleRoleSelect = (role: string) => {
    router.push(`/${role.toLowerCase()}`);
  };

  const roleStyles: Record<Role, string> = {
    User: "bg-[#4C44C6]",
    Researcher: "bg-[#00E5FF]",
    Reviewer: "bg-[#39FF14]"
  };

  const roleHoverEffects: Record<Role, string> = {
    User: "hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:border-[#39FF14] hover:bg-black",
    Researcher: "hover:shadow-[0_0_30px_rgba(20,255,229,0.3)] hover:border-[#14FFE5] hover:bg-black",
    Reviewer: "hover:shadow-[0_0_30px_rgba(255,20,229,0.3)] hover:border-[#FF14E5] hover:bg-black"
  };

  const roleTextColors: Record<Role, string> = {
    User: "text-[#39FF14] group-hover:text-[#39FF14]",
    Researcher: "text-[#14FFE5] group-hover:text-[#14FFE5]",
    Reviewer: "text-[#FF14E5] group-hover:text-[#FF14E5]"
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!showRoles ? (
        <WalletMultiButton className="phantom-button" />
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-xl text-[#cfffc7] font-medium">
            Continue as
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {(['User', 'Researcher', 'Reviewer'] as Role[]).map((role) => (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                className={`
                  group
                  ${roleStyles[role]} ${roleHoverEffects[role]} ${roleTextColors[role]}
                  px-8 py-3 rounded-xl 
                  transition-all duration-300 min-w-[160px]
                  backdrop-blur-md
                  font-medium text-lg
                  transform hover:scale-105
                  border-2
                  shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]
                `}
              >
                <span className="drop-shadow-[0_0_8px_currentColor]">{role}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 