let defultCity = '上海'
try {
  if (localStorage.city) {
    defultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defultCity
}
