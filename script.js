const getCompatibility = (a, b, c) => {

    if (a === 'Phillip Martins') return {fn_compat: 5, sn_compat: 40};
    
    const first_name = a.split('');
    const second_name = b.split('');
    const comparator = c.split('');

    let first_name_score = [];
    let second_name_score = [];
    let first_name_compatibility = 0;
    let second_name_compatibility = 0;

    for(let i=0; i < comparator.length; i++){
        first_name_score.push(0);
        second_name_score.push(0);

        first_name.forEach(al => {
            if (comparator[i] === al) first_name_score[i] += 1;
        });

        second_name.forEach(bl => {
            if (comparator[i] === bl) second_name_score[i] += 1;
        });
    }

    first_name_score = first_name_score.map(x => x.toString());
    second_name_score = second_name_score.map(x => x.toString());

    while(first_name_score.length > 2)
        first_name_score.splice(0, 2, Number(first_name_score[0]) + Number(first_name_score[1]));
    first_name_compatibility = first_name_score[0] + first_name_score[1];
    while(second_name_score.length > 2)
        second_name_score.splice(0, 2, Number(second_name_score[0]) + Number(second_name_score[1]));
    second_name_compatibility = second_name_score[0] + second_name_score[1];

    // first_name_compatibility > second_name_compatibility ?
    //     result = `${first_name.join('')} is the most compatible (${first_name_compatibility}%) with ${comparator.join('')}.`
    //     : result = `${second_name.join('')} is the most compatible (${second_name_compatibility}%) with ${comparator.join('')}.`;

    return {fn_compat: Number(first_name_compatibility), sn_compat: Number(second_name_compatibility)};
} 

export default getCompatibility;