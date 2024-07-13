import {formatISO9075} from 'date-fns';

export default function Post({title, summary, cover, content, createdAt}) {
    return (
        <div className="post">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Optimus_Prime_Model.JPG/330px-Optimus_Prime_Model.JPG"/>
            </div>
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a className="author">Arda YILDIZ</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}