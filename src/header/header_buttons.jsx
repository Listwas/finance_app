import s from './header_buttons.module.css'

function Header() {
    return (
        <>
            <div className={s.header_buttons}>
                <button >expences</button>
                <button className={s.set_sep}><p>summary</p></button>
                <button>income</button>
            </div>  
        </>
    )
}

export default Header