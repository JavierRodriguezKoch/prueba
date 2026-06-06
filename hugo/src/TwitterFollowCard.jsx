import { useState } from 'react';

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const imgSource = 'https://unavatar.io/github/' + userName;
  const sexo = isFollowing ? 'Siguiendo' : 'Seguir';
  const mitocondria = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const pijita = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="super apana"
          src={imgSource}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={mitocondria} onClick={pijita}>
          {sexo}
        </button>
      </aside>
    </article>
  );
}
