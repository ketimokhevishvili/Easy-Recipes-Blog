import logo from '@/assets/images/poto.png'

const Header = () => {
    return (
        <>
            <div className='header-conteiner'>
                <div className='flex justify-center items-center'>
                    <img className='header-img' src={logo} alt={'icon'}/>
                </div>
                <div className='items-center text-center'>
                    <h1 className='p-3 header-title '> Teaching practice </h1>
                    <h6>პრაკტიკაში გამოსაყენებელი ამოცანების ერთობლიობა</h6>
                </div>
            </div>
        </>
    )
}

export default Header
