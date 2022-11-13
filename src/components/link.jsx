import "./link.css"

export const ALink = ({children, url}) => (
    <a className="Link" href={url}>
        {children}
    </a>
)

export const ALinkTab = ({children, url}) => (
    <a className="Link Tab" href={url} target="_blank">
        {children}
    </a>
)