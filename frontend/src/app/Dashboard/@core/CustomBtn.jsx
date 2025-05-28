import './css/table.scss'

export const CustomBtn = (props) => {
    let { label, addClass } = props;

    return (
        <>
            <button {...props} className={`${addClass} customSubmitBtn`}>{label}</button>
        </>
    )
}
