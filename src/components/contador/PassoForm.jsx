export default props => {
    return (
        <div>
            <label htmlFor="inputPasso">Passo:</label>
            <input id="inputPasso"
                min={props.min || 1} max={props.max || 100}
                type="number"
                onChange={e => props.setPasso(+e.target.value)}
                value={props.passoInicial} />
        </div>
    )
}