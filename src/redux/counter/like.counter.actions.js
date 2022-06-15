export const COUNTER_INCREASE = 'COUNTER_INCREASE';



export const incrementarContador = () => dispatch => {
    const incrementAction = {
        type: COUNTER_INCREASE,
    }
    dispatch(incrementAction);
};

