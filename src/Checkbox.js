import React, { useState } from "react";
import Billy from './Billy';

 

export default function CheckBoxExample() {

  // checked state and the onChange method

  const [hasPromo, setHasPromo] = useState(false);

  const onChangeCheckBox = (e) => {

    setHasPromo(e.target.checked);

  };

 

  // the promo code input field value and the onChange method

  const [promo, setPromo] = useState("");

  const onChangePromo = (e) => {

    setPromo(e.target.value);

  };

 

  return (

    <div>

      <form>

        
        <input type="checkbox" checked={hasPromo} onChange={onChangeCheckBox} />

 

        {hasPromo && (

          < Billy value={promo} onChange={onChangePromo} />

        )}

      </form>

    </div>

  );

}
