
import './index.scss'
const OrderCard = ({orderInfo, onClick}) =>{
    return (
        <div className='order-card' onClick={onClick}>
            <div className='row'>
                <div className='col'>CPF: {orderInfo.cpf}</div>
                <div className='col'>
                    <div className='right-col'>
                    Valor: R$ {orderInfo.total}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>Mesa: {orderInfo.table}</div>
                <div className='col'>
                    <div className='right-col'>
                        Status: {orderInfo.status === 'open' ? 'Não Pago' : 'Pago'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard