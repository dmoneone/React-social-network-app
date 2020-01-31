export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
//(www|http:|https:)+[^\s]+[\w]
export const url = value =>
  value && !/(www|http:|https:)+[^\s]+[\w]/.test(value) ?
  'Invalid url address' : undefined