import App from "./App";
export default function Submit(Data) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyp9Eq5NkEl-oQUHov3NsIwh0ChIFM6-tP8PtY7L6U70DKLE8cVYfnvneqBTTtp-PNZ/exec'

    const form = <App/>
    const fD = new FormData(form)
    console.log("fD:",fD)

    return (
    form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: fD})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
     .catch(error => console.error('Error!', error.message))
    })
);
}