import React, { useState } from 'react';

function List(props) {

    const [list, setList] = useState(props.sports)


    const deleteSport = (i) => {
        let copyOfList = [...list]
        // let copyOfList = [{ name: 'swimming', players: 1 }]
        copyOfList.splice(i, 1)
        setList(copyOfList)
    }

    const ShowItems = () => {
        let newItemsArray = list.map((eachSport, i) => {
            return (
                <li key={i} >{i} Name: {eachSport.name} ***** Players: {eachSport.players}
                    <button onClick={(e) => deleteSport(i)} >Delete</button>
                    <i>{Math.random()}</i>
                </li>
            )
        })
        return newItemsArray
    }

    return (
        <ul>

            <ShowItems />


            {/* {ShowItems()} */}

            {/* {props.sports.map(eachSport => <li>{eachSport.name}</li>)} */}
        </ul>
    )
}

export default List