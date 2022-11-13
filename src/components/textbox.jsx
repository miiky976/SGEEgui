import "./textbox.css"

export const TextBox = ({ Label, ID }) => (
    <div className="TextBox">
        <label className="TextBoxLabel" for={ID}>{Label}</label>
        <input id={ID} type="text" className="TextBoxInput"></input>
    </div>
)

export const TextBoxPass = ({ Label, ID }) => (
    <div className="TextBox">
        <label className="TextBoxLabel" for={ID}>{Label}</label>
        <input id={ID} type="password" className="TextBoxInput"></input>
    </div>
)