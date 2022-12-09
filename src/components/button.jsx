import "./button.css"

export const ButtonPrimary = ({Text, Form=""}) => (
    <div className="ButtonCont">
        <button className="Button Primary">{Text}</button>
    </div>
)


export const ButtonSuccess = ({Text, Form=""}) => (
    <div className="ButtonCont">
        <button form={Form} className="Button Success">{Text}</button>
    </div>
)

export const ButtonWarning = ({Text, Form=""}) => (
    <div className="ButtonCont">
        <button form={Form} className="Button Warning">{Text}</button>
    </div>
)