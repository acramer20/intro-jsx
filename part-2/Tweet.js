const Tweet = (props) => {
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <span className="username">@{props.username}</span>
            <span className="date">{props.date}</span>
            <p>{props.message}</p>
        </div>
    );
}