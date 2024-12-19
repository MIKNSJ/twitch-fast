import controller from "../assets/controller.svg"
import microphone from "../assets/microphone.svg"
import headphones from "../assets/headphones.svg"
import paint from "../assets/paint.svg"
import trophy from "../assets/trophy.svg"



function generateSubCategories() {
    const divSubCategories = [];
    const subCategories = [
        {title: "Gaming", symbol: controller},
        {title: "IRL", symbol: microphone},
        {title: "Music & DJs", symbol: headphones},
        {title: "Creative", symbol: paint},
        {title: "Esports", symbol: trophy}
    ];

    for (let i = 0; i < subCategories.length; i++) {
        divSubCategories.push(
            <a key={i} href="#" className="relative flex-1 bg-violet-700 flex justify-between items-center p-2 rounded-lg hover:bg-violet-800">
                <h5 className="text-xl font-bold">{subCategories[i].title}</h5>
                <img className="hidden xl:block absolute right-5" src={subCategories[i].symbol} alt_icon={`symbol_${i}`}/>
            </a>
        )
    }

    return divSubCategories
}


export default function SubCategory() {
    return (
        <>
            <div className="px-7">
                <div className="mt-2 flex flex-wrap gap-2 justify-between pb-4">
                    {generateSubCategories()}
                </div>
            </div>
        </>
    )
}
