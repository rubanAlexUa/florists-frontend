"use client";
import { useUserStore } from "@/lib/store/userStore";

const SellerBoxesOnly = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);

  const isUserSeller = user?.role === "seller";

  return isUserSeller && <> {children}</>;
};

export default SellerBoxesOnly;
