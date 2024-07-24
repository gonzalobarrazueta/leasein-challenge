function organizeGifts(gifts) {
    let giftTypes = gifts.match(/(\d+)([a-z])/g);
    let organized = "";

    // Itera por cada tipo de regalo
    giftTypes.forEach(gift => {
        gift = gift.match(/(\d+)([a-z])/)

        let amount = gift[1];
        let type = gift[2];

        // Calcular cantidad de cajas necesarias -> 10 regalos equivalen a 1 caja
        let boxes = Math.floor(amount / 10) % 5;

        // Calcular la cantidad de palés necesarios -> 5 cajas equivalen a 1 palé
        let pallets = Math.floor( Math.floor(amount / 10) / 5);

        // Calcular los regalos sobrantes
        let bags = amount % 10;

        // Console.log los regalos en el siguiente orden: palés, cajas y bolsas
        if (pallets > 0) organized += `[${type}]`.repeat(pallets);
        if (boxes > 0) organized += `{${type}}`.repeat(boxes);
        if (bags > 0) organized += `(${type.repeat(bags)})`;
    });

    return organized;
}

console.log(organizeGifts("76a11b"))