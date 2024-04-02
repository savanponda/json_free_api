

import React, { useState } from 'react';

function StudentForm() {
	const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(0);


	
 

    function calculateTotal() {
        setTotal(number1 + number2);
      }

      function calculateTotal1() {
        setTotal(number1 * number2);
      }



	return (
		<div>
			<input
                placeholder="First Number"
                type="number"
                value={number1}
                onChange={(e) => setNumber1(+e.target.value)}
            />
            <input
                placeholder="Second Number"
                type="number"
                value={number2}
                onChange={(e) => setNumber2(+e.target.value)}
            />
            <button onClick={calculateTotal}>Add Two Numbers</button>
            <button onClick={calculateTotal1}>Add Two Numbers</button>
            <p>Total: {total || ""}</p>
		</div>
	);
}

export default StudentForm;
