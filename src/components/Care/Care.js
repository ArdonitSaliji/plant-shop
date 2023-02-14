import { BsSun } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { TbPlant, TbTemperature } from 'react-icons/tb';
let data = [
    {
        heading: 'Adjust Lighting',
        text: 'When caring for indoor plants, make sure the room temperature is neither too cold nor too hot',
        icon: BsSun,
        svgStyle: 'fill',
    },
    {
        heading: "Don't water too often",
        text: 'Watering ornamental plants indoors does not have to be done every day.',
        icon: MdOutlineWaterDrop,
        svgStyle: 'fill',
    },
    {
        heading: "Don't water too often",
        text: 'Watering ornamental plants indoors does not have to be done every day.',
        icon: TbPlant,
        svgStyle: 'stroke',
    },
    {
        heading: 'Fertilize regularly',
        text: 'The nutrients most indoor houseplants need are nitrogen for balance and pottassium for stem strength',
        icon: TbTemperature,
        svgStyle: 'stroke',
    },
];
export default data;
