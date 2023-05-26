fetch('/backend/data/newimg.json')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
   console.log(data)
      })