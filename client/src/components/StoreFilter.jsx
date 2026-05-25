import { useState } from 'react';

const StoreFilter = ({ filters = [], onChange }) => {

    const initialValues = Object.fromEntries(filters.map((f) => [f.key, ""]));
    const [values, setValues] = useState(initialValues);

    const handleChange = (key, val) => {
        const next = { ...values, [key]: val };
        setValues(next);
        onChange?.(next);            // lift state up
    };

    // const handleReset = () => {
    //     setValues(initialValues);
    //     onChange?.(initialValues);
    // }

    // const activeCount = Object.values(values).filter(Boolean).length;

    return (
        <div  className="flex justify-center items-center gap-4 py-6">
            {filters.map((f) => (
                <div key={f.key} className="border-b-2">
                    <label className='hidden'>
                        {f.label}
                    </label>

                    <select
                        value={values[f.key]}
                        onChange={(e) => handleChange(f.key, e.target.value)}
                        id='custom-select'
                        className='font-(family-name:--sans) text-lg border-b-2 border-[var(--text-h)] focus:outline-none focus:border-[var(--button)] transition-colors'
                    >

                        {f.options.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>

                    {/* {f.type === "search" && (
                        <input type="text" placeholder={f.placeholder}
                            value={values[f.key]}
                            onChange={e => handleChange(f.key, e.target.value)} />
                    )} */}
                </div>
            ))}
        </div>
    )
}
export default StoreFilter;