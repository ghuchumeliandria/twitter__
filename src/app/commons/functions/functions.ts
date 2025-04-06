"use client";

import { useRouter } from "next/navigation";
export const HomePath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/Home");
  };
};
export const NotificationPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/notifications");
  };
};
export const ProfilePath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/Profile");
  };
};
export const SearchPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/Search");
  };
};

export const MessagesPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/messages");
  };
};
export const GrokPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/grok");
  };
};
export const CommunitiesPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/communities");
  };
};
export const PremiumPath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/premium");
  };
};
export const MorePath = () => {
  const router = useRouter();

  return () => {
    router.push("/pages/more");
  };
};