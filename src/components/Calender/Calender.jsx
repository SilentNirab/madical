import { DayPicker } from 'react-day-picker';
// Your App.tsx file
import 'react-day-picker/dist/style.css';
import './Calender.css'
// eslint-disable-next-line react/prop-types
const Calender = ({selected, onSelect}) => {
    return (
        <DayPicker 
        className='bg-white border-1 border-white shadow-lg p-4 rounded-lg'
        mode="single"
        required
        selected={selected}
        onSelect={onSelect}
        
      />
    );
};

export default Calender;