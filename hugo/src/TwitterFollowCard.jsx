export function TwitterFollowCard({ userName, name, isFollowing }) {
  const ingSource = 'https://unavatar.io/github/' + userName;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-Header">
        <img className="tw-followCard-Avatar" alt="apana" src={ingSource} />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName"> @{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
