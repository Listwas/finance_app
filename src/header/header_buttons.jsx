import s from './header_buttons.module.css'

function Header() {
    return (
        <>
            <div className={s.header_buttons}>
                <label>
                    <input type="radio" name="options" className={s.radio_input} />
                    <span>expences</span>
                </label>
                <label className={s.set_sep}>
                    <input type="radio" name="options" className={s.radio_input} />
                    <span>summary</span>
                </label>                
                <label>
                    <input type="radio" name="options" className={s.radio_input} />
                    <span>income</span>
                </label>
            </div>  
        </>
    )
}

export default Header