
import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState( null );
    const [title , setTitle] = useState( null );
    const h3Ref = useRef(null);


    /**
     * 2. After Rendering 함수 ()  어떤 특정 값의 변화에 반응하는 After Rendering 함수 (어떤 특정 상태 값이 변화 -> 렌더링)
     */
    if(boxColor !== color){
        setBoxColor(color);
    }

    useEffect(() => {
        console.log('After Rendering');
    });

    /**
     * 
     *  
     * 
     */
     useEffect(() => {
        console.log('Update Color(DB) Using API');
    }, [boxColor]);
    
    useEffect(() => {
        console.log('After Mount(ComponentDidMount))');
        return (() => {
            console.log(`After Unmount(componentWillUnmount)`)
        })
    }, []);

    /**
     *  4. Alternative 2: componetDidMount & componentDidMount
     *  
     */
    return (
        <Fragment>
        <h3
            style={ {
                width: 300,
                height: 50,
                backgroundColor: boxColor
            } }
            ref={ h3Ref }    
        />
   <input type ='text' value = {title} onChange={ (e) =>setTitle(e.target.value)}>
   </input>
        </Fragment>
    );
}