interface ProfileHeaderProps {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

export default function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: ProfileHeaderProps) {
  return <div className="flex w-full flex-col justify-start"></div>;
}
