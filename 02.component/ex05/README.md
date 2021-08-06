


2. Update Lifecycle

  - getDerivedStateFromProps: props로 받아온 값을 sate에 동기화 한다.
  - shoudComponent : state이 변경 되었을 때, 렌더링 여부를 결정한다
  - render
  - getSnapshotBeforeUpdate: render 메소드 호출 후 , DOM에 변화를 반영하기 직전에 호출 [react V16.3]
  - componentDidUpdate : DOM 업데이트가 끝난 직 후 , DOM 작업이 가능하다.

3.  Unmount Lifecycle
4.  예제:  src/01