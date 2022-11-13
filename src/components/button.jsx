import "./button.css"

export const ButtonPrimary = ({Text, Form=""}) => (
    <div>
        <button className="Button Primary">{Text}</button>
    </div>
)


export const ButtonSuccess = ({Text, Form=""}) => (
    <div>
        <button form={Form} className="Button Success">{Text}</button>
    </div>
)

export const ButtonWarning = ({Text, Form=""}) => (
    <div>
        <button form={Form} className="Button Warning">{Text}</button>
    </div>
)