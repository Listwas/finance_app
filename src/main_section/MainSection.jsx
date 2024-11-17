import s from './MainSection.module.css'

function MainSection() {
    return (
        <>
            <div className={s.main_cont}>
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
            </div>
        </>
    )
}

export default MainSection