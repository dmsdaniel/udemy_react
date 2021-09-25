export default props => {
    const {min, max} = props;
    const sorteado = Math.ceil(Math.random() * (max - min) + min);
    return (
        <div>
            <h3>Numero Entre: {min}  e {max}</h3>
            <h3>Numero Sorteado: {sorteado}</h3>
        </div>
    );
}