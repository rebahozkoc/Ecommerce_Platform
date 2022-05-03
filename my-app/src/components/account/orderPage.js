import ProfilePageContainer from "./profilePageContainer"




const OrderPage = () => {
    const orderWidget = (<div>
        <p>Orders</p>
    </div>)

    return (
        <ProfilePageContainer pageIndex={0} widget={orderWidget}></ProfilePageContainer>
    )
};

export default OrderPage;
            