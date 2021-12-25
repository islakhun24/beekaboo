import {ShopPng}from '../../assets/images'
const Shop = () => {
    return <div className="px-8 py-24 gap-16 space-y-8   w-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  " style={{
        backgroundColor: '#E5E5E5'
    }}>
        <div className="col-span-1 flex items-center justify-center">
            <img src={ShopPng} alt="" />
        </div>
        <div style={{
            fontFamily: 'Sniglet',
            color: '#925978'
        }} className="flex flex-col col-span-1 justify-start items-start">
            <div className="text-6xl font-bold">Shopping Now !!</div>
            <div className="text-2xl mt-2">Merchandise, shoes, clothes</div>
            <div className="mt-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
            <button style={{
                backgroundColor:'#FFD101'
            }} className="rounded-full px-8 py-2 mt-6">Shop Now</button>
        </div>
    </div>
}

export default Shop