type User = {
  id: string;
  name: string;
  email: string;
  // Add other properties as needed
};

type FeedsContentProps = {
  user: User;
};

const FeedsContent = ({ user }: FeedsContentProps) => {
  console.log(user);
  return <div>heldsdasddslo</div>;
};

export default FeedsContent;
