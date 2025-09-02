export function CoolStatus(props: { isCool: boolean }) {
  return (
    <div style={{fontSize: 'xxx-large'}}>
      {props.isCool ? '😎' : '🖕'}
    </div>
  )
}