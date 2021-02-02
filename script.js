let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "rikzan";
}
nama = "alya";


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire("Hallo Alya Sayangku", "Aku ada pertanyaan nih buat kamu yangg", "question").then(function () {
    Swal.fire("Jawab yang jujur ya!").then(function () {
      Swal.fire("Awas aja kalau kamu bohong", "", "error").then(function () {
        const pertanyaan = Swal.fire({
          title: `${nama} sayang ga sama ${sender}?`,
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: `Sayang`,
          denyButtonText: `Enggak`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire(`${sender} juga sayang banget sama ${nama}`).then(function () {
              Swal.fire({
                title: 'Seberapa sayang emangnya?',
                icon: 'question',
                input: 'range',
                inputLabel: 'Antara 1 - 100 ya',
                inputAttributes: {
                  min: 1,
                  max: 100,
                  step: 1
                },
                inputValue: 50
              }).then((e) => {
                val = e.value
                Swal.fire(`Makasih ya udah sayang sama ${sender} ${val}%`).then(function () {
                  Swal.fire({
                    title: `Sekarang ${nama} kangen ga sama ${sender}?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Kangen :(`,
                    denyButtonText: `Enggak`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire(`Huhu iya ${sender} juga kangen ${nama} , makasihhh yaa`).then(function () {
                        Swal.fire('Terakhir deh sayang').then(function () {
                          Swal.fire('Coba klik ikon hati di paling bawah dong')
                        })
                      })
                    } else if (result.isDenied) {
                      Swal.fire('yahhh , emang ga kangen sama pacar sendiri', '', 'error').then(function () {
                        Swal.fire('Yaudah deh okee sayangg :((')
                      })
                    }
                  })
                })
              })
            })
          } else if (result.isDenied) {
            Swal.fire(`Yakin ga suka sama ${sender}?`, '', 'error').then(function () {
              Swal.fire('Yaudah dehh okee sayang :((')
            })
          }
        })
      });
    });
  });
});

