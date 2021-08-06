


2. Update Lifecycle

  - getDerivedStateFromProps: props로 받아온 값을 sate에 동기화 한다.
  - shoudComponent : state이 변경 되었을 때, 렌더링 여부를 결정한다
  - render
  - getSnapshotBeforeUpdate: render 메소드 호출 후 , DOM에 변화를 반영하기 직전에 호출 [react V16.3]
  - componentDidUpdate : DOM 업데이트가 끝난 직 후 , DOM 작업이 가능하다.

3.  Unmount Lifecycle
4.  예제:  src/01

## Function Component LifeCycle

1. Alternative1 : getDerivedStateFromProps
2. After Rendering 함수
3. 어떤 특정 값의 변화에 반응하는 After Rendering 함수 (어떤 특정 상태 값이 변화 -> 렌더링)
4. Alternative 2 : componentDidMount
5. Alternative 3 : componentDidUpdate
6. Alternative 4 : componentWillUnmount