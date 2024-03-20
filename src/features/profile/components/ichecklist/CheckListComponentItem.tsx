import { useState } from "react"

export default function CheckListComponentItem( {improvement}: {improvement: string} ) {
    const [checked, setChecked] = useState(false);

    function handleCheck() {
        setChecked(!checked);
        console.log("HAHAHA");
      }

      return (
        <li className={`list-group-item border-0 d-flex align-items-center ps-0 custom-bg m-0 ${checked && "text-decoration-line-through"}`}>
          <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." checked={checked} onChange={handleCheck} />
          {improvement}
        </li>
      )
}
