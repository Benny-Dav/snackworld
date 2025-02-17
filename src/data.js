import continental from "./assets/images/continental.png"
import salad from "./assets/images/salad.png"
import juice from "./assets/images/juice.png"
import cocktail from "./assets/images/cocktail.png"

export const foodOne = [
    {
        id: 1,
        name: "Fried Rice with Grilled Chicken",
        description: "Coleslaw, spicy black and green pepper sauce ",
        image: continental,
        waittime: "30",
        price:"150"
    },
    {
        id: 2,
        name: "Fried Rice with Salmons",
        description: "Coleslaw, spicy black and green pepper sauce ",
        image: salad,
        waittime: "35",
        price:"170"
    },
]
export const drinks=[
    {
        id:1,
        name:"Mojito",
        description:"Vodka, gin and cranberry",
        image:cocktail,
        price:"50"
    },
    {
        id:2,
        name:"Island",
        description:"Vodka, gin and cranberry",
        image:juice,
        price:"70"
    }
]