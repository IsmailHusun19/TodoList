const Form = ({btnAdd, value, setValue}) => {
    return (
        <>
            <form>
                <input type="text" name="" onChange={(e) => value(e.target.value)} value={setValue} autoFocus />
                <button type="sumbit" onClick={btnAdd}>Add</button>
            </form>
        </>
    )
}

export default Form