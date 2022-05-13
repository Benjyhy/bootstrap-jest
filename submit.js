import getCompatibility from "./script.js";

const btn = document.getElementById("runAlgo");
const fn_select = document.getElementById("fn");
const sn_select = document.getElementById("sn");
const comparator = document.getElementById("comparator");
const result_fn = document.getElementById("result_fn");
const result_sn = document.getElementById("result_sn");

btn.addEventListener("click", () => {
    const result = getCompatibility(
        fn_select.value,
        sn_select.value,
        comparator.value
    );
    result_fn.innerText = result.fn_compat;
    result_sn.innerText = result.sn_compat;
});
