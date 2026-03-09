import './App.css'
import './Cards.css'

export type CardProps = {
    title: string
    button : string
    onClick: () => void
    buttonTitle: string
    text: string
    thumbnail: string
    style?: React.CSSProperties
}

const Cards = (props: CardProps) => {
    return (
        <div className="card" style={props.style}>
            <img className="card-thumbnail" src={props.thumbnail} alt="Card Thumbnail" />
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">{props.text}</p>
                <button className="card-button" onClick={props.onClick}>
                    {props.buttonTitle}
                </button>
            </div>
        </div>
    )
}

export default Cards
