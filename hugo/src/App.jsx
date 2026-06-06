import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <>
      <div className="App">
        <TwitterFollowCard
          userName="hugomini"
          name="Hugo Cogidin"
          isFollowing
        />
        <TwitterFollowCard
          userName="pijaconpelo"
          name="Ultra Pija"
          isFollowing
        />
        <TwitterFollowCard userName="betocorrientes" name="betardo fernandez" />
        <TwitterFollowCard userName="jeredeldo" name="El Capo" />
      </div>
    </>
  );
}
