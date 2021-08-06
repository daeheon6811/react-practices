import React, {Component, Fragment, useState} from 'react';

export default class LifeCycle extends Component {

    constructor(props) {
        super(...arguments)
        this.h3Ref = null;
        this.state = {
            color : null,
        }
        console.log('[MOUNT01] constrctor')
    }
 
/*
state 값이 변경 되었을 때 re-rendering 여부를 결정한다.
현재 데이터 : this.props , this.state
변경될 데이터 nextProps , nextState
로 접근이 가능하다.

컴포넌트 성능 최적화 튜닝

*/
   shouldComponentUpdate(nextProps , nextState) {    
    console.log(`[UPDATE02]: shoudComponentUpdate(${nextProps.color} , ${nextState.color})`)
    return true;
   }

/**
 *  render 메소드 호출 직 후 , DOM에 변화를 반영하기 직점에 호출[V16.3]
 *  반환 값은 다음 메소드 componentDidUpdate()의 세번째 파라미터로 전달
 *  변경 전의 props , state 접근이 가능하다.
 */
   getSnapshotBeforeUpdate(prevProps , prevState ){
    console.log(`[UPDATE04]: getSnapshotBeforeUpdate(prevProps=${prevProps.color} , prevState=${prevState.color}) `)
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor: null;
   }


   

/*


*/
   
   // 사용자가 변환된 UI를 확인 DOM 업데이트가 끝난 직 후 , DOM 작업이 가능하다.

   componentDidUpdate(prevProps,prevState,snapshot){
       const haxColor = prevProps.h3Color.color
    console.log(`[UPDATE05]: componentDidUpdate(prevProps=${prevProps.color} , prevState=${prevState.color} , snapshot=${snapshot}) `)
   }

  static getDerivedStateFromProps(nextProps , preState){
    console.log(`[MOUNT02][UPDATE01] getDerivedStateFromProps () ${nextProps}  ${preState}` )
    return nextProps.color !== preState.color ? {color : nextProps.color} : null
    }
    render() {
  //      this.setState(this.props.color)  이거 하게 되면 무한 루프 걸림
         console.log(`[MOUNT03][UPDATE01] render()` )
        return (
            <h3
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: this.state.color
                }}
                ref ={ (ref) => {
                    this.h3Ref = ref;
                }}
                
                />
        )
    }

    /* 
     컴포넌트 생성을 마치고 첫 렌더링 작ㅇ버이 끝난 후!
     다른 자바 스크립트 라이브러리 또는 프레임워크 함수 호출 또는 이벤트 
     1. 이벤트 등록
     2. 타이머 설정
     3. 네트워크 통신
     등을 할 수 있다.
    */
    componentDidMount(){
        console.log(`[MOUNT04: componentDidMount()]`)
    }

    /**
     *  컴포넌트를 DOM에서 제거 할 때
     *  componentDidMount 에서 등록한 이벤트 , 타이머 , 직접 생성한 DOM 엘리먼트등을 제거 (Clean-up)
     *  작업을 한다.
     * 
     */

     componetWillUnmount(){
        console.log(`[MOUNT04: componentWillUnmount()`)
    }
    

}