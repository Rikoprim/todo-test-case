const colors = (color) => {
  switch (color) {
    default:
      return '#000'
    case 'success':
      return '#28a745'
    case 'primary':
      return '#0d6efd'
    case 'danger':
      return '#dc3545'
    case 'secondary':
      return '#6c757d'
    case 'info':
      return '#00B5B5'
  }
}

export default colors