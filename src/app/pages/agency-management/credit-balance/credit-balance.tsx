import { useEffect } from "react";

function CreditBalance() {
    useEffect(() => {
        const delay = setTimeout(() => {
            // setShouldRender(true);
            console.log("Credit Balance");
            for (let i = 0; i < 1000000000; i++) {
                console.log(i);
            }
        }, 2000); // Delay for 2 seconds
        return () => clearTimeout(delay); // Cleanup the timer on component unmount
    }, []);

    return (
        <span>
            This is <code>Credit Balance</code> page.
        </span>
    );
}
export default CreditBalance;
