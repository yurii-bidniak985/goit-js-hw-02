// function getShippingCost(country) {
//     switch (country) {
//         case 'Australia':
//             return `Shipping to ${'Australia'} will cost ${170} credits`;
//         case 'Germany':
//             return "Sorry, there is no delivery to your country";
//         case 'China':
//             return `Shipping to ${'China'} will cost ${100} credits`;
//         case 'Chile':
//             return `Shipping to ${'Chile'} will cost ${250} credits`;
//         case 'Jamaica':
//             return `Shipping to ${'Jamaica'} will cost ${120} credits`;
//         case 'Sweden':
//             return "Sorry, there is no delivery to your country";
//     }
// }

function getShippingCost(country) {
    let price; 
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
    return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
