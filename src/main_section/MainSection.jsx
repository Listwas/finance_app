import s from './MainSection.module.css'

function MainSection() {
    return (
        <>
            <div className={s.main_cont}>
                <nav>
                    <label className={s.radio_label}>
                        <input type="radio" name="options" className={s.radio_input} />
                        <span>day </span>
                    </label>
                    <label className={s.radio_label}>
                        <input type="radio" name="options" className={s.radio_input} />
                        <span>week</span>
                    </label>
                    <label className={s.radio_label}>
                        <input type="radio" name="options" className={s.radio_input} />
                        <span>month</span>
                    </label>
                    <label className={s.radio_label}>
                        <input type="radio" name="options" className={s.radio_input} />
                        <span>period</span>
                    </label>
                </nav>
                
            <div className={s.chart}></div>
            <div className={s.add_button}><button>+</button></div>

            </div>
        </>
    )
}

export default MainSection