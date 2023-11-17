const Notification = ( message ) => {

  ! message
  ? null
  : (
    <div className="notification">
      { message }
    </div>
  )
}

export default Notification