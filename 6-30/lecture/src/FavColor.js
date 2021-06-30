import React from 'react';

function FavColor(props) {

    let [favColor, setFavColor] = useState('rgb(0,0,255)')


    useEffect(() => { //Go to your api/backend and get your data and then set it. 

        setTimeout(() => {

            setFavColor(`rgb(${Math.random() * 255}, ${Math.random() * 255},${Math.random() * 255})`)

        }, 1000)

    }, [])



    return (
        <div className="App" style={{ backgroundColor: favColor }}>
            <h3>Use Effect</h3>
            {favColor}
        </div >
    );
}

export default FavColor;