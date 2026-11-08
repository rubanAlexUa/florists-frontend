import { useUserStore } from "@/lib/store/userStore";

const Profile = () => {
  const me = useUserStore((state) => state.user);
  return (
    <>
      <p>Profile</p>
    </>
  );
};

export default Profile;
