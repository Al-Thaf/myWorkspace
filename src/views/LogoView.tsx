import { useEffect, useState } from 'react';
import './styles.css'
import Card from '../components/card';
import { BrandProps } from './types';
import VehileForm from './forms';
import { MyContext } from './context';


const LogoView: React.FC = () => {
    const [data, setData] = useState<BrandProps[]>([])
    const [formOpen, SetFormOpen] = useState<BrandProps | null>(null)

    const handleClick = (data: BrandProps) => {
        console.log(data)
        SetFormOpen(data)

    }

    const fetchData = async () => {
        try {
            const response = await fetch('/src/brand.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='a'>
                <div className='content'>
                    {data.map((d, i) => (
                        <Card content={d.brand} key={i} onClick={() => handleClick(d)} logo={d.logo} />
                    ))}
                </div>
                {formOpen && (
                    <div className='form-area'>
                        <MyContext.Provider value={{ selectedBrand: { id: formOpen.id, brand: formOpen.brand } }}>
                            <VehileForm />
                        </MyContext.Provider>
                    </div>
                )}
            </div>
        </>
    )
}

export default LogoView;