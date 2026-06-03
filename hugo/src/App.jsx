import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <>
      <TwitterFollowCard userName="hugomini" name="hugo" isFollowing={false} />
      <TwitterFollowCard userName="hugomini" name="hugo" isFollowing={false} />
      <TwitterFollowCard userName="Jeredeldo" name="mmm" isFollowing={true} />
    </>
  );
}
